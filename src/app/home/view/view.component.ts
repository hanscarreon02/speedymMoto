import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {

  constructor(
    private menu : MenuController

  ) { }

  ngOnInit() {}

  openEnd() {
    this.menu.open('end');
  }


}
