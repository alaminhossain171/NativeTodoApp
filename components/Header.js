import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
