import React, { useRef, useCallback, useEffect, useState } from 'react'
import { View, KeyboardAvoidingView, Platform, ScrollView, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';
// import logo from '../../assets/logo.png'


import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Title, Image, ButtonCreateUser, ButtonCreateUserText } from './styles';

interface SignUpFormData {
    estado_id: number;
    name: string;
    lastname: string;
    email: string;
    cpf: string;
    whats: string;
    password: string;
    perfil: string;
}

interface Users {
    id: number;
    name: string;
    email: string;
    estado_id: number;
    created_at: string;
}

const CreateUser: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();

    const [user, setUser] = useState<Users[]>();

    const handleLogon = useCallback(async (data: SignUpFormData) => {
        try {
            const schema = Yup.object().shape({
                estado_id: Yup.number().required('E-mail obrigatório'),
                name: Yup.string().required('Nome obrigatório'),
                lastname: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('Nome obrigatório'),
                cpf: Yup.string().required('Nome obrigatório'),
                whats: Yup.string().required('Nome obrigatório'),
                password: Yup.string().required('Nome obrigatório'),
                perfil: Yup.string().required('Nome obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            await api.post('/user', data);

            // useEffect(() => {
            //     api
            //         .post("/user")
            //         .then((response) => {
            //             setUser(response.data);
            //         })
            //         .catch((error) => {
            //             Alert.alert("Ocorreu um erro ao buscar os items");
            //         });
            // }, []);


            // navigation.navigate('DrawerRoutes');

            console.log(data);

            Alert.alert('Cadastro realizado com sucesso');

        } catch (err) {
            Alert.alert('Erro ao fazer cadastro, por favor preencha todas as informações');
        }
    }, []);

    // useEffect(() => {
    //     api.get('user').then(response => {
    //         // console.log(response.data.next);
    //         setUsers(response.data);
    //         // setUrl = (response.data.next);
    //     })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, []);


    function handleCreateUser() {
        navigation.goBack();
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#226CE0" />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        {/* <Image source={logo} /> */}

                        <View>
                            <Title>Fazer cadastro </Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleLogon}>
                            <Input
                                autoCapitalize="words"
                                name="name"
                                icon="user"
                                placeholder="Nome"
                            />
                            <Input
                                autoCapitalize="words"
                                name="lastname"
                                icon="user"
                                placeholder="Segundo nome"
                            />
                            <Input
                                autoCapitalize="words"
                                name="email"
                                icon="mail"
                                placeholder="E-mail"
                            />
                            <Input
                                autoCapitalize="words"
                                name="cpf"
                                icon="mail"
                                placeholder="CPF"
                            />
                            <Input
                                autoCapitalize="words"
                                name="whats"
                                icon="mail"
                                placeholder="Whatsapp"
                            />
                            <Input
                                secureTextEntry
                                name="password"
                                icon="key"
                                placeholder="Senha"
                                returnKeyType="send"
                            />
                            <Input
                                autoCapitalize="words"
                                name="perfil"
                                icon="mail"
                                placeholder="Perfil"
                            />
                            <Input
                                keyboardType="numeric"
                                autoCapitalize="words"
                                name="estado_id"
                                icon="mail"
                                placeholder="Estado"
                            />

                        </Form>

                        <Button onPress={() => formRef.current?.submitForm()}>Logar</Button>

                        <ButtonCreateUser onPress={() => handleCreateUser()}>
                            <ButtonCreateUserText>
                                Voltar para login
                        </ButtonCreateUserText>
                        </ButtonCreateUser>

                    </Container>
                </ScrollView>

            </KeyboardAvoidingView>
        </>
    );
}

export default CreateUser;