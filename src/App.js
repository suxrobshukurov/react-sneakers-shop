import { React, useState } from 'react';

import { Header, Card, Drawer } from './components/index';

export const App = () => {
  const [items, setItems] = useState(
    [
      { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg' },
      { title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: '/img/sneakers/2.jpg' },
      { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg' },
      { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg' },
      { title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imageUrl: '/img/sneakers/5.jpg' },
      { title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imageUrl: '/img/sneakers/6.jpg' },
      { title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imageUrl: '/img/sneakers/7.jpg' },
      { title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imageUrl: '/img/sneakers/8.jpg' },
      { title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imageUrl: '/img/sneakers/9.jpg' },
      { title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 8499, imageUrl: '/img/sneakers/10.jpg' },
      { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8999, imageUrl: '/img/sneakers/2.jpg' },
      { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 11299, imageUrl: '/img/sneakers/7.jpg' },
    ]
  )
  const [cartOpened, setCartOpened] = useState(false);

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
