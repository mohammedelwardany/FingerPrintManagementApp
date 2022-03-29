import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InputComp, Separate, UpHeader } from "../../components";
import styles from "./styles";
const AdminLogin = () => {
    return (
        
        <View style={styles.container}>
<UpHeader
text={"Admin Login"}
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
<TouchableOpacity style={styles.button1}><Text style={styles.button1txt}>sign in as admin</Text></TouchableOpacity>
</ScrollView>
</View>
    );
}
 
export {AdminLogin};