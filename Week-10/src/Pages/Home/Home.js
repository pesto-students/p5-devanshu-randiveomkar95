import React,{useState, useEffect} from 'react'
import axios from 'axios';
import style from './home.module.css'

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const [userInputs, setUserInputs] = useState([]);

  const fetchData = async () => {
    try {
      const baseURL = 'https://api.shrtco.de/v2/shorten?url=';
      const response = await axios(
        baseURL+userInput
      );
      const shortenURL = response.data.result.full_short_link;
      if(userInput) {
        const urlData = {id: new Date().getTime().toString(), completeURL: userInput, shortenURL: shortenURL}
        setUserInputs([...userInputs, urlData]);
        setUserInput("");
      }
    
    } catch (e) {
      console.log(e);
    }
  };
  return (
<>
<div className={style.container}>
  <input
    type='url'
    className={style["input-container"]}
    value={userInput}
    placeholder='Enter a Link'
    onChange={(e)=>{setUserInput(e.target.value)}}
  />
  <button onClick={() => {
      fetchData();
  }}> Submit URL </button>
</div>
<div className={style.list}>
  {userInputs?.map((v,index)=>(
    <>
    <div className={style["url-card"]}>
      <p key={index} >{v?.completeURL} - <a href={v?.shortenURL} target="blank">{v?.shortenURL}</a></p>
    </div>
    </>
  ))}
</div>
</>  )
}

export default Home