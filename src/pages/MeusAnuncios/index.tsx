import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useNavigation } from '@react-navigation/native';

import { Container, Card, Info, Name, Price, CardLocation, Location, Image, GoCreateEvent, GoCreateEventText } from './styles';

import logo from '../../assets/logo.png';
import logo01 from '../../assets/logo01.png';

const MeusAnuncios: React.FC = () => {
    return (
        <>
            <ScrollView>
                <Container>
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
                                <Location>RN</Location>
                            </CardLocation>
                        </Card>

                    </TouchableOpacity>

                </Container>

            </ScrollView>

            <GoCreateEvent onPressIn={() => { }}>
                <GoCreateEventText>Criar Anúncio</GoCreateEventText>
            </GoCreateEvent>
        </>
    )
};

export default MeusAnuncios;