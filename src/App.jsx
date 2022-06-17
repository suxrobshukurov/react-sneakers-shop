import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Header, Card, Drawer } from './components/index';

export const App = () => {
  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false);


  useEffect(() => {

    fetch('https://62aba08cbd0e5d29af1350ca.mockapi.io/items')
    .then(res => res.json())
    .then(json => setItems(json));
  }, [])

  // axios.get('https://62aba08cbd0e5d29af1350ca.mockapi.io/items')
  // .then(res => setItems(res));

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(!cartOpened)} />}
      <Header onClickCart={() => setCartOpened(!cartOpened)} />
      <div className="content pt-40 pb-40">
        <div className='d-flex align-center justify-between	'>
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <label htmlFor="search">
              <img src="/img/search.svg" alt="Search" />
            </label>
            <input type="text" placeholder='Поиск...' id='search' />
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
          {
            items.map((sneaker, i) => <Card title={sneaker.title} price={sneaker.price} imageUrl={sneaker.imageUrl} key={i} />)
          }

        </div>
      </div>
    </div>
  );
}

export default App;
