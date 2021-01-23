import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-diet-plan",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class DietPlanComponent implements OnInit {
  public userIstName: any = "";
  public userlastName: any = "";
  constructor() {}

  ngOnInit() {
    if (localStorage.getItem("userfisttName")) {
      this.userIstName = localStorage.getItem("userfisttName");
    } else {
      this.userIstName = "John";
    }
    if (localStorage.getItem("userlastName")) {
      this.userlastName = localStorage.getItem("userlastName");
    } else {
      this.userlastName = "Due";
    }
  }
}
