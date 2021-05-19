export default class BurgersService {
  _apiBase = 'http://localhost:8000/burgers/';
  _imageBase = 'https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/';

  getAllBurgers = async () => {
    const res = await fetch(`${this._apiBase}`)
    return res.json()
  }

  getBurgerId = async (id) => {
    const res = await fetch(`${this._apiBase}${id}`)
    return res.json()
  }

  getAllBurgersImage = () => `${this._imageBase}`;

  getBurgerImageId = (id) => `${this._imageBase}${id}`;
}