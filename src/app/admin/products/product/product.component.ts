import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    public productService: ProductService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm): any {
    if (productForm.value.$key != null) {
      this.productService.updateProduct(productForm.value);
      this.resetForm(productForm);
      this.snackbar.open('¡Producto editado con éxito!', null, {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
      });
    } else {
      this.productService.insertProduct(productForm.value);
      this.resetForm(productForm);
      this.snackbar.open('¡Producto agregado con éxito!', null, {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
      });
    }
  }

  resetForm(productForm?: NgForm): any {
    if (productForm != null) {
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }

}
