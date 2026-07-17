export class Pizza {
  id: number;
  name: string;
  price: number;
  image?: string;

  constructor(id: number, name: string, price: number, image?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

export type Pizz = {
  id: number
  name: string
  price: number
  image?: string
}

export type PizzaDraft = {
  name: string
  price: string | undefined
  image: string
}
