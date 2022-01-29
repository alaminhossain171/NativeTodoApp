import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {useState} from 'react/cjs/react.development';

function Scrolling() {
  const [data, setData] = useState([
    {
      name: 'alamin',
      id: 1,
    },
    {
      name: 'amir',
      id: 2,
    },
    {
      name: 'arafat',
      id: 3,
    },
    {
      name: 'Mr A',
      id: 4,
    },
    {
      name: 'Mr B',
      id: 5,
    },
    {
      name: 'Mr C',
      id: 6,
    },
    {
      name: 'Mr C',
      id: 7,
    },
    {
      name: 'Mr C',
      id: 8,
    },
    {
      name: 'Mr C',
      id: 9,
    },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => <Text style={styles.Item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {data.map(item => {
          return (
            <View key={item.key}>
              <Text style={styles.Item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  Item: {
    fontSize: 20,
    backgroundColor: 'pink',
    marginTop: 30,
    paddingVertical: 20,
    paddingLeft: 20,
    marginHorizontal: 5,
    padding: 20,
    marginBottom:10
  },
});

export default Scrolling;
