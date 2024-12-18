import React from 'react';
import { FlatList, Text, Button, View } from 'react-native';

export default function CourseList({ courses, onPress }) {
  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Button title="View" onPress={() => onPress(item)} />
        </View>
      )}
    />
  );
}
