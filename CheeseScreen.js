import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';

const CheeseScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={{ fontSize: 32, textAlign: "center" }}>I kid you not, it's actually called sajt..</Text>

            <Text style={{ fontSize: 28, textAlign: "center", marginTop: 20 }}>Szwipe to grate your cheese!</Text>

            <ScrollView style={styles.scrollView} horizontal={true} decelerationRate="fast">
                <View style={styles.button}>
                    <Image style={styles.image} source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/10/21/8a/08/sour-cream-langos.jpg' }} />
                    <Button title="More..." disabled={true} />
                </View>
                <View style={styles.button}>
                    <Image style={styles.image} source={{ uri: 'https://festival.si.edu/Media/Default/blog/13_web.jpg' }} />
                    <Button title="More..." disabled={true} />
                </View>
                <View style={styles.button}>
                    <Image style={styles.image} source={{ uri: 'https://live.staticflickr.com/8484/8247982524_cb34097c49_b.jpg' }} />
                    <Button title="More..." disabled={true} />
                </View>
                <View style={styles.button}>
                    <Image style={styles.image} source={{ uri: 'https://goulashtoguiso.files.wordpress.com/2015/08/181.jpg' }} />
                    <Button title="More..." disabled={true} />
                </View>
                <View style={styles.button}>
                    <Image style={styles.image} source={{ uri: 'https://alizswonderland.com/wp-content/uploads/2018/09/Retro-L%C3%A1ngos-Arany-J%C3%A1nos-Budapest-food-guide-to-traditional-Hungarian-dishes-AlizsWonderland-FB.jpg' }} />
                    <Button
                        title="Finom!"
                        onPress={() => navigation.navigate('Bacon')}
                        color="green"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
    image: {
        height: 300,
        width: 300,
        alignSelf: "center",
        marginBottom: 10
    },
    button: {
        margin: 20
    }
});

export default CheeseScreen;
