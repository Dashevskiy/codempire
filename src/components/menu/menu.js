import React, {useState, useEffect} from 'react';
import BurgerCard from '../burger-card/burger-card';
import './menu.css';
import BurgersService from '../../services/service';

const Menu = () => {
  const service = new BurgersService();

  const [burgers, setBurgers] = useState([])
  const [burgersImg, setBurgersImg] = useState()

  useEffect(() => {
    service.getAllBurgers()
      .then((burgers) => setBurgers(burgers))

    setBurgersImg(service.getAllBurgersImage())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const burger = burgers.map((burger) => <BurgerCard key={burger.id} burger={burger} image={burgersImg}/>)

  return (
    <div className='container-fluid row ml-0 mr-0 menu-container'>
      {burger}
    </div>
  )
}

export default Menu;