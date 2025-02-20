import styled from "styled-components";
import {Character} from "./interfaces/Character.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #DFDBDA;
`;

const SingleCharDiv=styled.div<{type: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(
        props.type === "Card" ? '#E60012' : props.type === "Figure" ? '#009BEB' : '#A4C70E')};
    color: white;
    border: 3px solid ${(props) => (
        props.type === "Card" ? '#8F000B' : props.type === "Figure" ? '#0073B0' : '#7B940A'
    )};
    border-radius: 10px;
    font: small-caps bold calc(2px + 1vw) 'Lato', sans-serif;
    text-align: center;
`;

export default function Amiibo(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.tail} type={char.type}>
                        <h1>{char.character}</h1>
                        <p>Amiibo Series: {char.amiiboSeries}</p>
                        <p>Game Series: {char.gameSeries}</p>
                        <img src={char.image} alt={`image of ${char.character}`} />
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}