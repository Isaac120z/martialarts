import { Component, OnChanges, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "";
  names = [];
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get("./assets/martialarts.json").subscribe(response => {
      console.log("Response", response);
      this.title = response["title"];
      console.log("martialArts", response["martialArts"]);
      let forEachNames = [];
      response["martialArts"].forEach(martialart => {
        forEachNames.push(martialart.name);
      });
      console.log("forEachNames", forEachNames);

      let mapNames = response["martialArts"].map(martialart => {
        return martialart.name;
      });
      console.log("mapNames", mapNames);
      this.names = mapNames;
    });

    this.httpClient
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe(data => {
        console.log("data", data);
      });
  }
}
