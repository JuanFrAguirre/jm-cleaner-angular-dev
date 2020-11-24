import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from 'src/app/core/models/store.model';
import { FranchisesService } from 'src/app/core/services/franchises.service';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  typesOfStore = ['Farmacia', 'Óptica'];
  pharmaciesFranchises = [
    {
      name: 'Farmacias Líder',
    },
    {
      name: 'Farmacias General Paz',
    },
    {
      name: 'Farmacias Sánchez Antonioli',
    },
    {
      name: 'Farmacias Red Red Persce S.A.',
    },
  ];
  selected = '';

  constructor(
    public storeService: StoreService,
    public franchiseService: FranchisesService,
    private snackbar: MatSnackBar
  ) { }

    ngOnInit(): void {
      this.storeService.getStores();
      this.franchiseService.getFranchises();
      this.resetForm();
    }

  onSubmit(storeForm: NgForm): any {
    if (storeForm.value.$key != null) {
      this.storeService.updateStore(storeForm.value);
      this.resetForm(storeForm);
      this.snackbar.open('Tienda editada con éxito!', null, {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
      });
      storeForm.value.name.focus();
    } else {
      this.storeService.insertStore(storeForm.value);
      this.resetForm(storeForm);
      this.snackbar.open('Tienda agregada con éxito!', null, {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
      });
    }
  }

  resetForm(storeForm?: NgForm): any {
    if (storeForm != null) {
      storeForm.reset();
      this.storeService.selectedStore = new Store();
      storeForm.value.name.focus();
    }
  }

}
