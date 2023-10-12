import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administradors',
  templateUrl: './administradors.component.html',
  styleUrls: ['./administradors.component.scss'],
})
export class AdministradorsComponent implements OnInit {

  constructor() { }
  goBack() {
    window.history.back();
  }
  ngOnInit() {}

}
