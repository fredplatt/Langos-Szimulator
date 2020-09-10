import React, { useState } from 'react';
import {
    View,
    Text,
    Picker,
    Image,
    Button,
} from 'react-native';

const GarlicScreen = ({ navigation }) => {
    const [value, setValue] = useState(0);

    return (
        <View>
            <Text style={{ fontSize: 32, fontStyle: "italic" }}>A brush with breath...</Text>
            <Text style={{ fontSize: 30 }}>Szelect your garlic level</Text>
            <Picker
                selectedValue={value}
                style={{ height: 50, width: 200 }}
                onValueChange={setValue}
            >
                <Picker.Item label="Boring" value="Boring" />
                <Picker.Item label="Opa.." value="Tame" />
                <Picker.Item label="Bazmeg!" value="Hungarian" />
                <Picker.Item label="Vampire Slayer!!" value="Vampire Slayer" />
            </Picker>
            <View>
                <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={{ uri: 'https://goulashtoguiso.files.wordpress.com/2015/08/28.jpg?w=768&h=512' }} />
            </View>

            <Button
                title={value == "Tame" ? "Be brave!" : value != "Vampire Slayer" ? "Fuj.." : "Finom!"}
                onPress={() => navigation.navigate('Cream')}
                disabled={value != "Vampire Slayer" ? true : false}
                color={value != "Vampire Slayer" ? undefined : "green"}
            />
        </View>
    )
};

export default GarlicScreen;
