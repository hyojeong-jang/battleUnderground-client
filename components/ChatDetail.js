import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';

export default ChatDetail = ({ dispatchMessage, nickname, room, chatList }) => {
  const [ message, setMessage ] = useState('');

  const onSendButtonPress = useCallback(() => {
    const messageInfo = { nickname, content: message };
    dispatchMessage(room, messageInfo);
    setMessage('');
  }, [message]);

  return (
    // <KeyboardAvoidingView behavior='padding'>
      <ScrollView style={styles.container}>
        <View style={styles.messages}>
          {
            chatList.map((chat, idx) => {
              return <View key={idx}>
                <Text>{chat.content}</Text>
                <Text>{chat.nickname}</Text>
              </View>
            })
          }
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={(msg) => setMessage(msg)}
          ></TextInput>
          <TouchableOpacity
            style={styles.sendButton}
            onPress={onSendButtonPress}
          >
            <Text style={styles.buttonText}>send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    // </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-end',
  },
  input: {
    width: '80%',
    height: 30,
    fontFamily: 'dunggeunmo',
  },
  sendButton: {
    width: '10%',
    height: 30,
  },
  buttonText: {
    fontFamily: 'dunggeunmo'
  },
  messages: {
    height: 240,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 3
  }
});