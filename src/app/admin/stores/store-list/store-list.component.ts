import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/core/models/store.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  storesList: Store[];
  selectedStore: Store;

  constructor(
    public storeService: StoreService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.storeService.getStores().snapshotChanges().subscribe(items =>
      {
        this.storesList = [];
        items.forEach(element => {
          const x = element.payload.toJSON();
          // tslint:disable-next-line: no-string-literal
          x['$key'] = element.key;
          this.storesList.push(x as Store);
        });
      });
  }

  editStore(product: Store): void {
    this.storeService.selectedStore = Object.assign({}, product);
  }

  deleteStore($key: string): void {
    this.storeService.deleteStore($key);
    this.snackbar.open('Tienda eliminada con éxito!', null, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right'
    });
  }

}
