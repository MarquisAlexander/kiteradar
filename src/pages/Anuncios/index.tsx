import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Card, Info, Name, Price, CardLocation, Location, Image } from './styles';

import logo from '../../assets/logo.png';
import logo01 from '../../assets/logo01.png';

const RoutesDrawer = createDrawerNavigator();

const Anuncios: React.FC = () => {
    return (
        <>
            <ScrollView>
                <TouchableOpacity onPress={() => { }}>

                    <Card>
                        <Image source={logo} />
                        <Info>
                            <Name>
                                Kit KiteSurf
                            </Name>
                            <Price>
                                R$: 4.000
                            </Price>
                        </Info>
                        <CardLocation>
                            <Location>Maxaranguape/Rio Grande do Norte</Location>
                        </CardLocation>
                    </Card>

                    <Card>
                        <Image source={logo01} />
                        <Info>
                            <Name>
                                Kit KiteSurf
                            </Name>
                            <Price>
                                R$: 4.000
                            </Price>
                        </Info>
                        <CardLocation>
                            <Location>Maxaranguape/Rio Grande do Norte</Location>
                        </CardLocation>
                    </Card>

                    <Card>
                        <Image source={logo01} />
                        <Info>
                            <Name>
                                Kit KiteSurf
                            </Name>
                            <Price>
                                R$: 4.000
                            </Price>
                        </Info>
                        <CardLocation>
                            <Location>Maxaranguape/Rio Grande do Norte</Location>
                        </CardLocation>
                    </Card>

                </TouchableOpacity>

            </ScrollView>
        </>
    )
};

export default Anuncios;