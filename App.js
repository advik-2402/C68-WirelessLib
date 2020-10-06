import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookTransacScreen from './screens/BookTransacScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: BookTransacScreen },
  Search: { screen: SearchScreen }
})

const AppContainer = createAppContainer(TabNavigator);