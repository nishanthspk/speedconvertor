import React from 'react';

import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';

const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const miletokm = ()=> {

<StyledView className='bg-red-100 p-16' >
        <StyledText className=' '> Speed convertor</StyledText>
        <StyledView>
          <StyledText className=' pt-6'>Mile:</StyledText>
          <StyledTextInput className='border-2 border-black rounded-md pl-5'
              keyboardType="numeric"
              placeholder='Enter mile' ></StyledTextInput>
        </StyledView>
      </StyledView>
}

export default withExpoSnack(miletokm);
  
  