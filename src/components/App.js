import React, { useEffect, useState } from "react";

function App() {
const[dogData, setDogData] = useState({
    message:"",
    status:"",
});
const[isLoaded, setIsLoaded] = useState(false);

let { message, status } = dogData;
const baseUrl = "https://dog.ceo/api/breeds/image/random"

    useEffect(()=>{
        fetch(baseUrl)
        .then(response => response.json())
        .then((response) => {
            setDogData(() => message = response.message )
            setIsLoaded(!isLoaded); 
        })
    }, [])

    const loadingMsg = () => !isLoaded ? <p>Loading...</p> : 
    <img src = { dogData } alt ="A Random Dog"></img>;
   
    return (
        <>
            {/* <div> { !isLoaded ? <p>"Loading..."</p> : null }</div> */}
            <div> { loadingMsg() }</div>
        </>    
    )
}

export default App;