import { Header, Card, Drawer } from './components/index';

const sneakers = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg' },
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl: '/img/sneakers/2.jpg' },
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg' },
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg' },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
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
            sneakers.map((sneaker, i) => <Card title={sneaker.title} price={sneaker.price} imageUrl={sneaker.imageUrl} key={i} />)
          }

        </div>
      </div>
    </div>
  );
}

export default App;
