import React from "react"
import ReactNative from "react-native"
import WebView from "react-native-webview"

const {View, StyleSheet, ActivityIndicator} = ReactNative;

export default class EmbeddedTweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            embedHtml: null,
        }
    }

    componentDidMount() {
        this.setupEmbed()
    }

    setupEmbed() {
        let tweetUrl = "https://publish.twitter.com/oembed?url=" + encodeURIComponent(this.props.tweetUrl);
        fetch(tweetUrl, {method: "GET", headers: {Accepts: "application/json"}}).then(
            resp => {
                resp.json().then(json => {
                    let html = json.html;
                    this.setState({
                        loading: false,
                        embedHtml: html,
                    })
                })
            }
        )
    }

    renderLoading() {
        if (this.state.loading) {
            return (
                <View style={styles.loadingWrap}>
                    <ActivityIndicator/>
                </View>
            )
        }
    }

    renderEmbed() {
        if (this.state.embedHtml) {
            let html = `<!DOCTYPE html>\
        <html>\
          <head>\
            <meta charset="utf-8">\
            <meta name="viewport" content="width=device-width, initial-scale=1.0">\
            </head>\
            <body>\
              ${this.state.embedHtml}\
            </body>\
        </html>`;

            return (
                <View style={styles.webviewWrap}>
                    <WebView source={{html: html}} style={styles.webview}/>
                </View>
            )
        }
    }

    render() {
        return (
            <View
                style={[styles.container, {height: this.props.height || 300}, this.props.style]}
            >
                {this.renderLoading()}
                {this.renderEmbed()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingWrap: {
        flex: 1,
        backgroundColor: "#999",
        justifyContent: "center",
        alignItems: "center",
    },
    webviewWrap: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#999",
    },
    webview: {
        flex: 1,
    },
});
