import React, { useEffect, useState } from 'react';

import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, Content, Event, EventList, Title, Header, Strong } from './styles';

interface Users {
    id: number;
    name: string;
    email: string;
    estado_id: number;
    created_at: string;
}

const ListUsers: React.FC = () => {

    const [users, setUsers] = useState<Users[]>();

    useEffect(() => {
        api.get('user').then(response => {
            // console.log(response.data.next);
            setUsers(response.data);
            // setUrl = (response.data.next);
        });
    }, []);

    function HandlePoint() {
        Alert.alert("dentro da função");
    }


    return (
        <>
            <ScrollView>
                <Header>
                    <Title>Lista de usuários</Title>
                </Header>
                <Container>
                    {users?.map((user) => {
                        return (
                            <Event key={user.id}>
                                <EventList>

                                    <Content>
                                        <Strong>Nome: </Strong> {user.name}
                                    </Content>
                                    <Content>
                                        <Strong>E-mail: </Strong>
                                        {user.email}
                                    </Content>
                                    <Content>
                                        <Strong>Estado: </Strong>
                                        {user.estado_id}
                                    </Content>
                                    <Content>
                                        <Strong>Criado em: </Strong>
                                        {user.created_at}
                                    </Content>
                                </EventList>
                            </Event>
                        )
                    })}</Container>
            </ScrollView>
        </>
    )
};

export default ListUsers;