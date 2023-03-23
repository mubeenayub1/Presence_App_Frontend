import { View, Text, Image , TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Shadow } from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import React, { useState } from 'react'
import color from '../assets/color';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ALERT_TYPE,  Toast } from 'react-native-alert-notification';



const Login = () => {
  const navigation = useNavigation()
  const [password , setPassword] = useState('')
  const [email , setEmail] = useState('')



  const handleBtn = () => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE3NDA2ZjZmYmQ3YjRjYWJmNDczODUiLCJpYXQiOjE2Nzk1MjAzMjEsImV4cCI6MTY4MDgxNjMyMX0.siXpbkH1Y326-_zc6P3xKgRL1bsUUn290Dr1CsTKTUo");

var raw = JSON.stringify({
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://16.170.213.237:4000/api/v1/login", requestOptions)
  .then(response => response.text())
  .then(result => {
    let data = JSON.parse(result)
    console.log(data);
    if(data.success === false){
      return  Toast.show({
          type: ALERT_TYPE.WARNING,
          title: 'Warning',
          textBody: data.message,
        })
      
    }
    if(data.sucess === true){
      navigation.replace('OTP')
    }
  })
  .catch(error => console.log('error', error));
  }







  return (
    <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
      <Image style={{width:widthPercentageToDP(40) , height:heightPercentageToDP(20), alignSelf:'center'}} source={require('../Images/logo.png')}/>
    
    {/* Input  */}
    <View style={{alignSelf:"center", width:widthPercentageToDP(90)}}>
    <Shadow
    inner={false} // <- enable inner shadow
    useArt // <- set this prop to use non-native shadow on ios
    style={{
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.3,
      shadowColor: "black",
      shadowRadius: 10,
      borderRadius: 0,
      backgroundColor: 'transparent',
      width: widthPercentageToDP(90),
      height: heightPercentageToDP(7.5),
      marginVertical: 20,
      flexDirection: 'row',
    }}
  >
    <LinearGradient
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      colors={['#1E1F24', '#34393F', '#34393F', ]}
      style={{ flex: 1, alignItems: 'center' , flexDirection:'row'}}>
        <Image style={{width:15 , height:19, marginHorizontal:20}} source={require('../Icon/profile.png')} />
        <TextInput
        placeholder='Email'
        placeholderTextColor={'#3B3D41'}
        style={{width:'82%', height:50, color:'white', fontSize:17, fontWeight:'400'}}
        onChangeText={setEmail}
        value={email}
      />
      </LinearGradient>
  </Shadow>
  {/* Input  */}
  <Shadow
    inner={false} // <- enable inner shadow
    useArt // <- set this prop to use non-native shadow on ios
    style={{
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.3,
      shadowColor: "black",
      shadowRadius: 10,
      borderRadius: 0,
      backgroundColor: 'transparent',
      width: widthPercentageToDP(90),
      height: heightPercentageToDP(7.5),
      marginVertical: 20,
      flexDirection: 'row'
    }}
  >
    <LinearGradient
      start={{x: 0, y: 0}} end={{x: 1, y: 0}}
      colors={['#1E1F24', '#34393F', '#34393F', ]}
      style={{ width:'100%', alignItems: 'center' , flexDirection:'row'}}>
        <Image style={{width:13.93 , height:18.89, marginHorizontal:20}} source={require('../Icon/lock.png')} />
        <TextInput
        secureTextEntry={true}
        placeholder='Password'
        placeholderTextColor={'#3B3D41'}
        style={{width:'82%' ,height:50, color:'white' ,fontSize:17, fontWeight:'400'}}
        onChangeText={setPassword}
        value={password}
      />
      </LinearGradient>
  </Shadow>
  <Text style={{fontSize:17 , fontWeight:'400', color:color.white, alignSelf:'flex-end'}}>Forgot Password</Text>
  </View>


{/* Button Section */}
<TouchableOpacity onPress={() => handleBtn()} style={{alignSelf:'center'}}>
  <Neomorph
  darkShadowColor="black" // <- set this
  lightShadowColor="white" // <- this
  style={{
    shadowOpacity: 0.3, // <- and this or yours opacity
    shadowRadius: 1,
    borderRadius: 50,
    backgroundColor: color.dark,
    width: widthPercentageToDP(89),
    height: heightPercentageToDP(8),
    alignSelf:'center',
    marginVertical:heightPercentageToDP(6),
    alignItems:'center',
    justifyContent:'center'
  }}
>
<LinearGradient
  start={{x: 0, y: 0}} end={{x: 1, y: 0}}
  locations={[0,0.5,0.6]}
  colors={['#565962', '#9F9F9F', '#9F9F9F']}
  style={{width:widthPercentageToDP(88.5), height:heightPercentageToDP(7.5), borderRadius:50, alignItems:'center',justifyContent:'center', bottom:heightPercentageToDP(0.1)}}>
  <Text style={{fontSize:20 , fontWeight:'400', color:color.white}}>Sign In</Text>
</LinearGradient>
</Neomorph>

</TouchableOpacity>


  </ScrollView>
  )
}

export default Login