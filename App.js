import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator ,createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import ComponentScreen from './src/screens/ComponentScreen';
// import ListScreen from './src/screens/ListScreen';
// import ImageScreen from './src/screens/ImageScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import ColorScreen from './src/screens/ColorScreen';
//import SearchScreen from './src/screens/SearchScreen';
//import QR from './src/screens/QR';
// import BoxScreen from './src/screens/BoxScreen';
// import SearchScreen from './src/screens/SearchScreen';
import Onboarding from './src/screens/Onboarding';
import Profile from './src/screens/Profile';
import Register from './src/screens/Register';
import Pro from './src/screens/Pro';
import Articles from './src/screens/Articles';
import Elements from './src/screens/Elements';
//import { Pedometer } from 'expo-sensors';
//import Pedometer from './src/components/Pedometer';
// import Settings from './src/screens/Settings';
//import Home from './src/screens/Hoe';
//import Profile from './src/screens/Profile';
//import Hoe from './src/screens/Hoe';
// import login from './src/Components/login/login';

const navigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    // Components:ComponentScreen,
    // List:ListScreen,
    // Image:ImageScreen,
    // Counter:CounterScreen,
    // Color:ColorScreen,
     Pr:Pro,
     Art:Articles,
     Ele:Elements,
    // Search:SearchScreen,
     Onboard:Onboarding,
    // Set:Settings,
    // Login:login,
   Profile:Profile,
   Regis:Register,
   //Ped:Pedometer,
  }, 
  {
    initialRouteName: 'Onboard',
    defaultNavigationOptions: {
      title: 'DocPal'
    }
  }
);

export default createAppContainer(navigator);