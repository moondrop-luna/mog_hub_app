import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native/types_generated/index';

function MainScreen() {

  const [petName, setPetName] = useState('');

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Image style={styles.mogHubLogo}
          source={require('../images/cat_logo.png')}/>
        </ScrollView>
      </SafeAreaView>
    </View>
    
  );
}
