import React from 'react';
import {
    View,
    StyleSheet,
    Pressable,
    Text,
    StatusBar,
    ImageBackground,
    Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export default function Selfie() {
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

    return (
        <View style={styles.body}>
            <Pressable style={{height:50,width:"80%",backgroundColor:"red"}} onPress={()=> OpenCamera()}>
                <Text style={{color:"white",fontSize:18}}>Capture</Text>
            </Pressable>
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
                        <View style={{width:'35%', height:'100%', alignSelf:'flex-start', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image style={{width:25 , height:25 , tintColor:'white'}} source={require('../../components/Images/arrow.png')}/>
                            <Image style={{width:50 , height:50 }} source={require('../../components/Images/logo.png')}/>
                        </View>
                    </LinearGradient>
            </View>
            <ImageBackground
                style={{ width: '100%', height: heightPercentageToDP(88) }}
                source={require('../../components/Images/selfie.jpeg')}></ImageBackground>
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
