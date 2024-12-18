import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ProgressTracker({ progress }) {
  const renderProgress = ({ item }) => {
    const { courseId, title, completed, total } = item;
    const percentage = Math.round((completed / total) * 100);

    return (
      <View style={styles.progressContainer}>
        <Text style={styles.courseTitle}>{title}</Text>
        <View style={styles.progressBar}>
          <View
            style={{
              ...styles.progress,
              width: `${percentage}%`,
            }}
          />
        </View>
        <Text style={styles.percentage}>{percentage}% Complete</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Progress Tracker</Text>
      <FlatList
        data={progress}
        keyExtractor={(item) => item.courseId.toString()}
        renderItem={renderProgress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressContainer: {
    marginBottom: 16,
  },
  courseTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  percentage: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
  },
});
