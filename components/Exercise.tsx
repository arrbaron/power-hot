import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import Set from '../components/Set';

class Exercise extends React.Component {
  render() {
    const sets = [];

    for (let i = 0; i < this.props.sets; i++) {
      sets.push({});
    }

    const buttons = sets.map((set, index) => {
      return (
        <Set
          key={index}
          reps={this.props.reps}
        />
      );
    });

    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.heading}>{this.props.name}</Text>
          <Text style={styles.heading}>{this.props.sets} x {this.props.reps} {this.props.weight} lbs</Text>
        </View>
        <View style={styles.row}>
          {buttons}
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }
});

export default Exercise;