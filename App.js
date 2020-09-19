import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {useState, useCallback, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function App() {
  const [markers, setMarkers] = useState([]);

  const onMapPress = useCallback((e) => {
    setMarkers([
      ...markers,
      {
        lat: e.nativeEvent.coordinate.latitude,
        lng: e.nativeEvent.coordinate.longitude,
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

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
      onMapReady={onMapLoad}
      onPress={onMapPress}>
      {markers.map((marker) => (
        <Marker
          key={marker.time.toISOString()}
          coordinate={{latitude: marker.lat, longitude: marker.lng}}>
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>dangerous area</Text>
              </View>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
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
