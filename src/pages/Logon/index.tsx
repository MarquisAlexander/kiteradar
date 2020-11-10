import React, { useRef, useCallback } from 'react'
import { View, KeyboardAvoidingView, Platform, ScrollView, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import logo from '../../assets/logo.png'


import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Title, Image } from './styles';

interface SignUpFormData {
    email: string;
    senha: string;

}

const Logon: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();


    const handleLogon = useCallback(async (data: SignUpFormData) => {
        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório'),
                senha: Yup.string().required('Nome obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            navigation.navigate('DrawerRoutes');

            console.log(data);

            Alert.alert('logado com sucesso');

        } catch (err) {
            Alert.alert('Erro ao fazer login');
        }
    }, []);

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
                        <Image source={logo} />

                        <View>
                            <Title>Fazer login</Title>
                        </View>

                        <Form ref={formRef} onSubmit={handleLogon}>
                            <Input
                                autoCapitalize="words"
                                name="email"
                                icon="mail"
                                placeholder="E-mail"
                            />

                            <Input
                                secureTextEntry
                                name="senha"
                                icon="key"
                                placeholder="Senha"
                                returnKeyType="send"
                            />

                        </Form>

                        <Button onPress={() => formRef.current?.submitForm()}>Logar</Button>

                    </Container>
                </ScrollView>

            </KeyboardAvoidingView>
        </>
    );
}

export default Logon;