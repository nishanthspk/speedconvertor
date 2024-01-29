import React, {useState} from 'react';

import { ScrollView, StyleSheet, Text,TouchableOpacity, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';

const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);


const speedUnitOptions = [
    { label: 'Miles per hour (mph)', value: 'mph' },
    { label: 'Kilometers per hour (km/h)', value: 'km/h' },
  ];



  function calculateSpeed(speedValue, selectedSpeedUnitf) {
    switch (selectedSpeedUnitf) {
      case 'mph':
        // Convert miles per hour to kilometers per hour
        const speedInKmPerHour = speedValue * 1.60934;
        return speedInKmPerHour.toFixed(2) + ' km/h';
        
      case 'km/h':
        // Convert kilometers per hour to miles per hour
        const speedInMilesPerHour = speedValue / 1.60934;
        return speedInMilesPerHour.toFixed(2) + ' mph';
  
      default:
        return 'Invalid speed unit';
    }
  }

const Select = () => {

    const [selectedSpeedUnitf, setSelectedSpeedUnitf] = useState(null);
    const [selectedSpeedUnitt, setSelectedSpeedUnitt] = useState(null);
    const [speedValue, setSpeedValue] = useState('');

   

    
        


    return ( 
        <StyledView className=' p-2 bg-orange-100 h-screen flex justify-center pb-32'>
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
            style={{ backgroundColor: 'orange', borderRadius: 10, padding: 8, alignItems: 'center', marginHorizontal: 96, marginTop: 20 }} onPress={calculateSpeed}>
            <StyledText style={{ color: 'white', fontSize: 18 }}>Next</StyledText>
          </TouchableOpacity>            
            <Text>{speedValue}</Text>
        </StyledView>
     );
}
 
export default Select;