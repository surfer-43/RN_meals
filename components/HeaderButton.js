import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors';

const CustomHeaderButton = (props) => {
  console.log("custom header button is being used");
  return (
    <HeaderButton 
      {...props} 
      IconComponent={Ionicons} 
      iconSize={23} 
      color={Platform.OS === "anndroid" ? 'white': Colors.primaryColor}
    />
  )
}


export default CustomHeaderButton

