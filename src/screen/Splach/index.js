import { StatusBar, Image } from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Splach = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('auth')
    }, 3000);
  }, []);
  return (
    <LinearGradient
      colors={['#34393F', '#34393F', '#1E1F24']}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="#34393F" barStyle="light-content" />

      <Image
        style={{ width: 150, height: 150 }}
        source={require('../../components/Images/logo.png')}
      />
    </LinearGradient>
  );
};

export default Splach;
