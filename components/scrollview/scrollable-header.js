import PropTypes from "prop-types";
import styles from './style';

import React, {Component} from 'react';
import {
    Animated,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    RefreshControl,
    Dimensions
} from 'react-native';

// const HEADER_MAX_HEIGHT = 300;
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
// const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const DEFAULT_MAX_HEIGHT_PERCENTAGE = 30;
const DEFAULT_MIN_HEIGHT_PERCENTAGE = 15;

class ScrollableHeaderScrollView extends Component {
    constructor(props) {
        super(props);

        // console.log(Dimensions.get('window').height)
        // // Max percentage of screen that the header will take up
        // this.HEADER_MAX_HEIGHT = Math.round((props.headerMaxHeightPercentage || this.defaultProps.headerMaxHeightPercentage) *
        //     Dimensions.get('window').height / 100);
        // console.log('MAX: ' + this.HEADER_MAX_HEIGHT)
        //
        // // Min percentage of screen that the header will take up
        // this.HEADER_MIN_HEIGHT = Math.round((props.headerMinHeightPercentage || this.defaultProps.headerMinHeightPercentage)
        //     * Dimensions.get('window').height / 100) + (Platform.OS === 'ios' ? 0 : 13);
        // console.log('MIN: ' + this.HEADER_MIN_HEIGHT)


        // Max percentage of screen that the header will take up
        this.HEADER_MAX_HEIGHT = Math.round(DEFAULT_MAX_HEIGHT_PERCENTAGE *
            Dimensions.get('window').height / 100);

        // Min percentage of screen that the header will take up
        this.HEADER_MIN_HEIGHT = Math.round(DEFAULT_MIN_HEIGHT_PERCENTAGE
            * Dimensions.get('window').height / 100) + (Platform.OS === 'ios' ? 0 : 13);

        this.HEADER_SCROLL_DISTANCE = this.HEADER_MAX_HEIGHT - this.HEADER_MIN_HEIGHT;

        this.state = {
            scrollY: new Animated.Value(
                // iOS has negative initial scroll value because content inset...
                Platform.OS === 'ios' ? -this.HEADER_MAX_HEIGHT : 0,
            ),
            refreshing: false,
        };
    }

    _renderScrollViewContent() {
        const data = Array.from({length: 30});
        return (
            <View style={styles.scrollViewContent}>
                {data.map((_, i) => (
                    <View key={i} style={styles.row}>
                        <Text>{i}</Text>
                    </View>
                ))}
            </View>
        );
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
                    // style={{...styles.fill, marginTop: HEADER_SCROLL_DISTANCE}}
                    style={[styles.fill,
                        // {marginTop: HEADER_SCROLL_DISTANCE},
                        {
                            backgroundColor: '#00ff00',
                            // position: 'absolute'
                        },
                        {transform: [{translateY: scrollTranslate}]}]}
                    // style={styles.fill}
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
                        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
                        // marginTop: HEADER_MAX_HEIGHT,
                        backgroundColor: '#c92596'
                    }}>
                        {/*PLACEHOLDER VIEW*/}
                        <Animated.View
                            pointerEvents="none"
                            style={[
                                {
                                    ...styles.placeholder,
                                    // marginTop: 0,
                                    height: HEADER_MIN_HEIGHT,
                                    backgroundColor: '#0000ff'
                                    // height: HEADER_MAX_HEIGHT,
                                    // backgroundColor: this.props.headerBackgroundColor
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
                    pointerEvents="none"
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
                                // height: HEADER_MAX_HEIGHT-HEADER_MIN_HEIGHT
                                // padding: 20
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
                    {/*<Text style={styles.title}>Title</Text>*/}
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
//
// // import React, {Component} from 'react';
// // import {
// //     Animated,
// //     Platform,
// //     StatusBar,
// //     StyleSheet,
// //     Text,
// //     View,
// //     RefreshControl,
// // } from 'react-native';
// //
// // const HEADER_MAX_HEIGHT = 300;
// // const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
// // const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
// //
// // export default class App extends Component {
// //     constructor(props) {
// //         super(props);
// //
// //         this.state = {
// //             scrollY: new Animated.Value(
// //                 // iOS has negative initial scroll value because content inset...
// //                 Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
// //             ),
// //             refreshing: false,
// //         };
// //     }
// //
// //     _renderScrollViewContent() {
// //         const data = Array.from({length: 30});
// //         return (
// //             <View style={styles.scrollViewContent}>
// //                 {data.map((_, i) => (
// //                     <View key={i} style={styles.row}>
// //                         <Text>{i}</Text>
// //                     </View>
// //                 ))}
// //             </View>
// //         );
// //     }
// //
// //     render() {
// //         // Because of content inset the scroll value will be negative on iOS so bring
// //         // it back to 0.
// //         const scrollY = Animated.add(
// //             this.state.scrollY,
// //             Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
// //         );
// //         const headerTranslate = scrollY.interpolate({
// //             inputRange: [0, HEADER_SCROLL_DISTANCE],
// //             outputRange: [0, -HEADER_SCROLL_DISTANCE],
// //             extrapolate: 'clamp',
// //         });
// //
// //         const imageOpacity = scrollY.interpolate({
// //             inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
// //             outputRange: [1, 1, 0],
// //             extrapolate: 'clamp',
// //         });
// //         const imageTranslate = scrollY.interpolate({
// //             inputRange: [0, HEADER_SCROLL_DISTANCE],
// //             outputRange: [0, 100],
// //             extrapolate: 'clamp',
// //         });
// //
// //         const titleScale = scrollY.interpolate({
// //             inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
// //             outputRange: [1, 1, 0.8],
// //             extrapolate: 'clamp',
// //         });
// //         const titleTranslate = scrollY.interpolate({
// //             inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
// //             outputRange: [0, 0, -8],
// //             extrapolate: 'clamp',
// //         });
// //
// //         return (
// //             <View style={styles.fill}>
// //                 <StatusBar
// //                     translucent
// //                     barStyle="light-content"
// //                     backgroundColor="rgba(0, 0, 0, 0.251)"
// //                 />
// //                 <Animated.ScrollView
// //                     style={styles.fill}
// //                     scrollEventThrottle={1}
// //                     onScroll={Animated.event(
// //                         [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
// //                         {useNativeDriver: true},
// //                     )}
// //                     refreshControl={
// //                         <RefreshControl
// //                             refreshing={this.state.refreshing}
// //                             onRefresh={() => {
// //                                 this.setState({refreshing: true});
// //                                 setTimeout(() => this.setState({refreshing: false}), 1000);
// //                             }}
// //                             // Android offset for RefreshControl
// //                             progressViewOffset={HEADER_MAX_HEIGHT}
// //                         />
// //                     }
// //                     // iOS offset for RefreshControl
// //                     contentInset={{
// //                         top: HEADER_MAX_HEIGHT,
// //                     }}
// //                     contentOffset={{
// //                         y: -HEADER_MAX_HEIGHT,
// //                     }}
// //                 >
// //                     {this._renderScrollViewContent()}
// //                 </Animated.ScrollView>
// //                 <Animated.View
// //                     pointerEvents="none"
// //                     style={[
// //                         styles.header,
// //                         {transform: [{translateY: headerTranslate}]},
// //                     ]}
// //                 >
// //                     <Animated.Image
// //                         style={[
// //                             styles.backgroundImage,
// //                             {
// //                                 opacity: imageOpacity,
// //                                 transform: [{translateY: imageTranslate}],
// //                             },
// //                         ]}
// //                         source={require('../../assets/images/icon.png')}
// //                     />
// //                 </Animated.View>
// //                 <Animated.View
// //                     style={[
// //                         styles.bar,
// //                         {
// //                             transform: [
// //                                 {scale: titleScale},
// //                                 {translateY: titleTranslate},
// //                             ],
// //                         },
// //                     ]}
// //                 >
// //                     <Text style={styles.title}>Title</Text>
// //                 </Animated.View>
// //             </View>
// //         );
// //     }
// // }
// //
// // const styles = StyleSheet.create({
// //     fill: {
// //         flex: 1,
// //     },
// //     content: {
// //         flex: 1,
// //     },
// //     header: {
// //         position: 'absolute',
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         backgroundColor: '#03A9F4',
// //         overflow: 'hidden',
// //         height: HEADER_MAX_HEIGHT,
// //     },
// //     backgroundImage: {
// //         position: 'absolute',
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         width: null,
// //         height: HEADER_MAX_HEIGHT,
// //         resizeMode: 'cover',
// //     },
// //     bar: {
// //         backgroundColor: 'transparent',
// //         marginTop: Platform.OS === 'ios' ? 28 : 38,
// //         height: 32,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         position: 'absolute',
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //     },
// //     title: {
// //         color: 'white',
// //         fontSize: 18,
// //     },
// //     scrollViewContent: {
// //         // iOS uses content inset, which acts like padding.
// //         paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
// //     },
// //     row: {
// //         height: 40,
// //         margin: 16,
// //         backgroundColor: '#D3D3D3',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //     },
// // });
// //

// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Slide from "@material-ui/core/Slide";
// import {Text, View} from "react-native";
// import React from "react";
//
// function ScrollableHeaderScrollView(props) {
//     const trigger = useScrollTrigger();
//     return (
//         <Slide in={!trigger}>
//             <View>
//                 <Text>Hello</Text>
//             </View>
//         </Slide>
//     );
// }
//
// export default ScrollableHeaderScrollView;

// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Slide from '@material-ui/core/Slide';
// import {Text, View} from "react-native";
//
// function HideOnScroll(props) {
//     const {children, window} = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({target: window ? window() : undefined});
//
//     return (
//         <Slide appear={false} direction="down" in={!trigger}>
//             {children}
//         </Slide>
//     );
// }
//
// HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };
//
// export default function ScrollableHeaderScrollView(props) {
//     return (
//         <View>
//             {/*<CssBaseline/>*/}
//             <HideOnScroll {...props}>
//                 <View>
//                     <Text variant="h6">Scroll to Hide App Bar</Text>
//                 </View>
//             </HideOnScroll>
//             <View/>
//             {props.componentList}
//         </View>
//     );
// }