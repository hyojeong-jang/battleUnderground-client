import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import * as socketActions from '../actions/socket';

import ChatDetail from '../components/ChatDetail';

export default ChatContainer = ({ nickname, room }) => {
  const dispatch = useDispatch();
  const chatList = useSelector(state => state.socket.chatList);

  const receiveChatList = useCallback(() => {
    dispatch(socketActions.receiveChatList());
  });

  useEffect(() => {
    dispatch(socketActions.receiveChatList());
  }, [])

  const dispatchMessage = useCallback((room, messageInfo) => {
    dispatch(socketActions.dispatchMessage(room, messageInfo))
  })
  return (
    <View style={styles.container}>
      <ChatDetail
        nickname={nickname}
        room={room}
        chatList={chatList}
        dispatchMessage={dispatchMessage}
        receiveChatList={receiveChatList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'dunggeunmo',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'black',
    height: '43%',
    width: '98%',
    marginBottom: '2%',
    backgroundColor: 'white'
  }
});