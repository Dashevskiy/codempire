import React, {useState} from 'react';

const Ingredient = ({ingredient}) => {
  const [count, setCount] = useState(1);

  const dec = (ingredient) => {
    switch (ingredient) {
      case "Біфштекс":
        setCount(count > 0 ? count - 1 : 0)
        break;

      case "Сир":
        setCount(count > 0 ? count - 1 : 0)
        break;

      case "Соус":
        setCount(count > 0 ? count - 1 : 0)
        break;

      case "Рибне філе":
        setCount(count > 0 ? count - 1 : 0)
        break;

      case "Огірок":
        setCount(count > 0 ? count - 1 : 0)
        break;

      case "Цибуля":
        setCount(count > 0 ? count - 1 : 0)
        break;

      case "Помідор":
        setCount(count > 0 ? count - 1 : 0)
        break;

      default:
        console.log("default");
    }
  }

  const inc = (ingredient) => {
    switch (ingredient) {
      case "Біфштекс":
        setCount(count + 1)
        break;

      case "Сир":
        setCount(count + 1)
        break;

      case "Соус":
        setCount(count + 1)
        break;

      case "Рибне філе":
        setCount(count + 1)
        break;

      case "Огірок":
        setCount(count + 1)
        break;

      case "Цибуля":
        setCount(count + 1)
        break;

      case "Помідор":
        setCount(count + 1)
        break;

      default:
        console.log("default");
    }
  }

  return (
    <li>
      {ingredient}: {count}шт.
      <button onClick={() => dec(ingredient)} className='btn btn-light'>-</button>
      <button onClick={() => inc(ingredient)} className='btn btn-light'>+</button>
    </li>
  )
}

export default Ingredient;