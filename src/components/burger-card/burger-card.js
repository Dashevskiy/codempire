import React from 'react';
import {Link} from 'react-router-dom';
import './burger-card.css';

const BurgerCard = ({burger, image}) => {

  const {id, title, img, price} = burger;

  return (
    <div className='card-container row col-12 col-sm-6 col-md-3 col-lg-3 col-xl-2'>

      <div className='burger-headline'>
        <h5>{title}</h5>
        <h5>{price}</h5>
      </div>

      <div className='row burger-main-section'>
        <div className='burger-img-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pl-0 pr-0'>
          <img className='burger-img' src={`${image}${img}`} alt='burger'/>
        </div>

        <div className='burger-right-side col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pl-0 pr-0'>
          <div className='btn-menu'>
            <Link to={`/burger/${id}`} className='btn btn-primary'>Меню</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerCard;