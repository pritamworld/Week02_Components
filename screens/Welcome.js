import React from 'react'
import { Text, StyleSheet } from "react-native";

export default function Welcome(props) {
  return (
   <Text style= {styles.content}>Welcome to {props.college} College</Text>
  )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#00f'
    }
})
