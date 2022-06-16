function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.svg" width={40} height={40} alt="" />
          <div>
            <h3 className="text-uppercase">
              react sneakers
            </h3>
            <p>
              Магазин лучших кроссовок
            </p>
          </div>
        </div>
        <ul className="d-flex ">
          <li className="basket mr-30">
            <img src="/img/card.svg" width={18} height={18} alt="" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30">
            <img src="/img/favorite.svg" width={18} height={18} alt="" />

          </li>
          <li>
            <img src="/img/user.svg" width={18} height={18} alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>
        <div className="sneakers d-flex flex-wrap">
          <div className="card p-20">
              <img src="/img/sneakers/1.jpg" alt="sneakers" width={133} height={112}/>
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span >Цена: </span>
                  <b>12 999 руб.</b>
                </div>
                <button>
                  <img src="/img/plus.svg" alt="add" />
                </button>
              </div>
          </div>
          <div className="card p-20">
              <img src="/img/sneakers/2.jpg" alt="sneakers" width={133} height={112}/>
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span >Цена: </span>
                  <b>12 999 руб.</b>
                </div>
                <button>
                  <img src="/img/plus.svg" alt="add" />
                </button>
              </div>
          </div>
          <div className="card p-20">
              <img src="/img/sneakers/3.jpg" alt="sneakers" width={133} height={112}/>
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span >Цена: </span>
                  <b>12 999 руб.</b>
                </div>
                <button>
                  <img src="/img/plus.svg" alt="add" />
                </button>
              </div>
          </div>
          <div className="card p-20">
              <img src="/img/sneakers/4.jpg" alt="sneakers" width={133} height={112}/>
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span >Цена: </span>
                  <b>12 999 руб.</b>
                </div>
                <button>
                  <img src="/img/plus.svg" alt="add" />
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
