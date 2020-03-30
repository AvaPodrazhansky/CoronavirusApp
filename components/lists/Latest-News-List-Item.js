import {ListItem} from "react-native-elements";
import React from "react";
import PropTypes from "prop-types";
import {Image, Linking} from "react-native";

// TODO: Put default source for image (in case image does not load
const LatestNewsListItem = ({newsPicture, newsTitle, newsAuthor, newsDescription, newsURL, date}) => {
    return (
        <ListItem
            // leftAvatar={{source: {uri: newsPicture}}}
            leftElement={<Image source={{uri: newsPicture}} style={{height: 100, width: 125}}/>}
            title={newsTitle}
            // subtitle={newsAuthor}
            // subtitle={newsDescription}
            subtitle={date}
            onPress={() => Linking.openURL(newsURL)}
            topDivider
            bottomDivider
        />
    )
};

LatestNewsListItem.propTypes = {
    newsPicture: PropTypes.string.isRequired,
    newsTitle: PropTypes.string.isRequired,
    newsAuthor: PropTypes.string,
    newsDescription: PropTypes.string.isRequired,
    newsURL: PropTypes.string.isRequired
};

export default LatestNewsListItem;
