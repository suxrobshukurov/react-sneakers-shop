import styles from './Drawer.module.scss';

export const Drawer = ({ onClose, items=[], onRemove }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.cartHeader}>
          <h2 className=''>Корзина</h2>
          <img src="/img/cart-remove.svg" alt="Close" onClick={onClose} />
        </div>
        {items.length > 0 ? 
        <>
        <div className={styles.items}>
        {items.map((obj) => {
          return( <div className={styles.cartItem} key={obj.id}>
            <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className={styles.cartItemImg} ></div>
            <div className='mr-20'>
              <p className='mb-5'>{obj.title}</p>
              <b>{obj.price} руб.</b>
            </div>
            <img className={styles.removeBtn} src="/img/cart-remove.svg" alt="Remove" onClick={()=> onRemove(obj.id)} />
          </div>
        )})}
        </div>
        <div className={styles.cartTotalBlock}>
        <ul>
          <li>
            <span>Итого:</span>
            <div ></div>
            <b>21 498 руб. </b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className={styles.greenButton}>
          Оформить заказ
          <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
      </>
        :
        <div className="cardItem d-flex flex-column justify-center align-center flex">
          <img className='mb-20 ' width={120} height={120} src="/img/empty-card.jpg" alt="Empty card" />
          <h2>Корзина пуста</h2>
          <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button className='greenButton' onClick={onClose} >
            <img src="/img/arrow.svg" alt="arrow" className='back' /> Вернуться назад
          </button>
        </div>
        }
      </div>
    </div>
  );
}

export default Drawer;