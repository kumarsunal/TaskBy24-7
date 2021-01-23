import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


onlogout(){
	console.log(1);
	this.router.navigate(['login'])
}

send_diet_plan(){
	console.log(1);
	this.router.navigate(['diet-plan'])
}
send_workout(){
	console.log(1);
	this.router.navigate(['work-out'])
}
}
