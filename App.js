import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Welcome from './screens/Welcome';
import { Alert, 
  Button, 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  var [name, setName] = useState('Pritesh')
  var [pwd, setPwd] = useState('Patel')
  var [age, setAge] = useState(0)
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Welcome college="GBC" />
        <Welcome college="Seneca" />
        <Welcome college="York" />
        {/* The styles prop is not available on the <Button /> component. You should consider wrapping the buttons in a div  */}
        <View style={
            {
              marginHorizontal:20,
              marginVertical:20,
            }} >
          <Button title='Click Me'
            color='#ff0000' 
            onPress={() => openAlert()}/>
        </View>

         <View style={
            {
              marginHorizontal:20,
              marginVertical:20,
            }} >
          <Button title='Click again' 
            style={{margin: 10}}
            color='#ff0000' 
            onPress={() => Alert.alert('Show', "Thank you")}/>
        </View>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
          
        <TextInput style={styles.input}
          onChangeText={setName} 
          value={name} />


        <TextInput style={styles.input}
          secureTextEntry={true}
          onChangeText={setPwd} 
          value={pwd} />
          
        <TextInput style={styles.input}
          placeholder='Enter Your Age'
          keyboardType='numeric'
          onChangeText={setAge} 
          value={age} />
        
        <Text>{`${name} ${pwd} ${age}`} </Text>
        
        <StatusBar style="auto" />
          
      </View>
    </SafeAreaView>
  );
}

const openAlert = () => {
  Alert.alert("Welcome to React Native")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgstyle: {
    flex: 1,
    height: 100,
     width: 100
  },
  input: {
    height:40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#ff0'
  }
});
