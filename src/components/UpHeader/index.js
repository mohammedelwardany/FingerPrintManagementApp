import React from "react";
import { View , Text,Image} from "react-native";

import styles from "./styles";
const UpHeader = ({image,text}) => {
    return (
     <View style={styles.container}>
<Image source={image} style={styles.image1}/>
        <Text style={styles.mainText}>{text}</Text>
    </View> 
    );
}
 
export {UpHeader};