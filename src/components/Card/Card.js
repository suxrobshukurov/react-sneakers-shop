import styles from './Card.module.scss';
export const Card = ({ title, price, imageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img src={imageUrl} alt="sneakers" width={133} height={112} />
      <h5 className="mb-15">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span >Цена: </span>
          <b>{price} руб.</b>
        </div>
        <button>
          <img width={11} height={11} src="/img/plus.svg" alt="add" />
        </button>
      </div>
    </div>
  );
}

export default Card;