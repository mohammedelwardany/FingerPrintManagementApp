import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InputComp, Separate, StatusDetails, UpHeader } from "../../components";
import styles from "./styles";
const Details = () => {
    return (
        
        <View style={styles.container}>
<UpHeader
text={"user 785"}
image={require("../../../assets/userIcon.png")}
/>
<View style={styles.contcontainer}>
    <Separate/>
    <View style={styles.mainStat}>
<StatusDetails
status={"name"}
detail={"mohammed ashraf ahmed"}
/>
<StatusDetails
status={"age"}
detail={"20"}
/>
<StatusDetails
status={"email"}
detail={"mohammed@fci.com"}
/>
</View> 
    <Separate/>
</View>
    <TouchableOpacity style={styles.button1}><Text style={styles.button1txt}>accept</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button2}><Text style={styles.button2txt}>refuse</Text></TouchableOpacity>
    <Separate/>
    <TouchableOpacity style={styles.button}><Text style={styles.buttontxt}>return</Text></TouchableOpacity>

</View>
    );
}
 
export {Details};