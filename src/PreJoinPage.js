import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, View, TextInput, Text, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const PreJoinPage = ({navigation}) => {
  const {colors} = useTheme();
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Name</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          ...styles.input,
        }}
        onChangeText={setUserName}
        value={userName}
      />

      <Text style={{color: colors.text}}>RoomId</Text>
      <TextInput
        style={{
          color: colors.text,
          borderColor: colors.border,
          ...styles.input,
        }}
        onChangeText={setRoomName}
        value={roomName}
      />

      <Button
        title="Connect"
        onPress={() => {
          navigation.push('RoomPage', {
            userName,
            roomName,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
