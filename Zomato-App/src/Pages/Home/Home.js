import React, {useEffect,useState} from 'react'
import style from './home.module.css'
import API from '../../API/restaurant.json'
import SearchBar from '../../Components/Search/SearchBar'

const Home = () => {
  const [query,setquery] = useState('')
  const menuDetails = API.menuDetails;
  return (
  <>
    <div className={style.container}>
        <SearchBar setquery={setquery}/>
        {Object.keys(menuDetails).map((item, index) => (
          <>
            <h2 className={style.restaurantName}>{item}</h2>
            <ul>
              {menuDetails[item].filter((v)=>v.foodname.toLowerCase().includes(query)).map((v, index)=>(<>
                  <li className={v.outofstock ? style.outOfStock: ''}>{v.foodname}</li>
              </>))}
            </ul>
          </>
        ))} 
    </div>
  </> 
  )
}

export default Home