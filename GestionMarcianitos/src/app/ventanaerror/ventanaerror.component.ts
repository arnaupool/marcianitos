import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ventanaerror',
  templateUrl: './ventanaerror.component.html',
  styleUrls: ['./ventanaerror.component.css']
})
export class VentanaerrorComponent implements OnInit {
  error;
  motivo;
  constructor(
    private dialogRef: MatDialogRef<VentanaerrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) {this.motivo = data.motivo, this.error = data.error }

  ngOnInit(): void {
  }

  cancelar () {
    this.dialogRef.close();
  }

}
