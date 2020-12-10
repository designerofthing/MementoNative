import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import AppHeader from '../components/AppHeader';
import Onboarding from './Onboarding';

export default function Home({ updateAuthState }) {
  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState('loggedOut');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }
  return (
    <>
      <AppHeader />
      <Onboarding />
    <View style={styles.container}>
      <Button title="Sign Out" color="purple" onPress={signOut} />
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  }
});
