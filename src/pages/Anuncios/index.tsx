import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Card, Info, Name, Price, CardLocation, Location, Image } from './styles';

import logo from '../../assets/logo.png';
import logo01 from '../../assets/logo01.png';
import logo02 from '../../assets/logo02.png';

const RoutesDrawer = createDrawerNavigator();

const Anuncios: React.FC = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('AboutItens')}>

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
                </TouchableOpacity>

                <TouchableOpacity>

                    <Card>
                        <Image source={logo02} />
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

                <TouchableOpacity>

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