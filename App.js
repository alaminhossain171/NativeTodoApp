import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useState} from 'react/cjs/react.development';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {text: 'buy cofee', key: 1},
    {text: 'Create an app', key: 2},
    {text: 'play on the switch', key: 3},
    {text: 'play on the native', key: 4},
  ]);
  const handleDelete = key => {
    setTodos(prev => {
      return prev.filter(todo => todo.key !== key);
    });
  };
  const handleSubmit = text => {
    if (text.length > 3) {
      setTodos(prevTodo => {
        return [{text: text, key: Math.random().toString()}, ...prevTodo];
      });
    } else {
      Alert.alert('opps!', 'character must be greather than 3', [
        {
          text: 'understood',
          onPress: () => console.log('alert closed'),
        },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <Todos
                  content={item.text}
                  id={item.key}
                  handleDelete={handleDelete}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

export default App;
