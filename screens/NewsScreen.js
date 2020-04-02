import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from "react-redux";
import {fetchLatestNews} from "../actions/news/latest-news";
import {getData, getErrorMessage, isFetchingSelector} from "../selectors/news/latest-news";
import LatestNewsList from "../components/lists/Latest-News-List";
import Spinner from "../components/loading";
import PropTypes from "prop-types";
import EmbeddedTweet from "../components/twitter-components";
import {CDC_URL, WHO_URL} from "../constants/constant-list";

const NewsScreen = ({getLatestNews, newsData, isFetching, errorMessage}) => {
    React.useEffect(() => {
        if (!isFetching) {
            getLatestNews();
        }
    }, []);

    if (isFetching === true) {
        return (
            <Spinner/>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <LatestNewsList/>
                {/*<EmbeddedTweet tweetUrl={CDC_URL}/>*/}
                {/*<EmbeddedTweet tweetUrl={WHO_URL}/>*/}
            </ScrollView>
        </View>
    );
};

NewsScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 0,
    },
});

NewsScreen.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    newsData: PropTypes.array,
    errorMessage: PropTypes.object,
    getLatestNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isFetching: isFetchingSelector(state),
    newsData: getData(state),
    errorMessage: getErrorMessage(state)
});

const mapDispatchToProps = dispatch => ({
    getLatestNews: () => dispatch(fetchLatestNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
