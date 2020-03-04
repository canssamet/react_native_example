import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ScreenFirst from '@screens/firstpage/container';
import ScreenSecond from '@screens/secondpage/secondPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FIRSTPAGE, SECONDPAGE } from './constants';
import IconWithBadge from './components/IconWithBadge';

// const AppNavigation = createStackNavigator({
//   [FIRSTPAGE]: {
//     screen: ScreenFirst
//   },
//   [SECONDPAGE]: {
//     screen: ScreenSecond,
//     navigationOptions: () => ({
//       headerTitle: 'Second Page'
//     })
//   }
// });

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === FIRSTPAGE) {
    iconName = `md-notifications${focused ? '' : '-outline'}`;
    // We want to add badges to home tab icon
    IconComponent = HomeIconWithBadge;
  } else if (routeName === SECONDPAGE) {
    iconName = `md-heart${focused ? '' : '-empty'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const AppNavigation = createBottomTabNavigator(
  {
    [FIRSTPAGE]: {
      screen: ScreenFirst
    },
    [SECONDPAGE]: {
      screen: ScreenSecond,
      navigationOptions: () => ({
        headerTitle: 'Second Page'
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default createAppContainer(AppNavigation);
