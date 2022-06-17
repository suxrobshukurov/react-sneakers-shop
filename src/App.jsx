import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Header, Card, Drawer } from './components/index';

export const App = () => {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);


  useEffect(() => {

    axios.get('https://62aba08cbd0e5d29af1350ca.mockapi.io/items').then(res => {
      setItems(res.data)
    })

    axios.get('https://62aba08cbd0e5d29af1350ca.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
  }, [])

  const onAddedCart = (obj) => {
    axios.post('https://62aba08cbd0e5d29af1350ca.mockapi.io/cart', obj)
    setCartItems((prev) =>[...prev, obj])
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://62aba08cbd0e5d29af1350ca.mockapi.io/favorites', obj)
    setFavorites((prev) =>[...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62aba08cbd0e5d29af1350ca.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id))

  }

  const onChangeSearchInput = (event) => { 
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(!cartOpened)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(!cartOpened)} />
      <div className="content pt-40 pb-40">
        <div className='d-flex align-center justify-between	'>
          <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex align-center">
            <label htmlFor="search">
              <img src="/img/search.svg" alt="Search" />
            </label>
            <input type="text" placeholder='Поиск...' id='search' onChange={onChangeSearchInput} value={searchValue}/>
            {searchValue && <img className="clear" src="/img/cart-remove.svg" alt="Clear" onClick={() => setSearchValue('')} />}
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
          {
            items
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((sneaker) => {
              return(
              <Card 
                item={sneaker}
                key={sneaker.id}
                onFavorite={(obj)=> onAddToFavorite(obj)}
                onPlus={(obj)=> onAddedCart(obj)}
              />)
            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
