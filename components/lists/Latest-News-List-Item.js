import {ListItem} from "react-native-elements";
import React from "react";
import PropTypes from "prop-types";
import {Image, Linking, StyleSheet} from "react-native";
import colors from "../../constants/Colors";

const LatestNewsListItem = ({newsPicture, newsTitle, newsURL, date}) => {
    return (
        <ListItem
            leftElement={<Image source={{uri: newsPicture}} style={{height: 100, width: 125}}/>}
            title={newsTitle}
            titleStyle={styles.titleText}
            subtitle={date}
            subtitleStyle={styles.subtitleText}
            onPress={() => Linking.openURL(newsURL)}
            containerStyle={styles.listItem}
            topDivider
            bottomDivider
        />
    )
};

const styles = StyleSheet.create({
    titleText: {
        padding: 3,
    },
    subtitleText: {
        padding: 3,
    },
    listItem: {
        padding: 7
    }
});

LatestNewsListItem.propTypes = {
    newsPicture: PropTypes.string.isRequired,
    newsTitle: PropTypes.string.isRequired,
    newsURL: PropTypes.string.isRequired
};

export default LatestNewsListItem;
