import { React, useState } from 'react';

import styles from './Card.module.scss';

export const Card = ({ title, price, imageUrl }) => {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          onClick={() => setIsFavorite(!isFavorite)}
          alt="Unliked"
        />
      </div>
      <img src={imageUrl} alt="sneakers" width={133} height={112} />
      <h5 className="mb-15">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span >Цена: </span>
          <b>{price} руб.</b>
        </div>
        <img
          className='cu-p'
          width={32}
          height={32}
          src={isAdded ? '/img/added-btn.svg' : '/img/plus-btn.svg'}
          onClick={() => setIsAdded(!isAdded)}
          alt="added"
        />
      </div>
    </div>
  );
}

export default Card;