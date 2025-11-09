# Troubleshooting: `npx expo start --tunnel` Not Working

## Common Causes and Solutions

### 1. **Expo CLI Not Installed or Outdated**
**Solution:**
```bash
npm install -g @expo/cli@latest
# Or use npx (recommended)
npx expo@latest start --tunnel
```

### 2. **Not Logged into Expo Account**
**Solution:**
```bash
npx expo login
# Enter your Expo account credentials
```

### 3. **Network/Firewall Blocking Tunnel**
**Symptoms:** Connection timeout, "Failed to connect" errors

**Solutions:**
- Check if corporate firewall is blocking tunnel connections
- Try on a different network (mobile hotspot, home network)
- Check if antivirus is blocking the connection
- Temporarily disable VPN if active

### 4. **Port Already in Use**
**Solution:**
```bash
# Kill process on port 8081 (default Expo port)
# Windows:
netstat -ano | findstr :8081
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:8081 | xargs kill -9

# Or use a different port:
npx expo start --tunnel --port 8082
```

### 5. **ngrok Not Installed (Legacy Tunnel)**
**Note:** Modern Expo uses cloudflare tunnel, but if using older versions:
```bash
npm install -g ngrok
# Or use cloudflare tunnel (default in newer Expo)
```

### 6. **Expo SDK Version Mismatch**
**Check version:**
```bash
npx expo --version
```

**Solution:** Ensure Expo CLI matches your project's Expo SDK version (54.0.23 in this project)

### 7. **Corporate Network Restrictions**
**Symptoms:** Works on home network but not on work network

**Solutions:**
- Use mobile hotspot
- Contact IT to whitelist Expo tunnel domains
- Use `--lan` mode if on same network:
  ```bash
  npx expo start --lan
  ```

### 8. **Cache Issues**
**Solution:**
```bash
# Clear Expo cache
npx expo start --clear

# Or clear Metro bundler cache
npx expo start --tunnel --clear
```

### 9. **Node.js Version Issues**
**Check version:**
```bash
node --version
```

**Solution:** Expo requires Node.js 18+ or 20+. Update if needed:
- Download from nodejs.org
- Or use nvm: `nvm install 20`

### 10. **Missing Dependencies**
**Solution:**
```bash
cd frontend/recipe-rn
npm install
```

### 11. **Antivirus/Security Software**
**Solution:**
- Temporarily disable antivirus/firewall
- Add Expo to antivirus whitelist
- Check Windows Defender settings

### 12. **Try Alternative Methods**

**Option A: Use LAN mode (if on same network)**
```bash
npx expo start --lan
```

**Option B: Use localhost with port forwarding**
```bash
npx expo start
# Then manually configure port forwarding
```

**Option C: Use Expo Go with QR code (no tunnel needed)**
```bash
npx expo start
# Scan QR code if on same WiFi network
```

## Quick Diagnostic Steps

1. **Check Expo CLI version:**
   ```bash
   npx expo --version
   ```

2. **Check if logged in:**
   ```bash
   npx expo whoami
   ```

3. **Try without tunnel first:**
   ```bash
   npx expo start
   ```

4. **Check network connectivity:**
   ```bash
   ping expo.io
   ```

5. **Check for error messages:**
   - Look for specific error in terminal output
   - Check Expo logs: `~/.expo/logs/`

## Alternative: Use Expo Development Build

If tunnel continues to fail, consider using a development build:
```bash
npx expo install expo-dev-client
npx expo prebuild
npx expo run:android  # or run:ios
```

## Getting Help

- Check Expo docs: https://docs.expo.dev/
- Expo Discord: https://chat.expo.dev/
- GitHub Issues: https://github.com/expo/expo/issues

## Environment-Specific Notes

**Windows:**
- Check Windows Firewall settings
- Run PowerShell/CMD as Administrator if needed
- Check if Windows Defender is blocking

**Mac:**
- Check System Preferences > Security & Privacy
- May need to allow network connections

**Linux:**
- Check iptables/firewall rules
- May need sudo for certain operations

