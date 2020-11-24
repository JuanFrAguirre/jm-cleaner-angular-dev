import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  storeList: AngularFireList<any>;
  selectedStore: Store = new Store();

  constructor(
    public firebase: AngularFireDatabase
  ) { }

  getStores(): any {
    return this.storeList = this.firebase.list('stores');
  }

  insertStore(store: Store): any {
    this.storeList.push({
      name: store.name,
      typeOfStore: store.typeOfStore ? store.typeOfStore : null,
      isFranchise: store.isFranchise ? store.isFranchise :  null,
      franchiseID: store.franchiseID ? store.franchiseID : null,
      address: store.address,
      phone: store.phone ? store.phone : null,
      coordenates: store.coordenates ? store.coordenates : null,
      website: store.website ? store.website : null,
      location: store.location,
    });
  }

  updateStore(store: Store): any {
    this.storeList.update(store.$key, {
      name: store.name,
      typeOfStore: store.typeOfStore ? store.typeOfStore : null,
      isFranchise: store.isFranchise ? store.isFranchise :  null,
      franchiseID: store.franchiseID ? store.franchiseID : null,
      address: store.address,
      phone: store.phone ? store.phone : null,
      coordenates: store.coordenates ? store.coordenates : null,
      website: store.website ? store.website : null,
      location: store.location,
    });
  }

  deleteStore($key: string): any {
    this.storeList.remove($key);
  }
}
