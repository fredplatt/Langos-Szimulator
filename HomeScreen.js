import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View><Text style={styles.sectionTitle, { fontSize: 45, textAlign: "center" }}>Langos Szimulator</Text></View>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Szia!</Text>
                <Text style={styles.sectionDescription}>
                  <Text style={styles.highlight}>Welcome</Text> to Langos Szimulator.
                      </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Image style={{ height: 250, width: 250, alignSelf: "center" }} source={{ uri: 'http://visitbudapest.travel/images/made/images/content/body/langos-3_574_383.jpg' }} />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle, { fontSize: 24 }}>Feeling Hungary?</Text>
                <Button title="Sztart" color="green" onPress={() => navigate('Frying')} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeScreen;
