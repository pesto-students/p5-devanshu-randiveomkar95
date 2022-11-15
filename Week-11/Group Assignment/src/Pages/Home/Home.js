import React from 'react'
import style from './home.module.css'
import API from '../../API/restaurant.json'
import SearchBar from '../../Components/Search/SearchBar'

const Home = () => {
const menuDetails = API.menuDetails;
  return (
  <>
      <div className={style.container}>
          <SearchBar />
          {Object.keys(menuDetails).map((item, index) => (
            <>
            <div>
              <h2 className={style.restaurantName}>{item}</h2>
                  <div className={style.row}>
                    {menuDetails[item]?.map((v)=>(<>
                      <div className={v.outofstock ?  `${style.card} ${style.outOfStock}` : style.card}>
                        <p>{v.foodname}</p>
                      </div>
                    </>))}
                  </div>
            </div>
            </>
          ))} 
      </div>
      <div className={style.list}>
      </div>
  </>  )
}

export default Home