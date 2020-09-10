import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    TouchableOpacity
} from 'react-native';

const CreamScreen = ({ navigation }) => {
    const [creamed, setCreamed] = useState(false);

    return (
        <View>
            <Text style={{ fontSize: 28, fontStyle: "italic", textAlign:"center" }}>I szcream, you szcream, we all szscream for</Text>
            <Text style={{ fontSize: 32, textAlign:"center", textTransform:"uppercase" }}>Szour cream!!</Text>

            <View>
                <TouchableOpacity onPress={setCreamed}>
                <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={creamed ? { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/10/21/8a/08/sour-cream-langos.jpg' } : { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/10/21/89/e6/garlic-langos.jpg'}} />
                </TouchableOpacity>
                <Text style={{alignSelf: "center" }}>{ creamed ? "Ura!" : "Dab your cream on the langos" }</Text>
            </View>

            <Button
                title={!creamed ? "Fuj.." : "Finom!"}
                onPress={() => navigation.navigate('Cheese')}
                disabled={!creamed ? true : false}
                color={!creamed ? undefined : "green"}
            />
        </View>
    )
};

export default CreamScreen;
