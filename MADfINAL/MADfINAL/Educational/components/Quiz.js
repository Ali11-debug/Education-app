import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const questions = [
  {
    id: 1,
    question: 'What is React Native?',
    options: ['A mobile development framework', 'A database', 'An AI tool', 'A game engine'],
    correct: 0,
  },
  {
    id: 2,
    question: 'Which language is used in React Native?',
    options: ['JavaScript', 'Python', 'C++', 'Swift'],
    correct: 0,
  },
  {
    id: 3,
    question: 'What is the purpose of AsyncStorage?',
    options: ['To store data locally', 'To fetch APIs', 'To handle animations', 'To manage states'],
    correct: 0,
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View>
          <Text style={styles.scoreText}>You scored {score} out of {questions.length}</Text>
          <Button title="Restart Quiz" onPress={restartQuiz} />
        </View>
      ) : (
        <View>
          <Text style={styles.questionText}>
            {questions[currentQuestion].question}
          </Text>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => handleAnswer(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  optionButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
    marginVertical: 8,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
