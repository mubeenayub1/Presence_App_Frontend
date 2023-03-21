import { View, Text, StatusBar, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Shadow } from 'react-native-neomorph-shadows';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';



const Auth = () => {

  const [componentToShow, setComponentToShow] = useState(true);
  return (
    <LinearGradient
      colors={['#34393F', '#34393F', '#1E1F24']}
      style={{ flex: 1, alignItems: 'center' }}>
      <StatusBar backgroundColor="#34393F" barStyle="light-content" />

      <View style={{width:'95%', alignSelf:'center', alignItems:'center',justifyContent:'center', backgroundColor:'red', alignItems:'center', justifyContent:'center'}}>
      <Shadow
        inner={false} // <- enable inner shadow
        useArt // <- set this prop to use non-native shadow on ios
        style={{
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.3,
          shadowColor: "black",
          shadowRadius: 10,
          borderRadius: 0,
          backgroundColor: '#26272B',
          width:300,
          height: 45,
          marginVertical: 20,
          flexDirection: 'row',
          alignSelf:'center'
        }}
      >
        <TouchableOpacity onPress={() => setComponentToShow(true)} style={{backgroundColor:'pink', width:'50%', height:45}}>

          {/* <View style={{width:'100%', height:45, backgroundColor:'red'}}></View> */}

          {

            componentToShow === true ?
              <ImageBackground style={{ width: wp(47.5), left:wp(0) ,height: 45,  alignItems: 'center', justifyContent: "center" }} source={require('../../components/Images/loginRec.png')}>
                <Text style={{ fontSize: 16, fontWeight: '400', color: 'white' }}>Sign In</Text>
              </ImageBackground>
              :
              <View style={{ alignItems: 'center', justifyContent: 'center', width: 182, height: 45 }}>
                <Text style={{ fontSize: 16, fontWeight: '400', color: 'white' }}>Sign In</Text>
              </View>

          }
        </TouchableOpacity>


        <TouchableOpacity onPress={() => setComponentToShow(false)} style={{backgroundColor:'yellow', width:'50%', height:45}}>
        {/* <View style={{width:'100%', height:45, backgroundColor:'pink'}}></View> */}

          {
            componentToShow === false ?
            <ImageBackground style={{ width: wp(47.5), alignSelf:'flex-end'  ,height: 45,  alignItems: 'center', justifyContent: "center" }} source={require('../../components/Images/loginRec.png')}>
            <Text style={{ fontSize: 16, fontWeight: '400', color: 'white'}}>Sign In</Text>
          </ImageBackground>
          :
          <View style={{ alignItems: 'center', justifyContent: 'center', width: 182, height: 45 }}>
            <Text style={{ fontSize: 16, fontWeight: '400', color: 'white' }}>Sign In</Text>
          </View>
          }
        </TouchableOpacity>

      </Shadow>
      </View>
      {
        componentToShow === true ? <Login /> : <SignUp />
      }
    </LinearGradient>

    
  )
}

export default Auth