import styled from 'styled-components/native';

export const Card = styled.View`
    border: 2px solid #232528;
    margin: 8px;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5px;
    border-radius: 20px;
    /* width: 50%; */
    /* display: flex; */
`;

export const Info = styled.View`
    font-size: 30px;
    margin-right: 10px;
    margin-left: 10px;
    align-items: center;
`;

export const NameLocal = styled.Text`
    font-size: 15px;
`;

export const Location = styled.Text`

`;

export const CardLocation = styled.View`
    flex-direction: column;
    margin-left: 20px;
`;

export const Name = styled.Text`
    font-size: 30px;
`;

export const Price = styled.Text`

`;

export const Image = styled.Image`
    flex: 1;
    display: flex;
    width: 100%;
    border-radius: 20px;
    height: 300px;
`;