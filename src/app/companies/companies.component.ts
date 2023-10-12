import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {

  constructor() { }
  goBack() {
    window.history.back();
  }
  ngOnInit() {}

}
