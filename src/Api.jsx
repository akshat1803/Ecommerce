import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './app.css'
function Api({cartItem , setCartItem}) {

  const [Data, setData] = useState()
  const [icon, setIcon] = useState(true)
  const changename = (id) => {
    console.log(id)
    // const filterData = Data?.filter((item) => item?.id === id)
    // console.log(filterData, "11")
   Data?.map((item)=>{
    if(item?.id === id){
      setCartItem([...cartItem,item])
    }
   })

    

  };
  function fetchdata() {
    axios.get('https://fakestoreapi.com/products')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  console.log(Data)
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <div>


      <div className='products'>

        <ul className='product'>
          {Data?.map((item) => (
            <div className='discription' key={item.id}>
              <li ><img src={item.image} alt="" /></li>
              <li >{item.category}</li>
              <li >{item.title}</li>
              <li >${item.price}</li>
              <button onClick={(() => { changename(item.id) })}>{icon ? "Add to cart" : "Remove from cart"}</button>
            </div>
          ))}

        </ul>


      </div>


    </div>
  )
}
export default Api
