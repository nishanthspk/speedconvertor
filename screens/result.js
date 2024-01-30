import React, {useState, useEffect} from 'react';

import {  Text,TouchableOpacity, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


import { styled } from 'nativewind';



const Final = ({ route }) => {

    const {result} = route.params;

    const StyledView = styled(View);
    const StyledText = styled(Text);
    

    return ( 
        <StyledView className=' p-2 bg-orange-100 h-screen flex justify-center items-center pb-32 shadow-lg'  >
            <StyledView className=' bg-orange-300 border-2  rounded-lg p-8 items-center' style={{elevation: 10}}>
            <StyledText className=' font-medium text-3xl'>The result is :</StyledText>
            <StyledText className=' font- font-semibold text-2xl pt-6'>{result}</StyledText>
            </StyledView>
           
        </StyledView>
     );
}
 
export default Final;