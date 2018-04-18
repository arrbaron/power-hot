import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Workouts from './pages/Workouts';
import Exercises from './pages/Exercises';

export class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Workouts />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StackNavigator({
  Workouts: {
    screen: Workouts
  },
  Exercises: {
    screen: Exercises
  }
});
