export interface IPriceList {
  product: string;
  price: number;
}

export interface IData {
  img: string;
  title: string;
  text: string;
  priceList?: IPriceList[];
}
