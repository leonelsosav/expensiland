import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import ProfileHeader from '@/components/ProfileScreen/ProfileHeader';
import ProfileOption from '@/components/ProfileScreen/ProfileOption';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <ProfileHeader />
      <View style={styles.optionsContainer}>
        <ProfileOption
          icon="person-outline"
          label="Edit profile information"
          onPress={() => console.log('Edit profile pressed')}
        />
        <ProfileOption
          icon="notifications-outline"
          label="Notifications"
          value="ON"
          onPress={() => console.log('Notifications pressed')}
        />
        <ProfileOption
          icon="language-outline"
          label="Language"
          value="English"
          onPress={() => console.log('Language pressed')}
        />
        <ProfileOption
          icon="lock-closed-outline"
          label="Security"
          onPress={() => console.log('Security pressed')}
        />
        <ProfileOption
          icon="color-palette-outline"
          label="Theme"
          value="Light mode"
          onPress={() => console.log('Theme pressed')}
        />
        <ProfileOption
          icon="help-outline"
          label="Help & Support"
          onPress={() => console.log('Help & Support pressed')}
        />
        <ProfileOption
          icon="call-outline"
          label="Contact us"
          onPress={() => console.log('Contact us pressed')}
        />
        <ProfileOption
          icon="document-text-outline"
          label="Privacy policy"
          onPress={() => console.log('Privacy policy pressed')}
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});