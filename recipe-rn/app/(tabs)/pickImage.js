import * as ImagePicker from 'expo-image-picker'

export async function pickImage() {
  // Check if permissions are already granted (faster than requesting)
  let { status } = await ImagePicker.getCameraPermissionsAsync()
  
  // Only request if not already granted
  if (status !== 'granted') {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync()
    status = permissionResult.status
    
    if (status !== 'granted') {
      throw new Error('Camera permission not granted')
    }
  }
  
  // Launch camera immediately
  const res = await ImagePicker.launchCameraAsync({ 
    quality: 0.7, 
    base64: false,
    allowsEditing: false,
    mediaTypes: ImagePicker.MediaTypeOptions.Images
  })
  
  if (!res.canceled && res.assets && res.assets.length > 0) {
    return res.assets[0]   // { uri, width, height, ... }
  }
  
  return undefined
}
