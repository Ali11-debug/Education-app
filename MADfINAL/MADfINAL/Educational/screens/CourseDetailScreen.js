import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CourseDetailScreen({ route, navigation }) {
  const { course } = route.params;

  return (
    <View>
      <Text>{course.title}</Text>
      <Text>{course.description}</Text>
      <Button title="Take Quiz" onPress={() => navigation.navigate('Quiz', { courseId: course.id })} />
    </View>
  );
}
