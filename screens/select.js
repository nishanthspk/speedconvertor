import React, {useState, useEffect} from 'react';

import {  Text,TouchableOpacity, Button, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';


import { styled } from 'nativewind';


const  StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);


const speedUnitOptions = [
  { label: 'Miles per hour (mph)', value: 'mph' },
  { label: 'Kilometers per hour (km/h)', value: 'km/h' },
  { label: 'Meters per second (m/s)', value: 'm/s' },
  { label: 'Feet per second (ft/s)', value: 'ft/s' },
  { label: 'Lightspeed', value: 'lightspeed' }, // New unit
  { label: 'Mach', value: 'mach' }, // New unit
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
          const speedInKmPerHour = (speedValue * 1.60934).toFixed(5) + ' km/h';
          setResult(speedInKmPerHour);
        } else if (selectedSpeedUnitf === 'mph' && selectedSpeedUnitt === 'm/s') {
          // Convert miles per hour to meters per second
          const speedInMetersPerSecond = (speedValue * 0.44704).toFixed(5) + ' m/s';
          setResult(speedInMetersPerSecond);
        } else if (selectedSpeedUnitf === 'mph' && selectedSpeedUnitt === 'ft/s') {
          // Convert miles per hour to feet per second
          const speedInFeetPerSecond = (speedValue * 1.46667).toFixed(5) + ' ft/s';
          setResult(speedInFeetPerSecond);
        } else if (selectedSpeedUnitf === 'mph' && selectedSpeedUnitt === 'lightspeed') {
          // Convert miles per hour to lightspeed (assume lightspeed as 299,792,458 m/s)
          const speedInLightspeed = (speedValue * 0.0000000014911644).toFixed(15) + ' lightspeed';
          setResult(speedInLightspeed);
        } else if (selectedSpeedUnitf === 'mph' && selectedSpeedUnitt === 'mach') {
          // Convert miles per hour to Mach (assume Mach as the speed of sound in air at sea level, 343 m/s)
          const speedInMach = (speedValue * 0.0015151515).toFixed(5) + ' mach';
          setResult(speedInMach);
        } else if (selectedSpeedUnitf === 'km/h' && selectedSpeedUnitt === 'mph') {
        // Convert kilometers per hour to miles per hour
        const speedInMilesPerHour = (speedValue / 1.60934).toFixed(5) + ' mph';
        setResult(speedInMilesPerHour);
      } else if (selectedSpeedUnitf === 'km/h' && selectedSpeedUnitt === 'm/s') {
        // Convert kilometers per hour to meters per second
        const speedInMetersPerSecond = (speedValue / 3.6).toFixed(5) + ' m/s';
        setResult(speedInMetersPerSecond);
      } else if (selectedSpeedUnitf === 'km/h' && selectedSpeedUnitt === 'ft/s') {
        // Convert kilometers per hour to feet per second
        const speedInFeetPerSecond = (speedValue / 1.09728).toFixed(5) + ' ft/s';
        setResult(speedInFeetPerSecond);
      } else if (selectedSpeedUnitf === 'km/h' && selectedSpeedUnitt === 'lightspeed') {
        // Convert kilometers per hour to lightspeed (assume lightspeed as 299,792,458 m/s)
        const speedInLightspeed = (speedValue / 1.07925e9).toFixed(15) + ' lightspeed';
        setResult(speedInLightspeed);
      } else if (selectedSpeedUnitf === 'km/h' && selectedSpeedUnitt === 'mach') {
        // Convert kilometers per hour to Mach (assume Mach as the speed of sound in air at sea level, 343 m/s)
        const speedInMach = (speedValue / 1220).toFixed(5) + ' km/h';
        setResult(speedInMach); 
      } else if (selectedSpeedUnitf === 'm/s' && selectedSpeedUnitt === 'mph') {
        // Convert meters per second to miles per hour
        const speedInMilesPerHour = (speedValue * 2.23694).toFixed(5) + ' mph';
        setResult(speedInMilesPerHour);
      } else if (selectedSpeedUnitf === 'm/s' && selectedSpeedUnitt === 'km/h') {
        // Convert meters per second to kilometers per hour
        const speedInKmPerHour = (speedValue * 3.6).toFixed(5) + ' km/h';
        setResult(speedInKmPerHour);
      } else if (selectedSpeedUnitf === 'm/s' && selectedSpeedUnitt === 'ft/s') {
        // Convert meters per second to feet per second
        const speedInFeetPerSecond = (speedValue * 3.28084).toFixed(5) + ' ft/s';
        setResult(speedInFeetPerSecond);
      } else if (selectedSpeedUnitf === 'm/s' && selectedSpeedUnitt === 'lightspeed') {
        // Convert meters per second to lightspeed (assume lightspeed as 299,792,458 m/s)
        const speedInLightspeed = (speedValue / 299792458).toFixed(15) + ' lightspeed';
        setResult(speedInLightspeed);
      } else if (selectedSpeedUnitf === 'm/s' && selectedSpeedUnitt === 'mach') {
        // Convert meters per second to Mach (assume Mach as the speed of sound in air at sea level, 343 m/s)
        const speedInMach = (speedValue / 343).toFixed(5) + ' mach';
        setResult(speedInMach);
      } else if (selectedSpeedUnitf === 'ft/s' && selectedSpeedUnitt === 'mph') {
        // Convert feet per second to miles per hour
        const speedInMilesPerHour = (speedValue * 0.681818).toFixed(5) + ' mph';
        setResult(speedInMilesPerHour);
      } else if (selectedSpeedUnitf === 'ft/s' && selectedSpeedUnitt === 'km/h') {
        // Convert feet per second to kilometers per hour
        const speedInKmPerHour = (speedValue * 1.09728).toFixed(5) + ' km/h';
        setResult(speedInKmPerHour);
      } else if (selectedSpeedUnitf === 'ft/s' && selectedSpeedUnitt === 'm/s') {
        // Convert feet per second to meters per second
        const speedInMetersPerSecond = (speedValue * 0.3048).toFixed(5) + ' m/s';
        setResult(speedInMetersPerSecond);
      } else if (selectedSpeedUnitf === 'ft/s' && selectedSpeedUnitt === 'lightspeed') {
        // Convert feet per second to lightspeed (assume lightspeed as 299,792,458 m/s)
        const speedInLightspeed = (speedValue / 983571).toFixed(15) + ' lightspeed';
        setResult(speedInLightspeed);
      } else if (selectedSpeedUnitf === 'ft/s' && selectedSpeedUnitt === 'mach') {
        // Convert feet per second to Mach (assume Mach as the speed of sound in air at sea level, 343 m/s)
        const speedInMach = (speedValue / 1125.33).toFixed(5) + ' mach';
        setResult(speedInMach);
      } else if (selectedSpeedUnitf === 'lightspeed' && selectedSpeedUnitt === 'mph') {
          // Convert lightspeed to miles per hour (assume lightspeed as 299,792,458 m/s)
        const speedInMilesPerHour = (speedValue * 670616629.3844).toFixed(5) + ' mph';
        setResult(speedInMilesPerHour);
      } else if (selectedSpeedUnitf === 'lightspeed' && selectedSpeedUnitt === 'km/h') {
        // Convert lightspeed to kilometers per hour (assume lightspeed as 299,792,458 m/s)
        const speedInKmPerHour = (speedValue * 1079252848.8064).toFixed(5) + ' km/h';
        setResult(speedInKmPerHour);
      } else if (selectedSpeedUnitf === 'lightspeed' && selectedSpeedUnitt === 'm/s') {
        // Convert lightspeed to meters per second (assume lightspeed as 299,792,458 m/s)
        const speedInMetersPerSecond = (speedValue * 299792458).toFixed(5) + ' m/s';
        setResult(speedInMetersPerSecond);
      } else if (selectedSpeedUnitf === 'lightspeed' && selectedSpeedUnitt === 'ft/s') {
        // Convert lightspeed to feet per second (assume lightspeed as 299,792,458 m/s)
        const speedInFeetPerSecond = (speedValue * 983571056.4331).toFixed(5) + ' ft/s';
        setResult(speedInFeetPerSecond);
      } else if (selectedSpeedUnitf === 'lightspeed' && selectedSpeedUnitt === 'mach') {
        // Convert lightspeed to Mach (assume Mach as the speed of sound in air at sea level, 343 m/s)
        const speedInMach = (speedValue / 873,405,751.5637).toFixed(5) + ' mach';
        setResult(speedInMach);
      } else if (selectedSpeedUnitf === 'mach' && selectedSpeedUnitt === 'mph') {
        // Convert Mach to miles per hour (assume Mach as the speed of sound in air at sea level, 343 m/s)
        const speedInMilesPerHour = (speedValue * 767.269).toFixed(5) + ' mph';
        setResult(speedInMilesPerHour);
      } else if (selectedSpeedUnitf === 'mach' && selectedSpeedUnitt === 'km/h') {
        // Convert Mach to kilometers per hour (assume Mach as the speed of sound in air at sea level, 343 m/s)
        const speedInKmPerHour = (speedValue * 1235.59).toFixed(5) + ' km/h';
        setResult(speedInKmPerHour);
      } else if (selectedSpeedUnitf === 'mach' && selectedSpeedUnitt === 'm/s') {
        // Convert Mach to meters per second (assume Mach as the speed of sound in air at sea level, 343 m/s)
        const speedInMetersPerSecond = (speedValue * 343).toFixed(5) + ' m/s';
        setResult(speedInMetersPerSecond);
      } else if (selectedSpeedUnitf === 'mach' && selectedSpeedUnitt === 'ft/s') {
        // Convert Mach to feet per second (assume Mach as the speed of sound in air at sea level, 343 m/s)
        const speedInFeetPerSecond = (speedValue * 1125.33).toFixed(5) + ' ft/s';
        setResult(speedInFeetPerSecond);
      } else if (selectedSpeedUnitf === 'mach' && selectedSpeedUnitt === 'lightspeed') {
        // Convert Mach to lightspeed (assume lightspeed as 299,792,458 m/s)
        const speedInLightspeed = (speedValue * 0.000385).toFixed(15) + ' lightspeed';
        setResult(speedInLightspeed);    
      } else {
        // Default case when units are not matched
        setResult('Invalid conversion');
      }
    }
    

  const navigateToResultScreen = () => {
    // Navigate to 'ResultScreen' and pass the 'result' as a parameter
    navigation.navigate('final', { result });
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
                      onChangeText={(value) => setSpeedValue(value)}>
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
            </StyledView>

            
          <TouchableOpacity
            style={{ backgroundColor: 'orange', borderRadius: 10, padding: 8, alignItems: 'center',borderWidth: 1, borderColor: '#4B5563', elevation: 10, marginHorizontal: 96, marginTop: 20 }} onPress={navigateToResultScreen}>
            <StyledText style={{ color: 'white', fontSize: 18 }}>Next</StyledText>
          </TouchableOpacity>           
            
        </StyledView>
     );
}
 
export default Select;