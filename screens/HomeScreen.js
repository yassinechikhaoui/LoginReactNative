import { signOut } from 'firebase/auth';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import { auth } from '../data/firebase';

export default function HomeScreen() {
  const handleLogout = async ()=>{
    await signOut(auth);
  }
  return (
    
      
    
    
    <View style={styles.cont}>
      <View style={{}}>
      <Image source={require("../assets/images/home2.png")} style={styles.image} />
      </View>
      <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
         Home Page Si Yassine - 
      </Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutText} >Logout</Text>
      </TouchableOpacity> 
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  cont:{
    flex: 1,
    
    alignItems: 'center',
    marginTop:180,
  },

  container: {
    marginTop:30,
    flexDirection:'row',

    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
  logoutText: {
    backgroundColor: '#FFB001',
    color: 'white',
    padding: 10, // Adjust padding as needed
    borderRadius:10,// Optional: Adds rounded corners
    margin:5
  },
  image:{
    width:150,
    height:150,
    marginTop:100,
  }
});
