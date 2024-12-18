import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function QuizScreen({ route }) {
  const { courseId } = route.params;
  const [score, setScore] = useState(0);

  return (
    <View>
      <Text>Quiz for Course {courseId}</Text>
      <Text>Your Score: {score}</Text>
      <Button title="Finish Quiz" onPress={() => alert('Quiz Finished!')} />
    </View>
  );
}
