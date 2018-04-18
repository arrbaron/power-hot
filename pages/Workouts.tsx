import * as React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Workout from '../components/Workout';

class Workouts extends React.Component<{}> {
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
