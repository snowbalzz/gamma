import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MapHelper( route) {

return (
      <View style={styles.main}>
          <View style={styles.container}>
            <View style={styles.qrSection}>
                <View style = {styles.helperTitle}>
                    <View style={{flex: 1}}>
                      <Ionicons name="chevron-back" size={40} color="teal"  onPress={() => {route.navigation.goBack()}}/>
                    </View>
                    <View style={{flex: 1.6}}>
                      <Text style={{fontSize: 30, fontWeight: "bold", color: "teal", marginTop: 3}}>
                        MAP
                      </Text>
                    </View>
                </View>
                <View style={styles.qrContainer}>
                    <Image source = {require('C:/code/gamma/assets/img/helper-map.png')} style={{flex:1, borderRadius:5, resizeMode: "contain"}}/>
                </View>
            </View> 
          </View>
      </View>
);
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:"teal",
    },
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        borderRadius: 15,
    },
    helperContainer:{
      flex: 0.1,
      flexDirection: "row",
      marginLeft:20,
      marginRight:20,
    },
    exit:{
      zIndex:50,
      flex:1,
      justifyContent: 'center',
      alignItems: 'flex-end'
    }, 
    qrSection:{   
      flex: 0.5,
    },
    qrContainer: {
      top: 95,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:3,
      borderColor:'teal',
      borderRadius:15,
      marginLeft:20,
      marginRight:20,
      height: 550
    },
    helperTitle: {
      flex: 1,
      flexDirection: 'row',
      start: 10,
      top: 17
    },
});
