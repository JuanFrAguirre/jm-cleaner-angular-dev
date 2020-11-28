import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit, OnDestroy {

  storesList: Store[];
  loading: boolean;
  subscriptions: Subscription[] = [];

  constructor(
    public storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.subscriptions.push(
      this.storeService.getStores().snapshotChanges().subscribe(
        items => {
          this.storesList = [];
          items.forEach(element => {
            const x = element.payload.toJSON();
            // tslint:disable-next-line: no-string-literal
            x['$key'] = element.key;
            this.storesList.push(x as Store);
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
