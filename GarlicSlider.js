import React, { useState, setState } from 'react';
import {
    // SafeAreaView,
    StyleSheet,
    // ScrollView,
    View,
    Text,
    Image,
    // Button,
    // StatusBar,
    // TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper';
// import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';
import GallerySwiper from "react-native-gallery-swiper";


const GarlicSlider = () => {
    return (
        // <ViewPager style={styles.viewPager} initialPage={0}>
        //     <View key="1">
        //         <Text>First page</Text>
        //     </View>
        //     <View key="2">
        //         <Text>Second page</Text>
        //     </View>
        // </ViewPager>
        
            {/* <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper> */}

            // <GallerySwiper
            // images={[
            //     // Version *1.1.0 update (or greater versions): 
            //     // Can be used with different image object fieldnames.
            //     // Ex. source, source.uri, uri, URI, url, URL
            //     { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
            //     { source: require("yourApp/image.png"),
            //         // IMPORTANT: It is REQUIRED for LOCAL IMAGES
            //         // to include a dimensions field with the
            //         // actual width and height of the image or
            //         // it will throw an error.
            //         dimensions: { width: 1080, height: 1920 } },
            //     { source: require("yourApp/image.png"),
            //         // Version *1.5.0 update (or greater versions):
            //         // An alternative to the dimensions field.
            //         // This will also be acceptable.
            //         width: 1080,
            //         height: 1920 },
            //     { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
            //     { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
            //     { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg" },
            //     { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
            //     { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
            // ]}
            // Version *1.15.0 update
            // onEndReached={() => {
            //     // add more images when scroll reaches end
            // }}
        // />

        
        //     <View key="1">
        //         <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={{ uri: 'https://goulashtoguiso.files.wordpress.com/2015/08/28.jpg?w=768&h=512' }} />
        //         <Text style={styles.text}>Boring</Text>
        //     </View>
        //     <View key="2">
        //         <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={{ uri: 'https://goulashtoguiso.files.wordpress.com/2015/08/28.jpg?w=768&h=512' }} />
        //         <Text style={styles.text}>Bad breath</Text>
        //     </View>
        //     <View key="3">
        //         <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={{ uri: 'https://goulashtoguiso.files.wordpress.com/2015/08/28.jpg?w=768&h=512' }} />
        //         <Text style={styles.text}>Vampire slayer!</Text>
        //     </View>
        // </ViewPager>
    )
};

const styles = StyleSheet.create({
    wrapper: {
    },
    viewPager: {
        flex: 1,
        height: 300,
        width: 300
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default GarlicSlider;
