import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class HomeComponent implements OnInit {

  registerform:FormGroup;
  public uservalue :any='';
  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.registerform=this.fb.group({
      istname:['',Validators.required],
      lstname:['',],
      Experience:['',],
      currentCompany:['',],
      qualification:['',],
      yearPassed:['',],
      email:['',],
      phone:['',]
    });
  }

  submitform(){
    this.uservalue = this.registerform.value;
    console.log(this.uservalue);
    if(this.uservalue){
      console.log(0);
      localStorage.setItem("userfisttName",this.uservalue.istname)
      localStorage.setItem("userlastName",this.uservalue.lstname)
      this.router.navigate(['/home']);
    }
  }
}




