import React, {useState} from 'react'
import style from './search.module.css';

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <>
    <div className={style.searchbar}>
      <input
        type='url'
        className={style["input-container"]}
        value={userInput}
        placeholder='Type to search...'
        onChange={(e)=>{setUserInput(e.target.value)}}
        />
    </div>
    </>
  )
}

export default SearchBar