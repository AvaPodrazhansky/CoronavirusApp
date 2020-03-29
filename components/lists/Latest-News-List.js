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

    return (
        <View>
            {
                newsData.map((item, i) => <LatestNewsListItem key={i}
                                                              newsPicture={item.urlToImage}
                                                              newsDescription={item.description}
                                                              newsTitle={item.title}
                                                              newsURL={item.url}
                                                              newsAuthor={item.author}/>)
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
