import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-userslist",
  templateUrl: "./userslist.page.html",
  styleUrls: ["./userslist.page.scss"],
})
export class UserslistPage implements OnInit {
  characters = [];

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.http
      .get<any>("https://rickandmortyapi.com/api/character")
      // .get<any>(" https://api.escuelajs.co/api/v1/products") 
      .subscribe((res) => {
        console.log(res)
        this.characters = res.results;
      });
  }

}
