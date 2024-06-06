import React from 'react'
import {useEffect, useState} from 'react'
import '../styles/Shop.css'

function Shop() {

  const [products, setProducts] = useState(null)

  async function fetchData(){
    try{
      const response = await fetch('http://localhost:3000/api/v1/products')
      const data = await response.json();
      console.log(data)
      setProducts(data)
    }

    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchData()
  }, [])

 

  return (
    <div className='main'>
      <h1>Store Review</h1>
      <div className="card">
        {
          products !== null ?(
            <div className='products'>
               <h3>{products[0].name}</h3>
               <p>{products[0].price}</p>
               <h3>{products[1].name}</h3>
               <p>{products[1].price}</p>
               <h3>{products[2].name}</h3>
               <p>{products[2].price}</p>
               <h3>{products[3].name}</h3>
               <p>{products[3].price}</p>
               {/* <h3>{products[4].name}</h3>
               <p>{products[4].price}</p> */}
            </div>
          ):
            <h1>loading...</h1>
       }
       
      </div>
    </div>
  )
}

export default Shop
