import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import {Neomorph} from 'react-native-neomorph-shadows';
import color from '../../components/assets/color';
import {Dialog, ALERT_TYPE} from 'react-native-alert-notification';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Selfie({route}) {
  const profileImage = route?.params?.profileimage;
  const [selfieimg, setselfieImg] = useState(null);
  const [realImage, setRealImage] = useState(null);
  // console.log('profile data------', profileImage);

  //

  const navigation = useNavigation();
  // const handleBtn = async () => {
  //     OpenCamera()
  //     const value = await AsyncStorage.getItem('ImageObject')
  //     const realData = JSON.parse(value)
  //     setRealImage(realData)
  // }

  const OpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
    }).then(image => {
      setselfieImg(image);
      handleApi(image);
    });
  };
  const handleApi = async image => {
    // console.log("---->",image)
    const imgObj = {
      name: image.path.split('/')[image.path.split('/').length - 1],
      type: image.mime,
      size: image.size,
      uri: image.path,
      lastModified: image.modificationDate,
      lastModifiedDate: new Date(),
    };
    //   console.log("------ Type 1",imgObj);
    const value = await AsyncStorage.getItem('ImageObject');
    const realData = JSON.parse(value);
    //   console.log("----> Type",realData)

    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFjYmFiMmEwNjdjYWZjNDJjMWQzMTciLCJpYXQiOjE2Nzk2MDQ0MDMsImV4cCI6MTY4MDkwMDQwM30.jm2lfHXn0-Fz2j1PNOzS7WAj-XeOrjZ8ok_bSB3phaw',
    );

    var formdata = new FormData();
    formdata.append('image', imgObj);
    formdata.append('image', realData);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch('http://16.170.213.237:4000/api/v1/matchFaces', requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result);
        if (data.error === 'No faces detected') {
          return Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Image Not Match',
            textBody: data.error,
            button: 'close',
          });
        }

        navigation.replace('home')
      })
      
      await AsyncStorage.removeItem('ImageObject')
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.body}>
      {/* <Pressable style={{height:50,width:"80%",backgroundColor:"red"}} onPress={()=> OpenCamera()}>
                <Text style={{color:"white",fontSize:18}}>Capture</Text>
            </Pressable> */}
      <StatusBar backgroundColor="#34393F" barStyle="light-content" />

      <View
        style={{
          width: '100%',
          height: heightPercentageToDP(12),
          backgroundColor: 'red',
        }}>
        <LinearGradient
          colors={['#34393F', '#34393F', '#1E1F24']}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '35%',
              height: '100%',
              alignSelf: 'flex-start',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 25, height: 25, tintColor: 'white'}}
              source={require('../../components/Images/arrow.png')}
            />
            <Image
              style={{width: 50, height: 50}}
              source={require('../../components/Images/logo.png')}
            />
          </View>
        </LinearGradient>
      </View>
      <ImageBackground
        style={{
          width: '100%',
          height: heightPercentageToDP(88),
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
        source={require('../../components/Images/dummySelfie.png')}>
        <TouchableOpacity onPress={() => OpenCamera()}>
          <Neomorph
            darkShadowColor="black" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.1, // <- and this or yours opacity
              shadowRadius: 1,
              borderRadius: 50,
              backgroundColor: color.dark,
              width: widthPercentageToDP(89),
              height: heightPercentageToDP(8),
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10%',
            }}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              locations={[0, 0.5, 0.6]}
              colors={['#565962', '#9F9F9F', '#9F9F9F']}
              style={{
                width: widthPercentageToDP(88.5),
                height: heightPercentageToDP(7.5),
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                bottom: heightPercentageToDP(0.1),
                alignSelf: 'center',
              }}>
              <Text
                style={{fontSize: 20, fontWeight: '400', color: color.white}}>
                Capture
              </Text>
            </LinearGradient>
          </Neomorph>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
