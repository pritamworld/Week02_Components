// import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    StatusBar,
    KeyboardAvoidingView,
    Platform,
    Button,
    Alert,
    TouchableOpacity
  } from 'react-native';
  import { useState } from 'react';
  import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
  import { Dropdown } from 'react-native-element-dropdown';
  
  /*
  useState - hook
  */
  
  // npm install react-native-element-dropdown
  // npm i react-native-safe-area-context
  
  export default function DataEntry() {
  
    const [name, setName] = useState("John")
    const [email, setEmail] = useState("Doe")
    const [password, setPassword] = useState("123456")
    const [age, setAge] = useState("50")
    const [listOfUsers, setListOfUsers] = useState([
      {
        name: "alex",
        email: "alex@gmail.com",
      }
    ])
  
    const programOptions = [
      {label: 'CP', value: "Comp. Programming"},
      {label: 'MAD', value: "Mobile App Dev"},
      {label: 'AI', value: "Artificial Intelligence"}
    ]
    const [selectedProgram, setSelectedProgram] = useState("")
  
  
    const handleShowInfo = () => {
      Alert.alert(
        "Info",
        `User Info :\nName: ${name} \nEmail : ${email}`,
        [
          {
            text: "Dismiss",
            style: 'destructive',
            onPress: () => {
              console.log(`Dismiss button pressed`);
            }
          },
          {
            text: "Perfect",
            style: 'default',
            onPress: () => {
              console.log(`User is happy`);
            }
          }
        ]
      )
    }
  
    return (
  
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeAreaStyle}>
  
          <StatusBar
            animated={true}
            backgroundColor="indigo"
            barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
          />
  
          {/* <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
  
          <View style={styles.container}>
            <Text>Session 02 - Components App</Text>
  
            <TextInput
              style={styles.inputStyle}
              value={name}
              onChangeText={setName}
              placeholder='Enter name'
              keyboardType='default'
              autoCorrect={false}
              autoCapitalize='words'
              maxLength={50}
            />
  
            <TextInput
              style={styles.inputStyle}
              value={email}
              onChangeText={setEmail}
              placeholder='Enter email'
              keyboardType='email-address'
              autoComplete='email'
            />
  
            <TextInput
              style={styles.inputStyle}
              value={password}
              onChangeText={setPassword}
              placeholder='Enter password'
              keyboardType='decimal-pad'
              maxLength={10}
              secureTextEntry={true}
            />
  
            <TextInput
              style={styles.inputStyle}
              value={age}
              onChangeText={setAge}
              placeholder='Enter age'
              keyboardType='number-pad'
            />
  
            <Dropdown 
              style={styles.inputStyle}
              data={programOptions}
              value={selectedProgram}
              onChange={ (item) => {setSelectedProgram(item.value)}}
              labelField='label'
              valueField='value'
            />
  
            {/* <Button 
          style={styles.buttonStyle}
          color={'indigo'}
          title='Show Info'
          onPress={ () => {
            handleShowInfo()
          }}
        /> */}
  
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                handleShowInfo()
              }}
            >
              <Text style={styles.buttonText}> Show User Info </Text>
            </TouchableOpacity>
  
            <Text style={styles.outputText}>Name : {name}</Text>
            <Text style={styles.outputText}>Email : {email}</Text>
            <Text style={styles.outputText}>Password : {password}</Text>
            <Text style={styles.outputText}>Age : {age}</Text>
            <Text style={styles.outputText}>Program : {selectedProgram}</Text>
  
            <StatusBar style="auto" />
          {/* </KeyboardAvoidingView> */}
          </View>
  
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    safeAreaStyle: {
      flex: 1
    },
    inputStyle: {
      fontSize: 24,
      borderColor: 'indigo',
      borderWidth: 1,
      padding: 4,
      marginVertical: 10,
      height: 50,
      width: '95%'
    },
    outputText: {
      fontSize: 24,
      width: '95%'
    },
    buttonStyle: {
      width: '95%',
      borderRadius: 5,
      backgroundColor: 'indigo',
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 5,
      alignItems: 'center'
    },
    buttonText: {
      fontSize: 20,
      color: 'white'
    },
  });
  