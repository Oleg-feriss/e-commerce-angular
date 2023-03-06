export interface SALES {
  image: string;
  text: string;
  saleEnd: number;
  products: {
    name: string;
    price: number;
    image: string;
  }[];
}
