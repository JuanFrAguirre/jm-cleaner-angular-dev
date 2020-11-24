import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  storesList: Store[];

  constructor(
    public storeService: StoreService,
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

}
