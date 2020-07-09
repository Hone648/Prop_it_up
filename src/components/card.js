import React from 'react';
import styled from '@emotion/styled';

const PersonCard = (props) => {

    const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to top, rgb(86, 252, 3), rgb(3, 132, 252));
    width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;`

    return (
            <Card>
                <h3>{props.lastname}, {props.firstname}</h3>
                <p>Age: {props.age}</p>
                <p>Haircolor: {props.hair}</p>
            </Card>
    )
}
export default PersonCard;