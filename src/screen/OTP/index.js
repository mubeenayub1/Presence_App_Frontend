import {
  StatusBar,
  Image,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import color from '../../components/assets/color';
import ImagePicker from 'react-native-image-crop-picker';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const OTP = () => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(50);
  useEffect(() => {
    const timer =
      seconds > 10 && setInterval(() => setSeconds(seconds - 1), 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const [code, setCode] = useState('');
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  const handleOTPChange = (index, value) => {
    setCode(prevCode => {
      const newCode = prevCode.split('');
      newCode[index] = value;
      return newCode.join('');
    });

    // Move to the next input field
    if (value && index < 5) {
      switch (index) {
        case 0:
          inputRef2.current.focus();
          break;
        case 1:
          inputRef3.current.focus();
          break;
        case 2:
          inputRef4.current.focus();
          break;
        case 3:
          inputRef5.current.focus();
          break;
        default:
          break;
      }
    }

    // Move to the previous input field
    if (!value && index > 0) {
      switch (index) {
        case 1:
          inputRef1.current.focus();
          break;
        case 2:
          inputRef2.current.focus();
          break;
        case 3:
          inputRef3.current.focus();
          break;
        case 4:
          inputRef4.current.focus();
          break;
        case 5:
          inputRef5.current.focus();
          break;
        default:
          break;
      }
    }
  };

  const handleBtn = () => {
    console.log('hey');
  };
  

  return (
    <LinearGradient
      colors={['#34393F', '#34393F', '#1E1F24']}
      style={{ flex: 1, }}>
      <StatusBar backgroundColor="#34393F" barStyle="light-content" />

      <Text
        style={{
          fontSize: 26,
          fontWeight: '500',
          color: color.white,
          alignSelf: 'center',
          marginVertical: heightPercentageToDP(15),
        }}>
        Verify Account
      </Text>
      <Text
        style={{
          fontSize: 19,
          fontWeight: '400',
          color: color.white,
          alignSelf: 'center',
          marginVertical: 100,
          textAlign: 'center',
          lineHeight: 25,
          bottom: heightPercentageToDP(25),
        }}>
        An OTP Code has been sent{'\n'}
        to your Mobile Number{'\n'}
        "00 475 24562"
      </Text>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Neomorph
            darkShadowColor="black" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.1, // <- and this or yours opacity
              shadowRadius: 3,
              borderRadius: 5,
              backgroundColor: '#292C30',
              width: 50,
              height: 76,
            }}>
            <LinearGradient
              colors={['#26272B', '#26272B', '#33383E']}
              style={{ width: '100%', height: '100%', borderRadius: 5 }}>
              <TextInput
                ref={inputRef1}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={value => handleOTPChange(0, value)}
              />
            </LinearGradient>
          </Neomorph>
          <Neomorph
            darkShadowColor="black" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.1, // <- and this or yours opacity
              shadowRadius: 3,
              borderRadius: 5,
              backgroundColor: '#292C30',
              width: 50,
              height: 76,
            }}>
            <LinearGradient
              colors={['#26272B', '#26272B', '#33383E']}
              style={{ width: '100%', height: '100%', borderRadius: 5 }}>
              <TextInput
                ref={inputRef2}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={value => handleOTPChange(1, value)}
              />
            </LinearGradient>
          </Neomorph>

          <Neomorph
            darkShadowColor="black" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.1, // <- and this or yours opacity
              shadowRadius: 3,
              borderRadius: 5,
              backgroundColor: '#292C30',
              width: 50,
              height: 76,
            }}>
            <LinearGradient
              colors={['#26272B', '#26272B', '#33383E']}
              style={{ width: '100%', height: '100%', borderRadius: 5 }}>
              <TextInput
                ref={inputRef3}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={value => handleOTPChange(2, value)}
              />
            </LinearGradient>
          </Neomorph>
          <Neomorph
            darkShadowColor="black" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.1, // <- and this or yours opacity
              shadowRadius: 3,
              borderRadius: 5,
              backgroundColor: '#292C30',
              width: 50,
              height: 76,
            }}>
            <LinearGradient
              colors={['#26272B', '#26272B', '#33383E']}
              style={{ width: '100%', height: '100%', borderRadius: 5 }}>
              <TextInput
                ref={inputRef4}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={value => handleOTPChange(3, value)}
              />
            </LinearGradient>
          </Neomorph>
          <Neomorph
            darkShadowColor="black" // <- set this
            lightShadowColor="white" // <- this
            style={{
              shadowOpacity: 0.1, // <- and this or yours opacity
              shadowRadius: 3,
              borderRadius: 5,
              backgroundColor: '#292C30',
              width: 50,
              height: 76,
            }}>
            <LinearGradient
              colors={['#26272B', '#26272B', '#33383E']}
              style={{ width: '100%', height: '100%', borderRadius: 5 }}>
              <TextInput
                ref={inputRef5}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={value => handleOTPChange(4, value)}
              />
            </LinearGradient>
          </Neomorph>
        </View>
        {/* <Text style={styles.code}>{code}</Text> */}
      </View>

      {/* Button Section */}
      <TouchableOpacity onPress={() => navigation.navigate('selfie')}>
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
            marginLeft: widthPercentageToDP(5),
            bottom: heightPercentageToDP(20),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.5, 0.6]}
            colors={['#565962', '#9F9F9F', '#9F9F9F']}
            style={{
              width: widthPercentageToDP(88.5),
              height: heightPercentageToDP(7.5),
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: heightPercentageToDP(0.1),
              alignSelf: 'center'
            }}>
            <Text style={{ fontSize: 20, fontWeight: '400', color: color.white }}>
              Verify
            </Text>
          </LinearGradient>
        </Neomorph>
      </TouchableOpacity>

      {/* Timer  */}
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 19,
          fontWeight: '500',
          color: '#5E5F62',
          textAlign: 'center',
          bottom: heightPercentageToDP(10),
        }}>
        Resend OTP {'\n'}in 00:{seconds} sec
      </Text>
    </LinearGradient>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    bottom: heightPercentageToDP(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: widthPercentageToDP(5),
  },
  input: {
    // backgroundColor: '#292C30',
    borderRadius: 5,
    width: 40,
    height: 76,
    left: 3,
    textAlign: 'justify',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10, // Updated margin value
  },
  code: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
