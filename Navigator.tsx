import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Exercises from './pages/Exercises';
import Workouts from './pages/Workouts';

const Navigator = StackNavigator({
  Workouts: {
    screen: Workouts
  },
  Exercises: {
    screen: Exercises
  }
});

export default Navigator;
