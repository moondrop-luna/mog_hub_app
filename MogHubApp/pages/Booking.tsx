import styles from "./Styles";
import { SafeAreaView, Text, View, Image, TextInput, ScrollView, SafeAreaViewBase } from "react-native";



function Booking() {

return (

<View>
    <SafeAreaView>
        <ScrollView>
            <Image style={styles.mogHubLogo}
            source={require('../images/cat_logo.png')}/>

            <Text style={styles.mainTxt}>Bookings</Text>

            <View style={styles.bookingContainer}>
                <Image style={styles.bookingImg}
                source={require('../images/one.jpg')}/>
                <Text style={styles.bookingTxt}>
                    </Text>
                    <Text style={styles.bookingSubTxt}>
                        </Text>
                <Image style={styles.bookingImg}
                source={require('../images/two.webp')}/>
                <Text style={styles.bookingTxt}>
                    </Text>
                    <Text style={styles.bookingSubTxt}>
                        </Text>
                <Image style={styles.bookingImg}
                source={require('../images/three.jpg')}/>
                <Text style={styles.bookingTxt}>
                    </Text>
                    <Text style={styles.bookingSubTxt}>
                        </Text>
            </View>




        </ScrollView>
    </SafeAreaView>
</View>

)}