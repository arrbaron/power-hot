import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';

const Workout = props => {
  const { date, exercises, unit, navigation } = props;
  const exerciseList = exercises.map((exercise, index) => {
    return <Text style={styles.exercise} key={index}>{exercise.name} : {exercise.sets} x {exercise.reps} {exercise.weight} {unit}</Text>
  });

  const goToWorkout = () => {
    navigation.navigate('Exercises');
  };

  return (
    <TouchableHighlight onPress={goToWorkout}>
      <View style={styles.workout}>
        <View style={styles.row}>
          <Text style={styles.date}>{date}</Text>
          <Icon style={styles.icon} name="copy" />
        </View>
        <View style={styles.row}>
          <View>{exerciseList}</View>
          <Icon style={styles.icon} name="arrow-forward" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  workout: {
    backgroundColor: 'purple',
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    marginTop: 20
  },
  date: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  exercise: {
    fontSize: 16,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  icon: {
    color: 'white'
  }
});

export default Workout;
