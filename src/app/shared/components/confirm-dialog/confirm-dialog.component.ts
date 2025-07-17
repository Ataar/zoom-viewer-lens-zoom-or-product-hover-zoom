import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  message!:string
  constructor(private matDialog: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:string
  ) {{this.message = data}}

  ngOnInit(): void {
    
  }

  onClose(btn: boolean): void {
    this.matDialog.close(btn); // true = Yes, false = Cancel
  }
}
