import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './order.css';
import BurgersService from '../../services/service';

const Order = ({order}) => {
  const service = new BurgersService();

  const [burger, setBurger] = useState('');
  const [burgerImg, setBurgerImg] = useState('')
  const [count, setCount] = useState(0);

  const {img} = burger;

  useEffect(() => {
    service.getBurgerId(order).then((b) => setBurger(b));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setBurgerImg(service.getBurgerImageId(img))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [burger])

  const inc = () => setCount(count + 1);
  const dec = () => count > 0 ? setCount(count - 1) : 0;

  return (
    <div className='container'>
      <div className='row order-headline'>
        <h1>Корзина</h1>
      </div>
      <div className='row order-container'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          <img src={burgerImg} alt='img'/>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
          <div className='quantity-burgers'>{count} шт.
            <button onClick={() => dec()} className='btn btn-light'>-</button>
            <button onClick={() => inc()} className='btn btn-light'>+</button>
          </div>
        </div>
      </div>
      <div className='row order-btn-container'>
        <Link to='/' className='btn btn-primary'>Завершить</Link>
      </div>
    </div>
  )
}

export default Order;