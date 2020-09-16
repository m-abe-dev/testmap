import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

export default function App() {
  const [markers, setMarkers] = useState([]);

  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      initialRegion={{
        latitude: 35.681236,
        longitude: 139.767125,
        latitudeDelta: 0.025,
        longitudeDelta: 0.0221,
      }}
      onPress={(event) => {
        // setMarkers((current) => [
        //   ...current,
        //   {
        //     lat: event.nativeEvent.coordinate.latitude(),
        //     lng: event.nativeEvent.coordinate.longitude(),
        //     time: new Date(),
        //   },
        // ]);
        console.log(event);
      }}></MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
