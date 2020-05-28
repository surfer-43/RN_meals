import React from 'react'
import { 
    HeaderButtons, 
    Item
} from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton';

const MenuButton = (props) => {
    const { title, iconName, navigation } = props;
    return (
        <HeaderButtons
          HeaderButtonComponent={CustomHeaderButton}
        >
          <Item
            buttonStyle={{color:'white'}}
            title={title}
            iconName={iconName}
            onPress={() => {navigation.toggleDrawer()}}
          />
        </HeaderButtons>
    )
}

export default MenuButton