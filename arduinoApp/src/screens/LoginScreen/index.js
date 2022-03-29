import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InputComp, Separate, UpHeader } from "../../components";
import styles from "./styles";
const LoginScreen = () => {
    return (
        
        <View style={styles.container}>
<UpHeader
text={"sign in"}
image={require("../../../assets/userIcon.png")}
/>
<ScrollView>
<View style={styles.contcontainer}>
</View>

<InputComp
text={"username"}
placeHolder={"please enter your username"}
/>

<InputComp
text={"password"}
placeHolder={"password"}

setPass={true}
/>
<TouchableOpacity style={styles.button1}><Text style={styles.button1txt}>sign in</Text></TouchableOpacity>
</ScrollView>
</View>
    );
}
 
export {LoginScreen};