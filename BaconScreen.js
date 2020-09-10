import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    Button,
    Switch,
    StyleSheet
} from 'react-native';
// import { TouchableHighlight } from 'react-native-gesture-handler';

const BaconScreen = ({ navigation }) => {
    const [bacon, setBacon] = useState(false);
    const [onion, setOnion] = useState(false);

    return (
        <View>
            <Text style={{ fontSize: 32, textAlign: "center" }}>Extras</Text>

            <View style={styles.button}>
                <View>
                    <Text>Bacon</Text>
                    <Switch onValueChange={setBacon} value={bacon} />
                </View>
                <View>
                    <Text>Onion</Text>
                    <Switch onValueChange={setOnion} value={onion} />
                </View>
                <Image style={styles.image} source={!bacon && !onion ? { uri: 'https://alizswonderland.com/wp-content/uploads/2018/09/Retro-L%C3%A1ngos-Arany-J%C3%A1nos-Budapest-food-guide-to-traditional-Hungarian-dishes-AlizsWonderland-FB.jpg' } : bacon && onion ? { uri: 'https://74nullanulla.hu/files/6/4/6416556cd67bc51ac16f5dff17817afa.jpg' } : bacon && !onion ? { uri: 'https://live.staticflickr.com/8592/29415325073_752a9b66a4_b.jpg' } : { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/13/a9/80/00/cheese-and-onion.jpg' }} />
            </View>

            <Button
                title={onion && !bacon ? "Bit weird, but fine.." : "Finom!"}
                onPress={() => navigation.navigate('Salt')}
                // disabled={!creamed ? true : false}
                color="green"
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
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

export default BaconScreen;
