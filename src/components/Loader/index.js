import React from 'react';
import {StyleSheet, Text,Image, View} from 'react-native';
const Loader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          // backgroundColor: '#70707070',
        }}
      />
      <View
        style={{
          height: 80,
          width: 80,
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
      <Image  source={require('../Images/loader.gif')} style={{height:50,width:50}}/>

        <Text
          style={{
            color: 'red',
            paddingBottom: 10,
            fontSize: 12,
        
          }}>
          Loading...
        </Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 222,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    // backgroundColor: 'rgba(255,255,255,0.2)',
    // backgroundColor:'#70707070',
    opacity: 1,
  },
  image: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
    marginTop: -50,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
