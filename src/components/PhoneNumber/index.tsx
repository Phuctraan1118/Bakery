import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2';

export default function PhoneNumber() {
    
  const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold });

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  if (!fontsLoaded) {
    return null; // or some loading spinner
  }

  console.log("Value",inputValue,selectedCountry?.name.en )
  return (
    <View style={{ width: '100%', flex: 1, paddingBottom:24 }}>
      <PhoneInput
        value={inputValue}
        onChangePhoneNumber={handleInputValue}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
         defaultCountry="VN"
      />
      <View style={{ marginTop: 10 }}>
        <Text>
          Country: {selectedCountry ? `${selectedCountry.name.en} (${selectedCountry.cca2})` : ''}
        </Text>
        <Text>
          Phone Number: {selectedCountry ? `${selectedCountry.callingCode} ${inputValue}` : ''}
        </Text>
      </View>
    </View>
  );
}
