import React, {useState, useEffect} from 'react';

import {   Text,TouchableOpacity, Image, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
// import avatar from "../assets/avatar.png";


import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';

const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);


const speedUnitOptions = [
    { label: 'Miles per hour (mph)', value: 'mph' },
    { label: 'Kilometers per hour (km/h)', value: 'km/h' },
    { label: 'Meters per second (m/s)', value: 'm/s' },
  ];
  



 

const Select = () => {

    const [selectedSpeedUnitf, setSelectedSpeedUnitf] = useState(null);
    const [selectedSpeedUnitt, setSelectedSpeedUnitt] = useState(null);
    const [speedValue, setSpeedValue] = useState('');
    const [result, setResult] = useState('');
  
    const navigation = useNavigation();

    useEffect(() => {
      calculateSpeed();
  }, [speedValue, selectedSpeedUnitf, selectedSpeedUnitt]);

  function calculateSpeed() {
    if (selectedSpeedUnitf === selectedSpeedUnitt) {
      // Display the same value if both speed units are the same
      setResult(speedValue + ' ' + selectedSpeedUnitf);
    } else if (selectedSpeedUnitf === 'mph' && selectedSpeedUnitt === 'km/h') {
      // Convert miles per hour to kilometers per hour
      const speedInKmPerHour = (speedValue * 0.00044704).toFixed(5) + ' km/h';
      setResult(speedInKmPerHour);
    } else if (selectedSpeedUnitf === 'km/h' && selectedSpeedUnitt === 'mph') {
      // Convert kilometers per hour to miles per hour
      const speedInMilesPerHour = (speedValue / 1.60934).toFixed(2) + ' mph';
      setResult(speedInMilesPerHour);
    } else if (selectedSpeedUnitf === 'mph' && selectedSpeedUnitt === 'm/s') {
      // Convert miles per hour to meters per second
      const speedInMetersPerSecond = (speedValue * 0.44704).toFixed(2) + ' m/s';
      setResult(speedInMetersPerSecond);
    } else if (selectedSpeedUnitf === 'm/s' && selectedSpeedUnitt === 'mph') {
      // Convert meters per second to miles per hour
      const speedInMilesPerHour = (speedValue / 0.44704).toFixed(2) + ' mph';
      setResult(speedInMilesPerHour);
    } else if (selectedSpeedUnitf === 'km/h' && selectedSpeedUnitt === 'm/s') {
        // Convert kilometers per hour to meters per second
        const speedInMetersPerSecond = (speedValue * 1000).toFixed(3) + ' m/s';
        setResult(speedInMetersPerSecond);
    } else if (selectedSpeedUnitf === 'm/s' && selectedSpeedUnitt === 'km/h') {
      // Convert meters per second to kilometers per hour
      const speedInKmPerHour = (speedValue / 0.27778).toFixed(2) + ' km/h';
      setResult(speedInKmPerHour);
    } else {
      // Default case when units are not matched
      setResult('Invalid conversion');
    }
  }
  
  
  
  
                
                
           
               
             
     

    const navigateToResultScreen = () => {
      // Navigate to 'ResultScreen' and pass the 'result' as a parameter
      navigation.navigate('Final', { result  });
    };
   

   

    return ( 
        <StyledView className='p-2 bg-orange-100 h-screen flex justify-center pb-32'>
            <StyledText className='text-center text-2xl pb-16'>Choose your option</StyledText>
            <StyledText className=' '>Convert from: </StyledText>
            <StyledView className=" flex flex-row  p-2" >
                <StyledView className='flex-1'>
                    <RNPickerSelect className=" "
                        placeholder={{ label: 'Select speed unit', value: null }}
                        items={speedUnitOptions}
                        onValueChange={(value) => setSelectedSpeedUnitf(value)}
                        
                    />
                </StyledView>
                <StyledView className=''>
                    <StyledTextInput className='flex-3 border-2  border-black rounded-md p-2 '
                    keyboardType="numeric"
                    placeholder='Enter value' 
                    onChangeText={(value) => setSpeedValue(value)}
                  
                    
                    >
                
                    
                    </StyledTextInput>
                </StyledView>
            </StyledView>


            <StyledText>Convert to: </StyledText>
            <StyledView className="p-2" >
                <StyledView className=''>
                    <RNPickerSelect
                        placeholder={{ label: 'Select speed unit', value: null }}
                        items={speedUnitOptions}
                        onValueChange={(value) => setSelectedSpeedUnitt(value)}
                        value={selectedSpeedUnitt}
                    />
                </StyledView>
                {/* <StyledView className='p-2'>
                    <StyledTextInput className='flex-3 border-2  border-black rounded-md p-2 '
                    keyboardType="numeric"
                    placeholder='Enter value'>
                    value={secondval}
                    </StyledTextInput>
                </StyledView> */}
            </StyledView>

            
        <TouchableOpacity
            style={{ backgroundColor: 'orange', borderRadius: 10, padding: 8, alignItems: 'center',borderWidth: 1, borderColor: '#4B5563', elevation: 10, marginHorizontal: 96, marginTop: 20 }} onPress={navigateToResultScreen}>
            <StyledText style={{ color: 'white', fontSize: 18 }}>Next</StyledText>
        </TouchableOpacity>   

        {/* <Image source={avatar}></Image>          */}
            
        </StyledView>
     );
}
 
export default Select;