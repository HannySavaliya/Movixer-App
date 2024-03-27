  import React, { useState } from 'react';
  import { TextInput, View, StyleSheet, Text, ScrollView } from 'react-native';
  import { AntDesign } from '@expo/vector-icons'; 

  const Search = () => {
      const [ search, setSearch ] = useState('')
    return (
      <View style={style.container}>
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
        <ScrollView>
          <View style={style.boxcontain}>
              <View>
                  <Text style={style.box}></Text>
                  <Text style={style.title}>Movie name</Text>
              </View>
              <View>
                  <Text style={style.box}></Text>
                  <Text style={style.title}>Movie name</Text>
              </View>
          </View>
          <View style={style.boxcontain}>
              <View>
                  <Text style={style.box}></Text>
                  <Text style={style.title}>Movie name</Text>
              </View>
              <View>
                  <Text style={style.box}></Text>
                  <Text style={style.title}>Movie name</Text>
              </View>
          </View>
          <View style={style.boxcontain}>
              <View>
                  <Text style={style.box}></Text>
                  <Text style={style.title}>Movie name</Text>
              </View>
              <View>
                  <Text style={style.box}></Text>
                  <Text style={style.title}>Movie name</Text>
              </View>
          </View>
          
          
        </ScrollView>
      </View>
    );
  };

  const style = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      height: '100%'
    },
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
      marginTop: 60,
      marginLeft: 20,
      flexDirection: 'row',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      height: 40,
      color: 'white',
      marginLeft: 10
    },
    box: {
      backgroundColor: 'white',
      opacity: 0.3,
      height: 262,
      marginHorizontal: 20,
      width: 165,
      borderRadius: 10,
    },
    boxcontain:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginHorizontal: 10,
      marginLeft: 15
    },
    title: {
      color: 'white',
      marginTop: 10,
      marginBottom: 30,
      fontSize: 17,
      textAlign: 'center'
    },
    icon: {
      marginTop: 10
    }
  })
  export default Search;

  
