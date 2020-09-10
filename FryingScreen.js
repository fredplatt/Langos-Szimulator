import React, { useState, setState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Button,
    // Slider,
    StatusBar,
} from 'react-native';
import Slider from '@react-native-community/slider';



// const { navigate } = this.props.navigation;
const FryingScreen = ({ navigation }) => {
    const [value, setValue] = useState(0);

    // const handleValueChange = (event = {}) => {

    //     setValue(event.target);
    // };

    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 32}}>Fry your dough!</Text>
                <Text style={{fontSize: 28}}>But not too much...</Text>
                <Slider maximumValue={100} minimumValue={0} minimumTrackTintColor="white" maximumTrackTintColor="black" step={1} onValueChange={setValue}></Slider>
                <Text style={{fontSize: 26}}>{value < 30 ? "Raw!" : value < 50 ? "Getting there.." : value < 60 ? "Almost!" : value > 59 && value < 85 ? "Looking good!" : "Too much :("}</Text>
                
                <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={{ uri: 'http://www.helengraves.co.uk/wp-content/uploads/2013/01/24288738612_341875534e_b.jpg' }} />
                            
            </View>
            <Button
                title={value > 85 || value < 60 ? "Fuj.." : "Finom!"}
                onPress={() => navigation.navigate('Garlic')}
                disabled={value > 85 || value < 60 ? true : false}
                color={value > 85 || value < 60 ? undefined : "green"}
            />
        </SafeAreaView>
    )
};

// ProfileScreen.navigationOptions = () => {(
//         title: 'Fry'
//     )
// };

export default FryingScreen;
