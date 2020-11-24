import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Franchise } from '../models/franchise.model';

@Injectable({
  providedIn: 'root'
})
export class FranchisesService {

  franchisesList: AngularFireList<any>;
  selectedFranchise: Franchise = new Franchise();

  constructor(
    public firebase: AngularFireDatabase
  ) { }

  getFranchises(): any {
    return this.franchisesList = this.firebase.list('franchises');
  }
}
