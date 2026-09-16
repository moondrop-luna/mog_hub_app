import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './Styles';

function MainScreen() {

  const [petName, setPetName] = useState('');

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Image style={styles.mogHubLogo}
          source={require('../images/cat_logo.png')}/>
          <Text style={styles.mainTxt}>Mog Hub</Text>
          <Text style={styles.slogan}>P u r r f e c t  C o m p a n i o n s !</Text>

          <View style={styles.inputFlex}>
            <Text style={styles.enterTxt}>Enter your pet's name:</Text>
            <TextInput style={styles.userInputTxt}
              placeholder="Mog"
              value={petName}
              onChangeText={newText => setPetName(newText)}
            />
          </View>

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </View>
    
  );
}
