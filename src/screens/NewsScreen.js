/**
 * @file File with the News Screen component.
 * @author Jay Bhatt
 */

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import ArticleListItem from "../components/listItem/ArticleListItem";
import Spinner from "../components/spinner/Spinner";
import { fetchArticles } from "../api/api";
import STRINGS from "../utils/strings";

/**
 * The News Screen component.
 *
 * @returns {JSX.Element} A component that represents the News Screen.
 * @constructor
 */
const NewsScreen = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchArticles().then((resArticles) => {
            setArticles(resArticles);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Spinner />;
    } else if (articles.length === 0) {
        return (
            <View style={styles.noNews}>
                <Image
                    source={require("../../assets/images/newspaper.png")}
                    style={styles.image}
                />
                <Text>{STRINGS.newsUnavailable}</Text>
            </View>
        );
    } else {
        // noinspection JSValidateTypes, JSUnresolvedReference
        return (
            <ScrollView>
                {articles.map((article, i) => (
                    <ArticleListItem
                        key={i}
                        url={article.url}
                        imageUrl={article.urlToImage}
                        title={article.title}
                        isoDateString={article.publishedAt}
                    />
                ))}
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    noNews: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        marginBottom: 16,
    },
});

export default NewsScreen;
