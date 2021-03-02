import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput,TouchableOpacity,Button,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


    const Menu = ({navigation}) =>(
        <ImageBackground source={require('../assets/images/nabnab.jpg')} style={styles.Backgroundcontainer}>
        <View style={styles.logocontainer}>
          <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
          <Text style={styles.logoText}>Menu</Text>
        </View>

        <View>

        <TouchableOpacity style ={styles.btnlogin}>
        <Button color='#fff' fontWeight='bold' title="Baby Profile" onPress={() => navigation.navigate('BabyProfile')}/>
         </TouchableOpacity>
          <Text>   </Text>
         <TouchableOpacity style ={styles.btnlogin}>
        <Button color='#fff' fontWeight='bold' title="Graphs" onPress={() => navigation.navigate('BabyProfile')}/>
         </TouchableOpacity>
         <Text>   </Text>
         <TouchableOpacity style ={styles.btnlogin}>
        <Button color='#fff' fontWeight='bold' title="Maps" onPress={() => navigation.navigate('BabyProfile')}/>
         </TouchableOpacity>
         <Text>   </Text>
         <TouchableOpacity style ={styles.btnlogin}>
        <Button color='#fff' fontWeight='bold' title="About us" onPress={() => navigation.navigate('AboutUs')}/>
         </TouchableOpacity>
         <Text>   </Text>
         <TouchableOpacity style ={styles.btnlogin}>
        <Button color='#fff' fontWeight='bold' title="Sign out" onPress={() => navigation.navigate('Login')}/>
         </TouchableOpacity>
         

          
        </View>
        </ImageBackground>
    );




    const styles = StyleSheet.create({
        Backgroundcontainer: {
          flex: 1,
          width: '100%',
          height: '100%',
           alignItems: 'center',
          justifyContent: 'center',
          resizeMode: 'cover',
          
        },
        logo: {
            width: 90,
            height: 90,
            
          },
          logocontainer: {
            alignItems: 'center',
            marginBottom: 70,
          },
          logoText: {
            color: '#045610',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 10,
            opacity: 0.8
          },
          btnlogin:{
            width: 200,
            height: 50,
            borderRadius: 50,
            backgroundColor:'#045610',
           bottom:55
          }
    });


    export default Menu;