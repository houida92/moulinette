import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-scan-page',
  templateUrl: './scan-page.component.html',
  styleUrls: ['./scan-page.component.scss']
})
export class ScanPageComponent implements OnInit {

  public sites: any[] = ['site 1', 'site 2', 'site 3', 'site 4', 'site 5', 'site 2', 'site 3', 'site 4', 'site 5'];
  public isMailSelected = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteItem(site: string) {
    this.sites = this.sites.filter(item => item !== site);
  }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = {
      top: '12%',
      right: '3%',
    };
    dialogConfig.height = '70vh';
    dialogConfig.width = '30vw';
    const dialogRef = this.dialog.open(DetailsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  sendMail() {
 this.isMailSelected = !this.isMailSelected;
  }

}

@Component({
  selector: 'details-dialog',
  templateUrl: 'details-dialog.html',
  styleUrls: ['details-dialog.scss']
})
export class DetailsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
