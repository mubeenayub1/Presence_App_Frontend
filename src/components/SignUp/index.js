import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import {Neomorph} from 'react-native-neomorph-shadows';
import React, {useState} from 'react';
import color from '../assets/color';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
// import Loader from 'react-native-multi-loader';

const SignUp = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  // const [show, setShow] = useState(false);

  const OpenCamera = () => {
    // setShowModel(true);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
    }).then(image => {
      // console.log('--Image Through Camera---->', image);
      setPhoto(image);
    });
  };

  const selectPhotoFromGallery = () => {
    setShowModel(true);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
    }).then(image => {
      setPhoto(image);
    });
    // launchImageLibrary({ mediaType: 'photo' }, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else {
    //     setPhoto(response.assets[0].uri)
    //     console.log("--Image Through Gallery---->",response.assets[0].uri);
    //   }
    // });
  };

  // const handleBtn = () => {
  //   if (!name || !phone || !password || !photo) {
  //     return Toast.show({
  //       type: ALERT_TYPE.WARNING,
  //       title: 'Warning',
  //       textBody: 'Fill all the Fields Include (Profile Image)',
  //     });
  //   }
  //   // setShow(true)
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     'Cookie',
  //     'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFiODIxMWEwNjdjYWZjNDJjMWQyZjIiLCJpYXQiOjE2Nzk1MjQzNjksImV4cCI6MTY4MDgyMDM2OX0.TmJCQ4rQxCcivH7-LhpXVstHBK5CAmgALAWu6xiSYkA',
  //   );
  //   const imgObj = {
  //     name: photo.path.split('/')[
  //       photo.path.split('/').length - 1
  //     ],
  //     type: photo.mime,
  //     size: photo.size,
  //     uri: photo.path,
  //     lastModified: photo.modificationDate,
  //     lastModifiedDate: new Date(),
  //   };
  //   var formdata = new FormData();
  //   formdata.append('image', imgObj);
  //   formdata.append('name', name);
  //   formdata.append('email', phone);
  //   formdata.append('password', password);
  //   formdata.append("image", imgObj);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: formdata,
  //     redirect: 'follow',
  //   };

  //   fetch('http://16.170.213.237:4000/api/v1/register', requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       let data = JSON.parse(result);
  //       console.log(data)
  //       if (data.success === false) {
  //         // setShow(false)
  //         return Toast.show({
  //           type: ALERT_TYPE.WARNING,
  //           title: 'Warning',
  //           textBody: data.message,
  //         });
  //       }
  //       if (data.sucess === true) {
  //         // setShow(false);
  //         console.log("-----> false Data",data)
  //         navigation.replace('OTP', {profile: photo});
  //       }
  //     })
  //     .catch(error => console.log('error', error));
  // };

  const handleBtn = async () => {
    // setShow(true);
    if (!photo || !name || !password || !phone) {
      // setShow(false);
      return Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Fill All The Field Include (Profile Image)',
      });
    }
    const imgObj = {
      name: photo.path.split('/')[photo.path.split('/').length - 1],
      type: photo.mime,
      size: photo.size,
      uri: photo.path,
      lastModified: photo.modificationDate,
      lastModifiedDate: new Date(),
    };
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFjYmFiMmEwNjdjYWZjNDJjMWQzMTciLCJpYXQiOjE2Nzk2MDQ0MDMsImV4cCI6MTY4MDkwMDQwM30.jm2lfHXn0-Fz2j1PNOzS7WAj-XeOrjZ8ok_bSB3phaw',
    );

    var formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', phone);
    formdata.append('password', password);
    formdata.append('image', imgObj);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    fetch('http://16.170.213.237:4000/api/v1/register', requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result);
        if (data.sucess === false) {
          // setShow(false);
          return Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning',
            textBody: data.message,
          });
        }
        if (data.sucess === true) {
          // setShow(false);
          navigation.replace('OTP');
        }
      })
      .catch(error => console.log('error', error));
    const ImageObject = JSON.stringify(imgObj);

    await AsyncStorage.setItem('ImageObject', ImageObject);
  };

  return (
    <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
      <Image
        style={{
          width: widthPercentageToDP(40),
          height: heightPercentageToDP(20),
          alignSelf: 'center',
        }}
        source={require('../Images/logo.png')}
      />
      <ImageBackground
        style={{
          width: widthPercentageToDP(30),
          height: heightPercentageToDP(15),
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        source={require('../Images/cricle.png')}>
        <Image
          style={{
            width: 26,
            height: 33,
            alignSelf: 'center',
            tintColor: '#686B6F',
            top: '5%',
          }}
          source={require('../Icon/profile.png')}
        />
        <TouchableOpacity onPress={() => setShowModel(false)}>
          <ImageBackground
            style={{
              width: 25,
              height: 25,
              marginHorizontal: widthPercentageToDP(20),
              tintColor: '#686B6F',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={require('../Icon/addIcon.png')}
          />
        </TouchableOpacity>
      </ImageBackground>

      {showModel === false ? (
        <View
          style={{
            width: 129,
            height: 76,
            borderRadius: 5,
            marginHorizontal: '55%',
            bottom: '4%',
            elevation: 10,
          }}>
          <LinearGradient
            colors={['#33393F', '#34393F', '#1E1F24']}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '50%',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => OpenCamera()}>
              <Image
                style={{width: 22, height: 17, marginLeft: 10}}
                source={require('../Images/camera.png')}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: 'white',
                  paddingHorizontal: 10,
                }}>
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '50%',
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={selectPhotoFromGallery}>
              <Image
                style={{width: 22, height: 17, marginLeft: 10}}
                source={require('../Images/gallery.png')}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '600',
                  color: 'white',
                  paddingHorizontal: 10,
                }}>
                Gallery
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      ) : null}


      {/* Input  */}
      <View style={{alignSelf: 'center', alignItems: 'center'}}>
        <Shadow
          inner={false} // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          style={{
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.3,
            shadowColor: 'black',
            shadowRadius: 10,
            borderRadius: 0,
            backgroundColor: 'transparent',
            width: widthPercentageToDP(90),
            height: heightPercentageToDP(7.5),
            marginVertical: 20,
            flexDirection: 'row',
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#1E1F24', '#34393F', '#34393F']}
            style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
            <Image
              style={{width: 15, height: 19, marginHorizontal: 20}}
              source={require('../Icon/profile.png')}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={'#3B3D41'}
              style={{
                width: '80%',
                height: 50,
                color: 'white',
                fontSize: 17,
                fontWeight: '400',
              }}
              onChangeText={setName}
              value={name}
            />
          </LinearGradient>
        </Shadow>
        {/* Input  */}
        <Shadow
          inner={false} // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          style={{
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.3,
            shadowColor: 'black',
            shadowRadius: 10,
            borderRadius: 0,
            backgroundColor: 'transparent',
            width: widthPercentageToDP(90),
            height: heightPercentageToDP(7.5),
            marginVertical: 20,
            flexDirection: 'row',
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#1E1F24', '#34393F', '#34393F']}
            style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
            <Image
              style={{width: 15, height: 19, marginHorizontal: 20}}
              source={require('../Icon/phone.png')}
            />
            <TextInput
              placeholder="Phone Number"
              // keyboardType = 'numeric'
              placeholderTextColor={'#3B3D41'}
              style={{
                width: '80%',
                height: 50,
                color: 'white',
                fontSize: 17,
                fontWeight: '400',
              }}
              onChangeText={setPhone}
              value={phone}
            />
          </LinearGradient>
        </Shadow>
        {/* Input  */}
        <Shadow
          inner={false} // <- enable inner shadow
          useArt // <- set this prop to use non-native shadow on ios
          style={{
            shadowOffset: {width: 5, height: 5},
            shadowOpacity: 0.3,
            shadowColor: 'black',
            shadowRadius: 10,
            borderRadius: 0,
            backgroundColor: 'transparent',
            width: widthPercentageToDP(90),
            height: heightPercentageToDP(7.5),
            marginVertical: 20,
            flexDirection: 'row',
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#1E1F24', '#34393F', '#34393F']}
            style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
            <Image
              style={{width: 15, height: 19, marginHorizontal: 20}}
              source={require('../Icon/lock.png')}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={'#3B3D41'}
              style={{
                width: '80%',
                height: 50,
                color: 'white',
                fontSize: 17,
                fontWeight: '400',
              }}
              onChangeText={setPassword}
              value={password}
            />
          </LinearGradient>
        </Shadow>
      </View>

      {/* Button Section */}
      <TouchableOpacity
        onPress={() => handleBtn()}
        style={{alignSelf: 'center'}}>
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
            justifyContent: 'center',
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
            }}>
            <Text style={{fontSize: 20, fontWeight: '400', color: color.white}}>
              Sign In
            </Text>
          </LinearGradient>
        </Neomorph>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;
