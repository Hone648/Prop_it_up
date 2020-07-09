import React, { useState } from 'react';
import styled from '@emotion/styled';

const PersonCard = (props) => {

    const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to top, rgb(86, 252, 3), rgb(3, 132, 252));
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;`

    const [age, setAge] = useState(props.age);

    const handleClick = (age) =>{
        setAge(prevage => prevage+1);
    }
    


    return (
            <Card>
                <h3>{props.lastname}, {props.firstname}</h3>
                <p>Age: {age}</p>
                <p>Haircolor: {props.hair}</p>
                <button onClick={(event) => handleClick(props.age)}>
                Birthday Button
                </button>
            </Card>
    )
}
export default PersonCard;