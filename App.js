
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Todays Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>
          Today's Task
        </Text>

        <View style={styles.items}>
          {/* Task will go here */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
          <Task text = {'Task 3'} />

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20.
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30
  },
});
