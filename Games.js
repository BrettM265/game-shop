import React, {useState} from 'react'
import gameList from './games-api'

const Games = () => {
  const [data, setData]=useState(gameList);
  const filterResult=(catItem, catPrice)=>{
    const result=gameList.filter((currData)=>{
      return currData.console.includes(catItem);
    });
    setData(result)
  }
  const filterResultPrice=(catItem)=>{
    const result=gameList.filter((currData)=>{
      if(catItem === 10){
        return  (currData.price <= (catItem) && currData.price >= 5);
      }else if(catItem === 15){
        return (currData.price <= (catItem) && currData.price >= 10);
      }else if(catItem === 20){
        return (currData.price <= (catItem) && currData.price >= 15);
      }else if(catItem === 25){
        return (currData.price <= (catItem) && currData.price >= 20);
      }else if(catItem === 100){
        return (currData.price <= (catItem) && currData.price >= 25);
      }
      
    });
    setData(result)
  }
  
  return (
    <>
    <div className="filter-container">
    <div className="filters">
    <form className="filter-1">
    <h3 className="filter-header">Price</h3>
    <input className="price-checkbox" type="radio" value="5" name="Price" onClick={()=>filterResultPrice(5)}></input>
    <label> $5 or less</label><br />
    <input className="price-checkbox" type="radio" value="10" name="Price" onClick={()=>filterResultPrice(10)}></input>
    <label> $5 - $10</label><br />
    <input className="price-checkbox" type="radio" value="15" name="Price" onClick={()=>filterResultPrice(15)}></input>
    <label> $10 -$15 </label><br />
    <input className="price-checkbox" type="radio" value="20" name="Price" onClick={()=>filterResultPrice(20)}></input>
    <label> $15 -$20</label><br />
    <input className="price-checkbox" type="radio" value="25" name="Price" onClick={()=>filterResultPrice(25)}></input>
    <label> $20 -$25</label><br />
    <input className="price-checkbox" type="radio" value="100" name="Price" onClick={()=>filterResultPrice(100)}></input>
    <label> $25 +</label><br />
    </form>

    <form className="filter-2">
    <h3 className="filter-header">Console</h3>
    <input className="price-checkbox" type="radio" value="PS3" name="Console" id = "pcb" onClick={()=>filterResult('PS3')}></input>
    <label>PS3</label><br />
    <input className="price-checkbox" type="radio" value="PS4" name="Console" id = "pcb" onClick={()=>filterResult('PS4')}></input>
    <label>PS4</label><br />
    <input className="price-checkbox" type="radio" value="PC" name="Console" id = "pcb" onClick={()=>filterResult('PC')}></input>
    <label>PC</label><br />
    <input className="price-checkbox" type="radio" value="Xbox-One" name="Console" id = "pcb" onClick={()=>filterResult('XboxOne')}></input>
    <label>Xbox One</label><br />
    <input className="price-checkbox" type="radio" value="Xbox-360" name="Console" id = "pcb" onClick={()=>filterResult('Xbox360')}></input>
    <label>Xbox 360</label><br />
    <input className="price-checkbox" type="radio" value="Xbox" name="Console" id = "pcb" onClick={()=>filterResult('Xbox')} ></input>
    <label>Xbox</label><br />
    </form>
    </div>
    </div>


    <div className="products-container-main">
    <div className="products-container">
    {data.map((values)=>{
      const {id,title,price,image} = values;
      return(

        <>
        <div className="row" key={id}>
        <div className="row-item">
        <img src={image} className='product-img' alt=""/>
        <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="price">${price.toFixed(2)}</p>
        <button>Add To Cart</button>
        </div>
        </div>
        </div>
      </>

    )})}

    </div>
    </div>
    </>
  )
}
    
export default Games