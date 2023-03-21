import { StatusBar, Image, Text } from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#34393F', '#34393F', '#1E1F24']}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="#34393F" barStyle="light-content" />

      <Image
        style={{ width: 150, height: 150 }}
        source={require('../../components/Images/logo.png')}
      />
      <Text style={{alignSelf:'center', color:'white', fontWeight:'600', fontSize:18}}>Please Wait We Verify You Identity</Text>
    </LinearGradient>
  );
};

export default Home;
