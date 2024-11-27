import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { connectWallet } from '@/utils/ethereum';
import { useState } from 'react';

export default function TabOneScreen() {
  const [connected, setConnected] = useState(false); // Track connection status
  const [walletAddress, setWalletAddress] = useState<string | null>(null); // Store wallet address
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />

      {/* Display connection status */}
      {connected ? (
        <Text>Connected: {walletAddress}</Text> // Display connected wallet address
      ) : (
        <Button title="Connect Wallet" onPress={connectWallet} /> // Button to connect wallet
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
