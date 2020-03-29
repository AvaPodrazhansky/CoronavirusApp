import {ListItem} from "react-native-elements";
import React from "react";
import PropTypes from "prop-types";
import {Linking} from "react-native";

const LatestNewsListItem = ({newsPicture, newsTitle, newsAuthor, newsDescription, newsURL}) => {
    return (
        <ListItem
            leftAvatar={{source: {uri: newsPicture}}}
            title={newsTitle}
            subtitle={newsAuthor}
            rightSubtitle={newsDescription}
            onPress={() => Linking.openURL(newsURL)}
            topDivider
            bottomDivider
        />
    )
};

LatestNewsListItem.propTypes = {
    newsPicture: PropTypes.string.isRequired,
    newsTitle: PropTypes.string.isRequired,
    newsAuthor: PropTypes.string.isRequired,
    newsDescription: PropTypes.string.isRequired,
    newsURL: PropTypes.string.isRequired
};

export default LatestNewsListItem;
