import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Todos(props) {
  // eslint-disable-next-line no-unused-vars
  const {content, id} = props;
  return (
    <TouchableOpacity onPress={() => props.handleDelete(props.id)}>
      <View style={styles.item}>
        <Icon name="trash" size={18} color={'#333'} />
        <Text style={styles.itemText}>{content}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },
});
export default Todos;
