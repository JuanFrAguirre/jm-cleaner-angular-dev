import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsList: Product[];
  selectedProduct: Product;

  constructor(
    public productService: ProductService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().snapshotChanges().subscribe(items =>
      {
        this.productsList = [];
        items.forEach(element => {
          const x = element.payload.toJSON();
          // tslint:disable-next-line: no-string-literal
          x['$key'] = element.key;
          this.productsList.push(x as Product);
        });
      });
  }

  editProduct(product: Product): void {
    this.productService.selectedProduct = Object.assign({}, product);
  }

  deleteProduct($key: string): void {
    this.productService.deleteProduct($key);
    this.snackbar.open('¡Producto eliminado con éxito!', null, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    });
  }

}
