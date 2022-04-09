import React, {useState, useEffect} from 'react'
import gameList from './games-api'


const Games = () => {
  const [data]=useState(gameList);
  const [priceFilter, setPricefilter] = useState()
  const [consoleFilter, setConsolefilter] = useState()
  const [cartProducts, setProduct] = useState([])

  let filteredData = data

  filteredData = priceFilter ? filteredData.filter(game=> game.price >= priceFilter.min && game.price <= priceFilter.max) : filteredData

  filteredData = consoleFilter ? filteredData.filter(game=> game.console.includes(consoleFilter)) : filteredData

  const clearFilter = () =>{
    window.location.reload();
  }

  const productArray = "productList"

useEffect(()=> {
  const storedProducts = JSON.parse(localStorage.getItem(productArray))
  if (storedProducts) setProduct(storedProducts)
},[])

useEffect (() => {
localStorage.setItem(productArray, JSON.stringify(cartProducts))
}, [cartProducts])

  function addProduct(id) {
    let name = data[id].title
    let price = data[id].price
    let image = data[id].image
    setProduct(prevProduct => {
      return ([...prevProduct, {name:name, price:price, image: image}])
    })}

  return (
    <>
    <div className="filter-container">
    <div className="filters">
    <form className="filter-1">
    <h3 className="filter-header">Price</h3>
    <input className="price-checkbox" type="radio" value="5" name="Price" onClick={()=>setPricefilter({ min: 0 , max: 5})}></input>
    <label> $5 or less</label><br />
    <input className="price-checkbox" type="radio" value="10" name="Price" onClick={()=>setPricefilter({ min: 5 , max: 10})}></input>
    <label> $5 - $10</label><br />
    <input className="price-checkbox" type="radio" value="15" name="Price" onClick={()=>setPricefilter({ min: 10 , max: 15})}></input>
    <label> $10 -$15 </label><br />
    <input className="price-checkbox" type="radio" value="20" name="Price" onClick={()=>setPricefilter({ min: 15 , max: 20})}></input>
    <label> $15 -$20</label><br />
    <input className="price-checkbox" type="radio" value="25" name="Price" onClick={()=>setPricefilter({ min: 20 , max: 25})}></input>
    <label> $20 -$25</label><br />
    <input className="price-checkbox" type="radio" value="100" name="Price" onClick={()=>setPricefilter({ min: 30 , max: Number.MAX_VALUE})}></input>
    <label> $25 +</label><br />
    </form>

    <form className="filter-2">
    <h3 className="filter-header">Console</h3>
    <input className="price-checkbox" type="radio" value="PS3" name="Console" id = "pcb" onClick={()=>setConsolefilter('PS3')}></input>
    <label>PS3</label><br />
    <input className="price-checkbox" type="radio" value="PS4" name="Console" id = "pcb" onClick={()=>setConsolefilter('PS4')}></input>
    <label>PS4</label><br />
    <input className="price-checkbox" type="radio" value="PC" name="Console" id = "pcb" onClick={()=>setConsolefilter('PC')}></input>
    <label>PC</label><br />
    <input className="price-checkbox" type="radio" value="Xbox-One" name="Console" id = "pcb" onClick={()=>setConsolefilter('XboxOne')}></input>
    <label>Xbox One</label><br />
    <input className="price-checkbox" type="radio" value="Xbox-360" name="Console" id = "pcb" onClick={()=>setConsolefilter('Xbox360')}></input>
    <label>Xbox 360</label><br />
    <input className="price-checkbox" type="radio" value="Xbox" name="Console" id = "pcb" onClick={()=>setConsolefilter('Xbox')} ></input>
    <label>Xbox</label><br />
    </form>

    <button className="clearAll" onClick={clearFilter}>Clear</button>
    </div>
    </div>

    <div className="products-container-main">
    <div className="products-container">
    {filteredData.map((values)=>{
      const {id,title,price,image} = values;
      return(

        <>
        <div className="row" key={id}>
        <div className="row-item">
        <img src={image} className='product-img' alt=""/>
        <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="price">${price.toFixed(2)}</p>
        <button className="product-button" onClick={()=>addProduct(id)}>Add To Cart</button>
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
