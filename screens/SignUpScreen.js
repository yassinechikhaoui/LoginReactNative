import React, { useState } from 'react';

import { StyleSheet, TouchableOpacity, View,Image,Text,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use any icon family you prefer
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../data/firebase';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();

  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');

  const handleSubmit = async ()=>{
    if(email && password){
      try{
        await createUserWithEmailAndPassword(auth, email, password)
      }catch(err){
        console.log('go error : ',err.message);

      }

    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerIcon}>
        <TouchableOpacity style={styles.icon} onPress={()=>navigation.goBack()} >
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerImage}>
        <Image source={require("../assets/images/signup.png")} style={styles.image}/>
      </View>
      <View style={{flex:1 ,backgroundColor:'white', marginTop:40, borderTopRightRadius: 50  , borderTopLeftRadius: 50}}>
        <View style={{margin:30 }}>

          <Text style={{marginLeft:16, color:'gray' }}>Ful Name</Text>
          <TextInput style={styles.input}
          placeholder='Enter Name'
          />

          <Text style={{marginLeft:16, color:'gray',marginTop:16 }}>Email Address</Text>
          <TextInput style={styles.input}
          placeholder='Enter Email'
          value={email}
          onChangeText={value=> setEmail(value)}
          />

          
          <Text style={{marginLeft:16, color:'gray',marginTop:16 }}>Password</Text>
          <TextInput style={styles.input}
          placeholder='Enter Password'
          secureTextEntry
          value={password}
          onChangeText={value=> setPassword(value)}
          />

          <TouchableOpacity >
            <Text style={{marginLeft:250, color:'gray'}}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
        </View>
        <Text style={{color:'gray', textAlign:'center',fontSize:20,fontWeight:'bold'}}>
          Or
        </Text>
        <View style={styles.imageIcon}>
          <TouchableOpacity style={{marginRight:80}}>
            <Image source={require("../assets/images/google.png")} style={{width:40,height:40,backgroundColor:'#F3F4F6',borderRadius:5}}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image source={require("../assets/images/apple.png")} style={{width:40,height:40,backgroundColor:'#F3F4F6',borderRadius:5}}/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft:80}}>
            <Image source={require("../assets/images/facebook.png")} style={{width:40,height:40,backgroundColor:'#F3F4F6',borderRadius:5}}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'center', marginTop:30,}}>
            <Text style={{color: 'gray'}}>Already have acount? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style={{color: '#FFB001'}}>
                 Login
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
    backgroundColor: '#4080bf',
  },
  
  icon : {
    backgroundColor: '#FFB001',
    padding:8,
    borderTopRightRadius: 10, // Adjust the value for the desired curve for the top-right corner
    borderBottomLeftRadius: 10,
  }, 
  containerIcon: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    marginTop:60 , 
    marginLeft: 16,
  },

  containerImage: {
    flexDirection:"row",
    justifyContent:'center',
  

  },
  image : {
    width:200,
    height:150,
  },

  input :{
    
    marginTop:10,
    marginLeft:16,
    padding: 10, // p4 - Padding of 16 units
    backgroundColor: '#E5E7EB', // bg-gray-100 - Background color gray
    color: '#4B5563', // text-gray-700 - Text color gray
    borderRadius: 8,



  },
  button: {
    marginTop:30,
    marginLeft:16,
    height:40,
    width: 350,
    backgroundColor: '#FFB001', // Change to the color you desire
    borderRadius: 10, // Use borderRadius for rounded corners
  },
  buttonText: {

    margin:8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',

  },

  imageIcon:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center'
  }
  
});


