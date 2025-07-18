import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500,
      verticalPosition:'top',
      horizontalPosition:'center',
      panelClass: ['snackbar-success']
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500,
       verticalPosition:'top',
      horizontalPosition:'center',
      panelClass: ['snackbar-error']
    });
  }

  showInfo(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1500,
      verticalPosition:'top',
      horizontalPosition:'center',
      panelClass: ['snackbar-info']
    });
  }
}


