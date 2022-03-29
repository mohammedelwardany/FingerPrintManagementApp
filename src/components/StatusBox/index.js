import {placeholder} from '@babel/types';
import React from 'react';
import {View, Text ,TextInput} from 'react-native';
import styles from "./style"

const StatusBox = ({text,backcolor}) => {
  return (
    <View style={{

      marginVertical: 5,
      backgroundColor:"#a2ff00",
      borderRadius:3

    }}>
      <Text style={{
fontWeight: "bold",
textAlign: "center",
marginHorizontal:20
,fontSize:15
      }}>{text}</Text>
    </View>
  );
};

export {StatusBox};
