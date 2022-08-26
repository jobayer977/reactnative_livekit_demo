import * as React from 'react';
import {StyleSheet, View, Pressable, Image} from 'react-native';

export const RoomControls = ({
  micEnabled = false,
  setMicEnabled,
  cameraEnabled = false,
  setCameraEnabled,
  onDisconnectClick,
  style,
}) => {
  var micImage = micEnabled
    ? require('../assets/baseline_mic_white_24dp.png')
    : require('../assets/baseline_mic_off_white_24dp.png');
  var cameraImage = cameraEnabled
    ? require('../assets/baseline_videocam_white_24dp.png')
    : require('../assets/baseline_videocam_off_white_24dp.png');

  return (
    <View style={[style, styles.container]}>
      <Pressable
        onPress={() => {
          setMicEnabled(!micEnabled);
        }}>
        <Image style={styles.icon} source={micImage} />
      </Pressable>

      <Pressable
        onPress={() => {
          setCameraEnabled(!cameraEnabled);
        }}>
        <Image style={styles.icon} source={cameraImage} />
      </Pressable>

      <Pressable
        onPress={() => {
          onDisconnectClick();
        }}>
        <Image
          style={styles.icon}
          source={require('../assets/baseline_cancel_white_24dp.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
});
