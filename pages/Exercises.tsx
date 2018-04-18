import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Exercise from '../components/Exercise';
import navStyles from '../styles/navStyles';

class Exercises extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      ...navStyles,
      title: 'Exercises'
    }
  };

  constructor() {
    super();
    this.state = {
      date: 'Upcoming',
      exercises: [
        {
          name: 'Bench press',
          sets: 5,
          reps: 3,
          weight: 160
        },
        {
          name: 'Squat',
          sets: 5,
          reps: 5,
          weight: 225
        },
        {
          name: 'Deadlift',
          sets: 1,
          reps: 5,
          weight: 235
        }
      ]
    }
  }

  render() {
    const exercises = this.state.exercises.map((exercise, index) => {
      return (
        <Exercise
          key={index}
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          weight={exercise.weight}
        />
      )
    });

    return (
      <View>
        <Text>{this.state.date}</Text>
        {exercises}
      </View>
    );
  }
};

export default Exercises;
