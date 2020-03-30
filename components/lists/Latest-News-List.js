import React from "react";
import PropTypes from "prop-types";
import LatestNewsListItem from './Latest-News-List-Item'
import {View} from "react-native";
import {connect} from "react-redux";
import Spinner from "../loading";
import {getData, getErrorMessage, isFetchingSelector} from "../../selectors/news/latest-news";
import {fetchLatestNews} from "../../actions/news/latest-news";

const LatestNewsList = ({isFetching, getLatestNews, newsData}) => {

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

    // TODO: JB format the date to be more readable to the user
    // If you can, for the more recent news articles put things like "1 hour ago" or "1 day ago"
    function _formatDate(dateString){
        let year = parseInt(dateString.substring(0, 4), 10);
        let day = parseInt(dateString.substring(5, 7), 10);
        let month = parseInt(dateString.substring(8, 10), 10);
        let utcHour = dateString.substring(11, 13);
        let utcMinute = dateString.substring(14, 16);
        let utcSecond = dateString.substring(17, 19);
        return utcSecond;
    }

    return (
        <View>
            {
                newsData.map((item, i) => <LatestNewsListItem key={i}
                                                              newsPicture={item.urlToImage}
                                                              newsDescription={item.description}
                                                              newsTitle={item.title}
                                                              newsURL={item.url}
                                                              newsAuthor={item.author}
                                                              date={_formatDate(item.publishedAt)}
                />)
            }
        </View>
    )
};

LatestNewsList.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(LatestNewsList);
