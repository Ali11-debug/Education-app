import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function HomeScreen({ navigation }) {
  const { courses } = useContext(AppContext);

  return (
    <View>
      <Text>Welcome to the Education App</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="View Details" onPress={() => navigation.navigate('CourseDetail', { course: item })} />
          </View>
        )}
      />
    </View>
  );
}
