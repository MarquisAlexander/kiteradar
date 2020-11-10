import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Logon from '../pages/Logon';
import Favoritos from '../pages/Favoritos';
import Destaques from '../pages/Destaques';
import Profile from '../pages/Profile';
import Radares from '../pages/Radares';
import Anuncios from '../pages/Anuncios';
import MeusAnuncios from '../pages/MeusAnuncios';
import Sair from '../pages/Sair';
import Termos from '../pages/Termos';

import ListUsers from '../pages/ListUsers';

const Routes = createStackNavigator();
const Drawer = createDrawerNavigator(

);

const DrawerRoutes: React.FC = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Perfil" component={Profile} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="user" size={20} />)
        }}
        />
        <Drawer.Screen name="Destaques" component={Destaques} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="bell" size={20} />)
        }}
        />
        <Drawer.Screen name="Favoritos" component={Favoritos} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="star" size={20} />)
        }}
        />
        <Drawer.Screen name="Radares" component={Radares} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="map" size={20} />)
        }}
        />
        <Drawer.Screen name="Anuncios" component={Anuncios} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="dollar-sign" size={20} />)
        }}
        />
        <Drawer.Screen name="Meus Anúncios" component={MeusAnuncios} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="users" size={20} />)
        }}
        />
        <Drawer.Screen name="Sair" component={Sair} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="power" size={20} />)
        }}
        />
        <Drawer.Screen name="Termos" component={Termos} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="award" size={20} />)
        }}
        />
        <Drawer.Screen name="ListUsers" component={ListUsers} options={{
            headerStyle: {
                backgroundColor: '#226CE0'
            },
            headerTintColor: "#fff",
            drawerIcon: (() => <FeatherIcon name="award" size={20} />)
        }}
        />
    </Drawer.Navigator>
);

const AppRoutes: React.FC = () => (
    <Routes.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#f9f9f5' },
        }}>
        <Routes.Screen name="Logon" component={Logon} />
        <Routes.Screen name="DrawerRoutes" component={DrawerRoutes} />
    </Routes.Navigator>
);


export default AppRoutes;