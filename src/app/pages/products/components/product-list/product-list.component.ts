import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  loading: boolean;
  productList: Product[];
  subscriptions: Subscription[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.subscriptions.push(
      this.productService.getProducts().snapshotChanges().subscribe(
        items => {
          this.productList = [];
          items.forEach(element => {
            const x = element.payload.toJSON();
            // tslint:disable-next-line: no-string-literal
            x['$key'] = element.key;
            this.productList.push(x as Product);
          });
          this.loading = false;
        }
        )
        );
      }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
