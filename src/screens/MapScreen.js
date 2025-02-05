import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import MapView, { Marker } from 'react-native-maps';
import tokensAtom from '../store/tokens';
import { useAtom } from 'jotai';



const MapScreen = ({ navigation: nav }) => {

  const [tokens, setTokens] = useAtom(tokensAtom);
  const filtered = Object.values(tokens).filter(token => !token.isCollected);
  
  function onHelpPress() {
    nav.navigate("MapHelpScreen")
  }

  const initialRegion = {
      latitude: 51.495142,
      longitude: 3.609632,
      latitudeDelta: 0.009,
      longitudeDelta: 0.009,
  }

  return (
    <View style={styles.main}>
      <View style={styles.home} >

        <View style={styles.modalHelper} >
          <Ionicons 
            name="help-circle" 
            size={40} 
            color="teal" 
            onPress={onHelpPress} 
          />
        </View>

        <View style={styles.location}>
          <View style={styles.container}>
            <MapView style={styles.map} showsUserLocation={true} initialRegion={initialRegion}>
              
              {filtered.map(({ coords: [latitude, longitude] }, index) => (
                <Marker
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                  key={index}
                />
              ))}

            </MapView>
          </View>
        </View>

      </View>
    </View>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "teal",
  },
  home: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  helperContainer: {
    flex: 0.1,
    flexDirection: "row",
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  icon1: {
    flex: 0.8,
    backgroundColor: 'teal',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon2: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  location: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '90%',
    width: '90%',
    borderWidth: 2,
    borderColor: 'teal',
    borderRadius: 15,
  },
  modalHelper: {
    position: 'absolute',
    zIndex: 9,
    elevation: 9,
    borderRadius: 360,
    top: "7%",
    left: "9%"
  },
});