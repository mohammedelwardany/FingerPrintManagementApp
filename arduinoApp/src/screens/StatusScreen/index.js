import React from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { InputComp, Separate, StatusDetails, UpHeader } from "../../components";
import styles from "./styles";
const StatusScreen = () => {
    return (
        
        <View style={styles.container}>
<UpHeader
text={"welcome user 579"}
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

</View>
    );
}
 
export {StatusScreen};