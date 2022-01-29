import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const StateCom = () => {
  const [name, setName] = useState('Alamin');
  const [person, setPerson] = useState({
    name: 'Akash',
    age: 40,
  });
  const handlePress = () => {
    setName('Akash');
    setPerson({name: 'Alamin', age: 24});
  };
  return (
    <View style={styles.ItemCenter}>
      <TextInput
        keyboardType={`numeric`}
        placeholder="number"
        style={styles.InputField}
      />
      <Text>{name}</Text>
      <Text>
        {person.name} age is {person.age}
      </Text>
      <Text style={styles.buttonContainer}>
        <Button title="change" onPress={handlePress} />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ItemCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 5,
  },
  InputField: {
    borderWidth: 1,
  },
});
export default StateCom;
