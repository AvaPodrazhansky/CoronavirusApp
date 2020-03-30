import React from "react";
import PropTypes from "prop-types";
import {View, StyleSheet, ScrollView} from "react-native";
import {connect} from "react-redux";
import {getHTML} from "../../selectors/news/twitter-news";
import {fetchTwitterNews} from "../../actions/news/twitter-news";
import WebView from "react-native-webview";

const CDCNewsTimeline = ({html, fetchTwitterNews}) => {

    React.useEffect(() => {
        fetchTwitterNews('https://twitter.com/CDCgov?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor');
    }, []);


    function renderEmbed() {
        if (html) {
            let constructedHtml = `<!DOCTYPE html>\
                                    <html>\
                                        <head>\
                                            <meta charset="utf-8">\
                                            <meta name="viewport" content="width=device-width, initial-scale=1.0">\
                                        </head>\
                                        <body>\
                                            ${html}\
                                        </body>\
                                    </html>`;
            return (
                <View style={styles.webviewWrap}>
                    <WebView source={{html: constructedHtml}} style={styles.webview}/>
                </View>
            )
        }
    }

    return (
        <ScrollView style={{height: 300}}>
            {renderEmbed()}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    webviewWrap: {
        flex: 1,
    },
    webview: {
        flex: 1,
        width: 300,
        height: 200, // height is hard to control
    },
});

CDCNewsTimeline.propTypes = {
    html: PropTypes.object,
    fetchTwitterNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    html: getHTML(state),
});

const mapDispatchToProps = dispatch => ({
    fetchTwitterNews: newsURL => dispatch(fetchTwitterNews(newsURL))
});

export default connect(mapStateToProps, mapDispatchToProps)(CDCNewsTimeline);
