import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { unescapeIdentifier } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PeriodicElement } from 'src/app/Models/PeriodicElement';
import { PeriodicElementService } from 'src/app/service/PeriodicElement.service';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[PeriodicElementService]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!:MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource! : PeriodicElement[];

  constructor(
     public dialog:MatDialog,
     public periodicElementService: PeriodicElementService ) {

      this.periodicElementService.getElements()
      .subscribe((data:PeriodicElement[]) => {
      this.dataSource = data;
    });





   }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElement | null) :void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {
     position: null,
     name:"",
     weight:"null",
     symbol:""
      } :element

    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        console.log(result);
        if(this.dataSource.map(p=>p.position).includes(result.position)){
          this.dataSource[result.position - 1] = result;
          this.table.renderRows();



        } else{

          this.periodicElementService.createElements(result)
              .subscribe((data:PeriodicElement)=>{


          this.dataSource.push(result);
          this.table.renderRows();

              });


      }
    }
  });

  }

  editElement(element:PeriodicElement):void{

     this.openDialog(element);



  }



  deleteElement(position:number):void{
   this.dataSource = this.dataSource.filter(p=>p.position !== position);



  }



  }


