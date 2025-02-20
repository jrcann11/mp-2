import Amiibo from "./components/Amiibo.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Character} from "./components/interfaces/Character.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px #B8B2B1 solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Character[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://amiiboapi.com/api/amiibo");
            const {amiibo}: {amiibo: Character[]} = await rawData.json();
            setData(amiibo);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <Amiibo data={data}/>
        </ParentDiv>
    )
}
