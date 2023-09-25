/**
 * @file File with the Article List Item component.
 * @author Jay Bhatt
 */

import { Avatar, ListItem } from "react-native-elements";
import PropTypes from "prop-types";
import { Linking, StyleSheet } from "react-native";
import moment from "moment";

/**
 * The Article List Item component.
 *
 * @param {string} url The URL of the article.
 * @param {string} imageUrl The URL of the article image.
 * @param {string} title The title of the article.
 * @param {string} isoDateString An ISO string that represents the date and time
 *                               that the article was published.
 * @returns {JSX.Element} A component that represents a List Item for a single
 *                        news article.
 * @constructor
 */
const ArticleListItem = ({ url, imageUrl, title, isoDateString }) => {
    return (
        <ListItem style={styles.listItem} onPress={() => Linking.openURL(url)}>
            <Avatar rounded source={{ uri: imageUrl }} />
            <ListItem.Content>
                <ListItem.Title style={styles.titleText}>
                    {title}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.subtitleText}>
                    {moment(isoDateString).format("lll")}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 4,
    },
    titleText: {
        padding: 2,
    },
    subtitleText: {
        padding: 2,
    },
});

ArticleListItem.propTypes = {
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isoDateString: PropTypes.string.isRequired,
};

export default ArticleListItem;
