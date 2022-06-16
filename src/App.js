import { Header, Card, Drawer } from './components/index'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content pt-40 pb-40">
        <div className='d-flex align-center justify-between	'>
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder='Поиск...' />
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap">
          <Card name='Мужские Кроссовки Nike Blazer Mid Suede' price='12 999' img='/img/sneakers/1.jpg' />
          <Card name='Мужские Кроссовки Nike Blazer Mid Suede' price='12 999' img='/img/sneakers/2.jpg' />
          <Card name='Мужские Кроссовки Nike Blazer Mid Suede' price='12 999' img='/img/sneakers/3.jpg' />
          <Card name='Мужские Кроссовки Nike Blazer Mid Suede' price='12 999' img='/img/sneakers/4.jpg' />

        </div>
      </div>
    </div>
  );
}

export default App;
