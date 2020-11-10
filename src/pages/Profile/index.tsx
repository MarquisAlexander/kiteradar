import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, Text } from 'react-native';

const RoutesDrawer = createDrawerNavigator();

const Profile: React.FC = () => {
    return (
        <View>
            <Text>ola mundo prfile</Text>
        </View>
    )
};

export default Profile;