import PropTypes from "prop-types";
import styles from './style';
import React, {Component} from 'react';
import {
    Animated,
    Platform,
    StatusBar,
    View,
    RefreshControl,
    Dimensions
} from 'react-native';

const DEFAULT_MAX_HEIGHT_PERCENTAGE = 30;
const DEFAULT_MIN_HEIGHT_PERCENTAGE = 15;

class ScrollableHeaderScrollView extends Component {
    constructor(props) {
        super(props);

        // Max percentage of screen that the header will take up
        this.HEADER_MAX_HEIGHT = Math.round(DEFAULT_MAX_HEIGHT_PERCENTAGE *
            Dimensions.get('window').height / 100);

        // Min percentage of screen that the header will take up
        this.HEADER_MIN_HEIGHT = Math.round(DEFAULT_MIN_HEIGHT_PERCENTAGE
            * Dimensions.get('window').height / 100) //+ (Platform.OS === 'ios' ? 0 : 13);

        this.HEADER_SCROLL_DISTANCE = this.HEADER_MAX_HEIGHT - this.HEADER_MIN_HEIGHT;

        this.state = {
            scrollY: new Animated.Value(
                // iOS has negative initial scroll value because content inset...
                Platform.OS === 'ios' ? -this.HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false,
        };
    }


    render() {

        const {HEADER_SCROLL_DISTANCE, HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT} = this;

        // Because of content inset the scroll value will be negative on iOS so bring
        // it back to 0.
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE - HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        const scrollTranslate = scrollY.interpolate({
            // inputRange: [0, HEADER_SCROLL_DISTANCE], // Mostly works
            inputRange: [HEADER_MAX_HEIGHT, Dimensions.get('window').height],
            // inputRange: [0, HEADER_MAX_HEIGHT],
            outputRange: [0, 0],
            extrapolate: 'clamp',
        });

        const placeHolderTranslate = scrollY.interpolate({
            inputRange: [HEADER_MAX_HEIGHT, HEADER_MAX_HEIGHT + HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MAX_HEIGHT - HEADER_SCROLL_DISTANCE - HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });

        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });

        return (
            <View style={styles.fill}>
                <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                />
                <Animated.ScrollView
                    style={[styles.fill,
                        {transform: [{translateY: scrollTranslate}]}]}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
                        {useNativeDriver: true},
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({refreshing: true});
                                setTimeout(() => this.setState({refreshing: false}), 1000);
                            }}
                            // Android offset for RefreshControl
                            progressViewOffset={HEADER_MAX_HEIGHT}
                        />
                    }
                    // iOS offset for RefreshControl
                    contentInset={{
                        top: HEADER_MAX_HEIGHT,
                    }}
                    contentOffset={{
                        y: -HEADER_MAX_HEIGHT,
                    }}
                >
                    <View style={{
                        paddingTop: Platform.OS === 'android' ? HEADER_MAX_HEIGHT : 0,
                    }}>
                        {/*PLACEHOLDER VIEW*/}
                        <Animated.View
                            pointerEvents="none"
                            style={[
                                {
                                    ...styles.placeholder,
                                    // marginTop: 0,
                                    height: HEADER_MIN_HEIGHT,
                                    // height: HEADER_MAX_HEIGHT,
                                    backgroundColor: this.props.headerBackgroundColor
                                },
                                {transform: [{translateY: headerTranslate}]},
                            ]}
                        />
                        <View>
                            {this.props.children}
                        </View>
                    </View>
                </Animated.ScrollView>
                <Animated.View
                    // pointerEvents="none"
                    style={[
                        {
                            ...styles.header,
                            height: HEADER_MAX_HEIGHT + HEADER_MIN_HEIGHT,
                            // height: HEADER_MAX_HEIGHT,
                            backgroundColor: this.props.headerBackgroundColor
                        },
                        {transform: [{translateY: headerTranslate}]},
                    ]}
                >
                    <Animated.View
                        style={[
                            {
                                ...styles.backgroundImage,
                                backgroundColor: this.props.headerBackgroundColor
                            },
                            {
                                opacity: imageOpacity,
                                transform: [{translateY: imageTranslate}],
                                marginTop: HEADER_MIN_HEIGHT,
                            },
                        ]}
                    >
                        {this.props.shrinkingTitleComponent}
                    </Animated.View>
                </Animated.View>
                <Animated.View
                    style={[
                        styles.bar,
                        {
                            transform: [
                                {scale: titleScale},
                                {translateY: titleTranslate},
                            ],
                        },
                    ]}
                >
                    {this.props.mainTitleComponent}
                </Animated.View>
            </View>
        );
    }
}

ScrollableHeaderScrollView.propTypes = {
    scrollViewContent: PropTypes.arrayOf(React.Component),
    mainTitleComponent: PropTypes.node.isRequired,
    shrinkingTitleComponent: PropTypes.node.isRequired,
    headerBackgroundColor: PropTypes.string.isRequired,
    maxHeaderHeightPercentage: PropTypes.number, // Max percentage of screen that the header will take up
    minHeaderHeightPercentage: PropTypes.number // Min percentage of screen that the header will take up
};

export default ScrollableHeaderScrollView;
