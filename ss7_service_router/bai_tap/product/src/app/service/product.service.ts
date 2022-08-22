import { Injectable } from '@angular/core';
import {Product} from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];
  constructor() { }
  getAll(): Product[] {
    return this.products;
  }
  saveProduct(product): void {
    this.products.push(product);
  }
  findById(id: number): Product {
    return this.products.find(product => product.id === id);
  }
  deleteProduct(id: number): void {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
      }
    }
  }
  updateProduct(product): void {
    this.products.find(pr => pr.id === product.id).name = product.name;
    this.products.find(pr => pr.id === product.id).price = product.price;
    this.products.find(pr => pr.id === product.id).description = product.description;
  }
}
