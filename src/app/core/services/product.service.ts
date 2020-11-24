import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(
    public firebase: AngularFireDatabase
  ) { }

  getProducts(): any {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product): any {
    this.productList.push({
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price ? product.price : 999
    });
  }

  updateProduct(product: Product): any {
    this.productList.update(product.$key, {
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price || 999
    });
  }

  deleteProduct($key: string): any {
    this.productList.remove($key);
  }
}
