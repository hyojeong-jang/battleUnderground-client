import React from 'react';
import { Alert, View, StyleSheet } from "react-native";

export default AlertError = ({ navigation: { goBack } }) => {
  Alert.alert(
    'Delay Sever Request',
    'try again',
    [
      { text: 'OK', onPress: () => goBack() }
    ],
    { cancelable: false }
  );
  return (
    <View style={styles.container}>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
