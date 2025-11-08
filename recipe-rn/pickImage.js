import * as ImagePicker from 'expo-image-picker'

export async function pickImage() {
  await ImagePicker.requestCameraPermissionsAsync()
  const res = await ImagePicker.launchCameraAsync({ quality: 0.7, base64: false })
  if (!res.canceled) return res.assets[0]   // { uri, width, height, ... }
}
