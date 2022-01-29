import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

function AddTodo({handleSubmit}) {
  const [text, setText] = React.useState('');
  return (
    <View>
      <TextInput
        style={styles.inputFiled}
        placeholder="Enter your todo"
        onChangeText={e => setText(e)}
      />
      <Button
        onPress={() => handleSubmit(text)}
        title="Add to List"
        color="coral"
        style={styles.btnSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputFiled: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 4,
    marginBottom: 10,
  },
});
export default AddTodo;
