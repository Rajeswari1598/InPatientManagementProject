import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrl: './popups.component.css'
})
export class PopupsComponent {
  @Input() message: string='';
  constructor(
    public dialogRef: MatDialogRef<PopupsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) { }

  confirmDelete(): void {
    // You can add your delete logic here
    console.log('Record deleted successfully');
    this.dialogRef.close(true); // Close the dialog with a 'true' value indicating delete confirmation
  }

  cancel(): void {
    this.dialogRef.close(false); // Close the dialog with a 'false' value indicating cancellation
  }

}
