import { View, Text, Image, TextInput, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { Shadow } from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import { Neomorph } from 'react-native-neomorph-shadows';
import React, { useState } from 'react'
import color from '../assets/color';
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';


const SignUp = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(true)
  const [photo, setPhoto] = useState(null);

  const OpenCamera = () => {
      ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
          useFrontCamera: true,
      }).then(image => {
          console.log(image);
      });
  };

  const selectPhotoFromGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhoto(response);
      }
    });
  };

  return (
    <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
      <Image style={{ width: widthPercentageToDP(40), height: heightPercentageToDP(20), alignSelf: 'center' }} source={require('../Images/logo.png')} />
      <ImageBackground style={{ width: widthPercentageToDP(30), height: heightPercentageToDP(15), alignSelf: 'center', justifyContent: 'center' }} source={require('../Images/cricle.png')}>
        <Image style={{ width: 26, height: 33, alignSelf: 'center', tintColor: '#686B6F', top: '5%' }} source={require('../Icon/profile.png')} />
        <TouchableOpacity onPress={() => setShowModel(false)}>
        <ImageBackground style={{ width: 25, height: 25, marginHorizontal: widthPercentageToDP(20), tintColor: '#686B6F', alignItems: 'center', justifyContent: 'center' }} source={require('../Icon/addIcon.png')} />
        </TouchableOpacity>
      </ImageBackground>

      {
        showModel === false ? <View style={{ width: 129, height: 76, borderRadius: 5, marginHorizontal: '55%', bottom: '4%' , elevation:10 }}>
          <LinearGradient
            colors={['#33393F', '#34393F', '#1E1F24']}
            style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={{width:'100%', height:'50%', flexDirection:'row', alignItems:'center'}} onPress={()=> OpenCamera()}>
                <Image style={{width:22, height:17, marginLeft:10}} source={require('../Images/camera.png')}/>
                <Text style={{fontSize:15, fontWeight:'600', color:'white', paddingHorizontal:10}}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'100%', height:'50%', flexDirection:'row', alignItems:'center'}} onPress={selectPhotoFromGallery}>
                <Image style={{width:22, height:17, marginLeft:10}} source={require('../Images/gallery.png')}/>
                <Text style={{fontSize:15, fontWeight:'600', color:'white', paddingHorizontal:10}}>Gallery</Text>
              </TouchableOpacity>
          </LinearGradient>
        </View> : null
      }
      {/* Input  */}
      <View style={{ alignSelf: "center", alignItems: 'center' }}>
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
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#1E1F24', '#34393F', '#34393F',]}
            style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            <Image style={{ width: 15, height: 19, marginHorizontal: 20 }} source={require('../Icon/lock.png')} />
            <TextInput
              placeholder='Password'
              placeholderTextColor={'#3B3D41'}
              style={{ width: 305, height: 50, color: 'white', fontSize: 17, fontWeight: '400' }}
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
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#1E1F24', '#34393F', '#34393F',]}
            style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            <Image style={{ width: 15, height: 19, marginHorizontal: 20 }} source={require('../Icon/lock.png')} />
            <TextInput
              placeholder='Password'
              placeholderTextColor={'#3B3D41'}
              style={{ width: 305, height: 50, color: 'white', fontSize: 17, fontWeight: '400' }}
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
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#1E1F24', '#34393F', '#34393F',]}
            style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
            <Image style={{ width: 15, height: 19, marginHorizontal: 20 }} source={require('../Icon/lock.png')} />
            <TextInput
              placeholder='Password'
              placeholderTextColor={'#3B3D41'}
              style={{ width: 305, height: 50, color: 'white', fontSize: 17, fontWeight: '400' }}
            // onChangeText={onChangeText}
            // value={text}
            />
          </LinearGradient>
        </Shadow>
      </View>


      {/* Button Section */}
      <TouchableOpacity onPress={() => navigation.navigate('OTP')} style={{ alignSelf: 'center' }}>
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
            alignSelf: 'center',
            marginVertical: heightPercentageToDP(6),
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            locations={[0, 0.5, 0.6]}
            colors={['#565962', '#9F9F9F', '#9F9F9F']}
            style={{ width: widthPercentageToDP(88.5), height: heightPercentageToDP(7.5), borderRadius: 50, alignItems: 'center', justifyContent: 'center', bottom: heightPercentageToDP(0.1) }}>
            <Text style={{ fontSize: 20, fontWeight: '400', color: color.white }}>Sign In</Text>
          </LinearGradient>
        </Neomorph>

      </TouchableOpacity>

    </ScrollView>
  )
}

export default SignUp