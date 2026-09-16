import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper'

import styles from './Styles';

function MainScreen() {

  const [petName, setPetName] = useState('');
  const [pet, setPet] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState('0');

    const renderPets = () => {
    const arrDisplay: [];

    for (let i = 0; i < pet.length; i++) {
      arrDisplay.push(
        <View key={i} style={styles.inputContainer}>
        <Text style={styles.petTxt}>
          {pet[i]}
        </Text>
        </View>
  
      );
    }

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

          <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
              Select your pet:
            </Text>

            <View style={styles.radioContainer}>
              <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                  <RadioButton.Android
                    value="1"
                    status={ selectedValue === '1' ? 'checked' : 'unchecked' }
                    onPress={() => setSelectedValue('1')}
                      color="orange"
                    />
                  <Text style={styles.radioLabel}>Cat</Text>
                </View>

                <View style={styles.radioButton}>
                  <RadioButton.Android
                    value="2"
                    status={ selectedValue === '2' ? 'checked' : 'unchecked' }
                    onPress={() => setSelectedValue('2')}
                      color="orange"
                    />
                  <Text style={styles.radioLabel}>Dog</Text>
                </View>
                <View style={styles.radioButton}>

                  <RadioButton.Android
                    value="3"
                    status={ selectedValue === '3' ? 'checked' : 'unchecked' }
                    onPress={() => setSelectedValue('3')}
                      color="orange"
                    />
                  <Text style={styles.radioLabel}>Other</Text>

                </View>
              </View>
            </View>
          </View>



          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </View>
    
  );
}

export default MainScreen;
