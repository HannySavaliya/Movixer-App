import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SearchBox = () => {
    const [ search, setSearch ] = useState('')
  return (
    <View style={style.bg}>
        <View style={style.search}>
                <TextInput
                style={style.input}
                onChangeText={text => setSearch(text)}
                value={search}
                placeholder="Search your movies..."
                placeholderTextColor="white"
                />
                <AntDesign name="search1" size={24} color="darkorange" style={style.icon} />
        </View>
    </View>
  );
};

const style = StyleSheet.create({
  search: {
    width: '90%',
    height: 45,
    color: 'white',
    borderColor: 'white',
    opacity: 0.5,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 13,
    marginVertical: 30,
    marginLeft: 20,
    flexDirection: 'row',
  },
  bg: {
    backgroundColor: 'black',
    height: '100%'
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
    marginLeft: 10
  },
  icon: {
    marginTop: 10
  }
})
export default SearchBox;

