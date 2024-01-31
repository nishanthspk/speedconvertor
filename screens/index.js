import React from 'react';
import {  Text,TouchableOpacity, Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';


const  StyledView = styled(View);
const StyledText = styled(Text);





const Main = () => {

    const navigation = useNavigation();

    const navigateToweight = () => {
        navigation.navigate('Weight calculator');
  
    }

    const navigateTospeed = () => {
        navigation.navigate('Speed calculator');
  
    }

    return (
        <StyledView className=' bg-orange-100 h-screen flex justify-center pb-36'>
            <StyledText className='text-center text-2xl pb-8'>What do you want to convert?</StyledText>
              <TouchableOpacity
            style={{ backgroundColor: '#93C5FD', borderRadius: 10, padding: 8, alignItems: 'center', elevation: 10, marginHorizontal: 72, marginTop: 20 }} onPress={navigateToweight}>
            <StyledText className=' text-2xl text-white'>Weight ⚖️</StyledText>
            </TouchableOpacity>     
            <TouchableOpacity
            style={{ backgroundColor: 'orange', borderRadius: 10, padding: 8, alignItems: 'center', elevation: 10, marginHorizontal: 72, marginTop: 20 }} onPress={navigateTospeed}>
            <StyledText className=' text-2xl text-white'>Speed ⌛</StyledText>
            </TouchableOpacity>      
        </StyledView>
     );
}
 
export default Main;