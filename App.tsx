import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Workouts from './pages/Workouts';

class App extends React.Component<{}> {
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

export default App;
