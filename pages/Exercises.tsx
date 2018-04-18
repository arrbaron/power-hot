import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import navStyles from '../styles/navStyles';

class Exercises extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      ...navStyles,
      title: 'Exercises'
    }
  };

  render() {
    return (
      <Text>Exercises</Text>
    );
  }
};

export default Exercises;
