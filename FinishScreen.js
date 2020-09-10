import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Button
} from 'react-native';

const FinishScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 28, textAlign: "center", fontStyle: "italic" }}>oh my gosh langos</Text>

            <View>
                <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={{ uri: 'https://66.media.tumblr.com/bbb4e7c6c708ba9dd2bd853386abbff4/tumblr_pjlikjMqJe1rkkang_540.jpg' }} />
            </View>

            <Button
                title="Give me another"
                onPress={() => navigation.navigate('Home')}
                color="green"
            />
        </View>
    )
};

export default FinishScreen;
