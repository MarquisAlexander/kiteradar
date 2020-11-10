import styled from 'styled-components/native';

export const Container = styled.View`
    /* margin: 20px 20px; */
`;

export const Card = styled.View`
    border: 2px solid #949396;
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
    color: #4762f8;
    font-family: 'RobotoSlab-Medium';
`;

export const Price = styled.Text`

`;

export const Image = styled.Image`
    /* flex: 1; */
    display: flex;
    width: 100%;
    border-radius: 20px;
    height: 300px;
`;

export const GoCreateEvent = styled.TouchableOpacity`
    /* position: absolute; */
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(25, 103, 210);
    border-top-width: 1px;
    /* border-color: #35605A; */
    padding: 10px;

    /* display: flex; */
    justify-content: center;
    flex-direction: row;
`;

export const GoCreateEventText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'RobotoSlab-Medium';
    margin-left: 16px;
`;