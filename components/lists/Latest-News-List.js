import React from "react";
import PropTypes from "prop-types";
import LatestNewsListItem from './Latest-News-List-Item'
import {View} from "react-native";
import {connect} from "react-redux";
import Spinner from "../loading";
import {getData, getErrorMessage, isFetchingSelector} from "../../selectors/news/latest-news";
import {fetchLatestNews} from "../../actions/news/latest-news";
import {DEFAULT_COVID_URL} from "../../constants/constant-list";

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

    function _formatDate(dateString) {
        const currentDate = new Date();
        let dayDifference = currentDate.getUTCDate() - parseInt(dateString.substring(8, 10), 10);
        let hourDifference = currentDate.getUTCHours() - parseInt(dateString.substring(11, 13), 10);
        let minuteDifference = currentDate.getUTCMinutes() - parseInt(dateString.substring(14, 16), 10);
        let secondDifference = currentDate.getUTCSeconds() - parseInt(dateString.substring(17, 19), 10);
        if (dayDifference < 1) {
            if (hourDifference < 24 && hourDifference > 1) {
                return (hourDifference + ' hours ago');
            } else if (hourDifference === 1) {
                return (hourDifference + ' hour ago');
            } else {
                if (minuteDifference < 60 && minuteDifference > 1) {
                    return (minuteDifference + ' minutes ago');
                } else if (minuteDifference === 1) {
                    return (minuteDifference + ' minute ago');
                } else {
                    if (secondDifference < 60 && secondDifference > 1) {
                        return (secondDifference + ' seconds ago');
                    } else if (secondDifference === 1) {
                        return (secondDifference + ' second ago');
                    } else {
                        return (secondDifference + ' seconds ago');
                    }
                }
            }
        } else {
            if (dayDifference === 1) {
                return (dayDifference + ' day ago');
            } else {
                return (dayDifference + ' days ago');
            }
        }
    }

    function _imageExists(imageURL) {
        if (imageURL.match(/\.(jpeg|jpg|gif|png)$/) != null) {
            return imageURL;
        } else {
            return DEFAULT_COVID_URL;
        }
    }

    return (
        <View>
            {
                newsData.map((item, i) => <LatestNewsListItem key={i}
                                                              newsPicture={_imageExists(item.urlToImage)}
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
