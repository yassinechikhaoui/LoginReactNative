import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet,Text, View,Image, Touchable, TouchableOpacity, YellowBox } from 'react-native';
  
export default function WelcomScreen() {

  const navigation = useNavigation();
  return (
    <View  style={styles.container}>

      <Text style={styles.text}>
        Let's Get Started!
        </Text>

        <View style={styles.containerImage}>
          <Image source={require("../assets/images/welc.png")} style={styles.image}/>
        </View>

        <View style={{marginVertical: 80}}>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row',justifyContent: 'center', margin:10,}}>
            <Text style={{color: 'white'}}>Already have an account? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style={{color: '#FFB001'}}>
                 Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4080bf', // Set the background color to blue
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'center',

    margin: 100,
    
  },
  containerImage: {
    flexDirection: 'row',

  },
  image: {
    width: 400,
    height: 300
    
  },

  button: {
    height:40,
    width: 300,
    backgroundColor: '#FFB001', // Change to the color you desire
    borderRadius: 10, // Use borderRadius for rounded corners
  },
  buttonText: {
    margin:8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',

  },
});



