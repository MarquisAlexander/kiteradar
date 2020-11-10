import React, { useCallback } from 'react';

import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Card, Info, NameLocal, Location, CardLocation, Speed, SpeedMax } from './styles';

const Radares: React.FC = () => {

    function HandlePoint() {
        Alert.alert("dentro da função");
    }

    return (
        <>
            <ScrollView>
                <TouchableOpacity onPress={() => HandlePoint()}>
                    <Card>
                        <Info>
                            <Speed>
                                27 Nós
                    </Speed>
                            <SpeedMax>
                                21 Nós
                    </SpeedMax>
                        </Info>
                        <CardLocation>
                            <NameLocal>Farol-KiteCenter</NameLocal>
                            <Location>Maxaranguape/Rio Grande do Norte</Location>
                        </CardLocation>
                    </Card>
                </TouchableOpacity>

            </ScrollView>
        </>
    )
};

export default Radares;