import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Set extends React.Component {
  constructor() {
    super();
    this.state = {
      reps: ''
    }
  }

  updateRep() {
    if (!this.state.reps) {
      this.setState({ reps: this.props.reps })
    }
    else {
      this.setState({ reps: this.state.reps - 1 });
    }
  }

  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={() => this.updateRep()}>
        <View>
          <Text>{this.state.reps}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'black',
    borderWidth: 3,
    padding: 20,
    marginBottom: 20
  }
});

export default Set;
