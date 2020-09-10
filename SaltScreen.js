import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Button
} from 'react-native';
import Orientation from 'react-native-orientation-locker';



const SaltScreen = ({ navigation }) => {

    const [salty, setSalty] = useState(false);
    const [upsideDown, setUpsideDown] = useState(false);

    _onOrientationDidChange = (orientation) => {
        if (orientation == 'PORTRAIT-UPSIDEDOWN') {
            setSalty(true)
            setUpsideDown(true)
        } else {
            setUpsideDown(false)
        }
    };

    useEffect(() => {
        Orientation.addDeviceOrientationListener(this._onOrientationDidChange)
    })

    return (
        <View>
            <Text style={{ fontSize: 32, textAlign: "center" }}>Turn upszide-down for szalt!</Text>

            <View>
                <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={ !upsideDown ? { uri: 'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F01%2F406ae26c88e25fdec049ef9373334cd720ab28d7.jpeg' } : { uri: 'http://wwwf.imperial.ac.uk/blog/imperial-medicine/files/2019/03/salt_blog.jpg' }} />
            </View>

            <Button
                title={!salty ? "oh go on.." : "Finom!"}
                onPress={() => navigation.navigate('Finish')}
                disabled={!salty ? true : false}
                color={!salty ? undefined : "green"}
            />
        </View>
    )
};

export default SaltScreen;
