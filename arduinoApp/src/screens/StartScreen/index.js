import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InputComp, Separate, StatusDetails, UpHeader } from "../../components";
import styles from "./styles";
const StartScreen = () => {
    return (
        
        <View style={styles.container}>
            <View style={styles.container}>

            <Text>WeLcome in my app</Text>
            </View>
<TouchableOpacity style={styles.button1}><Text style={styles.button1txt}>Register</Text></TouchableOpacity>
<TouchableOpacity style={styles.button1}><Text style={styles.button1txt}>sign in</Text></TouchableOpacity>

</View>
    );
}
 
export {StartScreen};