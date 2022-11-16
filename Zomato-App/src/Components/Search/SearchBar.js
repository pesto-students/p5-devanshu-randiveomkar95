import React, {useState} from 'react'
import style from './search.module.css';

const SearchBar = ({setquery}) => {
  return (
    <>
    <div className={style.searchbar}>
      <input
        type='text'
        className={style["input-container"]}
        placeholder='Type to search...'
        onChange={(e)=>{setquery(e.target.value)}}
        />
    </div>
    </>
  )
}

export default SearchBar