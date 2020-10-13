import { MotoService } from './../../service/api/moto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rider-list',
  templateUrl: './rider-list.component.html',
  styleUrls: ['./rider-list.component.scss'],
})
export class RiderListComponent implements OnInit {

  constructor(
    private motoApi: MotoService
  ) { 
  }

  ngOnInit() {
    this.readRiders();
  }
  
  readRiders(){
    this.motoApi.getRiders().subscribe((data)=>{
      console.log(data);
    })
  }

}
