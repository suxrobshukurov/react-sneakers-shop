import { React, useState } from 'react';

import styles from './Card.module.scss';

export const Card = ({ item, onFavorite, onPlus}) => {

  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false)

  const onClickFavorite = () => {
    onFavorite()
    setIsFavorite(!isFavorite)
  }
  const onClickPlus = () => {
    if(isAdded) {
      return
    }
    onPlus(item)
    setIsAdded(!isAdded)
  }
  
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          onClick={onClickFavorite}
          alt="Unliked"
        />
      </div>
      <img src={item.imageUrl} alt="sneakers" width={133} height={112} />
      <h5 className="mb-15">{item.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span >Цена: </span>
          <b>{item.price} руб.</b>
        </div>
        <img
          className='cu-p'
          width={32}
          height={32}
          src={isAdded ? '/img/added-btn.svg' : '/img/plus-btn.svg'}
          onClick={onClickPlus}
          alt="added"
        />
      </div>
    </div>
  );
}

export default Card;