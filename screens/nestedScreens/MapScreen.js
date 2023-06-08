import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, StyleSheet, Image } from 'react-native';

const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params.location;
  const { title } = route.params;
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title={route.params.title}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
