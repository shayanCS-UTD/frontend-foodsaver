import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { pickImage } from './pickImage';

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  const openCamera = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await pickImage();
      if (result) {
        // TODO: Process the image (e.g., send to AI for recipe generation)
        console.log('Image captured:', result.uri);
        // After processing, reopen camera for next photo
        setTimeout(() => openCamera(), 500);
      } else {
        // User canceled, reopen camera
        setTimeout(() => openCamera(), 500);
      }
    } catch (error) {
      console.error('Camera error:', error);
      setIsLoading(false);
    }
  }, []);

  // Open camera when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      openCamera();
    }, [openCamera])
  );

  return (
    <View style={styles.container}>
      {isLoading && (
        <>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Opening camera...</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});
