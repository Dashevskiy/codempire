import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './burger-change.css';
import BurgersService from '../../services/service';
import Ingredient from '../ingredient/ingredient';

const BurgerChange = ({match, onItemSelected}) => {
  const {id} = match.params;

  const service = new BurgersService();

  const [burger, setBurger] = useState({});
  const [burgerImg, setBurgerImg] = useState('');

  const {title, price, img, ingredients} = burger;

  useEffect(() => {
    service.getBurgerId(id).then((b) => setBurger(b))
    onItemSelected(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setBurgerImg(service.getBurgerImageId(img))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [burger])

  let ingredientNumber = 0;

  const ingredient = ingredients?.map((ingredient) => {
    ingredientNumber++;

    return (
      <Ingredient key={ingredientNumber} ingredient={ingredient}/>
    )
  })

  return (
    <div className='container'>
      <div className='row change-burger-headline'>
        <h6>{title}:</h6>
        <h6>{price}</h6>
      </div>

      <div className='row change-burger-container'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          <img src={burgerImg} alt='img'/>
        </div>
        <div className='change-list col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          <ul>
            {ingredient}
          </ul>
        </div>
      </div>
      <div className='row change-btn-container'>
        <Link to='/order' className='btn btn-primary'>Подтвердить</Link>
      </div>
    </div>
  )
}

export default withRouter(BurgerChange);