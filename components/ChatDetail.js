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
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior='padding'>
        <View style={styles.messages}>
          { chatList.map((chat, idx) => {
            return <View key={idx}>
              <Text style={styles.message}>{`${chat.nickname}: ${chat.content}`}</Text>
            </View>
          })}
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
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-end',
    flex: 1,
    borderTopWidth: 3,
    borderTopColor: 'black',
    borderStyle: 'solid',
    height: '100%',
  },
  input: {
    height: '100%',
    width: '90%',
    fontFamily: 'dunggeunmo',
    backgroundColor: 'white'
  },
  sendButton: {
    width: '10%',
    height: '100%',
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'dunggeunmo'
  },
  messages: {
    flex: 1,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    height: 250,
    padding: 15
  },
  message: {
    fontFamily: 'dunggeunmo',
    marginBottom: 7
  }
});