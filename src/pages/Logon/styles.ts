import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #00120B;
    font-family: 'RobotoSlab-Medium';
    margin: 64px 0 24px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #fff;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;

export const Image = styled.Image`
    /* size: "40px"; */
`;