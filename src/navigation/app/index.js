import { createAppContainer, createStackNavigator } from 'react-navigation';
import ScreenFirst from '@screens/firstpage/container';
import ScreenSecond from '@screens/secondpage/secondPage';
import { FIRSTPAGE, SECONDPAGE } from './constants';

const AppNavigation = createStackNavigator({
  [FIRSTPAGE]: {
    screen: ScreenFirst,
    navigationOptions: () => ({
      headerTitle: 'First Page'
    })
  },
  [SECONDPAGE]: {
    screen: ScreenSecond,
    navigationOptions: () => ({
      headerTitle: 'Second Page'
    })
  }
});

export default createAppContainer(AppNavigation);
