import { View, Text, Image , TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Shadow } from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import React from 'react'
import color from '../assets/color';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const Login = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={{flex:1, }} showsVerticalScrollIndicator={false}>
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
        placeholder='Username'
        placeholderTextColor={'#3B3D41'}
        style={{width:305, height:50, color:'white', fontSize:17, fontWeight:'400'}}
        // onChangeText={onChangeText}
        // value={text}
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
      style={{ flex: 1, alignItems: 'center' , flexDirection:'row'}}>
        <Image style={{width:15 , height:19, marginHorizontal:20}} source={require('../Icon/lock.png')} />
        <TextInput
        placeholder='Password'
        placeholderTextColor={'#3B3D41'}
        style={{width:305, height:50, color:'white', fontSize:17, fontWeight:'400'}}
        // onChangeText={onChangeText}
        // value={text}
      />
      </LinearGradient>
  </Shadow>
  <Text style={{fontSize:17 , fontWeight:'400', color:color.white, alignSelf:'flex-end'}}>Forgot Password</Text>
  </View>


{/* Button Section */}
<TouchableOpacity onPress={() => navigation.navigate('OTP')}>
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
    left:widthPercentageToDP(1),
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