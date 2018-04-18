import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Workout from '../components/Workout';
import navStyles from '../styles/navStyles';

class Workouts extends React.Component<{}> {
  static navigationOptions = ({ navigation }) => {
    return {
      ...navStyles,
      title: 'Workouts'
    }
  };

  constructor() {
    super();
    this.state = {
      workouts: [
        {
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
        },
        {
          date: 'Monday',
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
        },
        {
          date: 'Friday',
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
        },
      ]
    }
  }

  goToExercises = () => {
    this.props.navigation.navigate('Exercises');
  };

  render() {
    const workouts = this.state.workouts.map((workout: object, index: number) => {
      return <Workout
        key={index}
        date={workout.date}
        exercises={workout.exercises}
        unit={"lbs"}
      />
    });

    return (
      <View style={styles.container}>
        {workouts}
        <Button
          onPress={this.goToExercises}
          title="Go to exercises page"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
});

export default Workouts;
