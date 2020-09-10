/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import HomeScreen from './HomeScreen';
import FryingScreen from './FryingScreen';
import CreamScreen from './CreamScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import GarlicScreen from './GarlicScreen';
import CheeseScreen from './CheeseScreen';
import BaconScreen from './BaconScreen';
import SaltScreen from './SaltScreen';
import FinishScreen from './FinishScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Frying: {screen: FryingScreen},
  Garlic: {screen: GarlicScreen},
  Cream: {screen: CreamScreen},
  Cheese: {screen: CheeseScreen},
  Bacon: {screen: BaconScreen},
  Salt: {screen: SaltScreen},
  Finish: {screen: FinishScreen}
});

const App = createAppContainer(MainNavigator);

export default App;
