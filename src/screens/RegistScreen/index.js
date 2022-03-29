import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InputComp, Separate, UpHeader } from "../../components";
import styles from "./styles";
const RegistScreen = () => {
    return (
        
        <View style={styles.container}>
<UpHeader
text={"Register"}
image={require("../../../assets/userIcon.png")}
/>
<ScrollView>
<View style={styles.contcontainer}>
</View>
<InputComp
text={"ID"}
placeHolder={"please enter your id of fingerprint"}
/>
<Separate/>
<InputComp
text={"name"}
placeHolder={"please enter your name"}
/>

<InputComp
text={"password"}
placeHolder={"password"}

setPass={true}
/>
<TouchableOpacity style={styles.button1}><Text style={styles.button1txt}>Register</Text></TouchableOpacity>
</ScrollView>
</View>
    );
}
 
export {RegistScreen};