import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormControlName } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  logInForm=new FormGroup({
    user: new FormControl(""),
    password: new FormControl("")
  })
  constructor() { }

  ngOnInit(): void {
  }
  loginUser(){
    console.log(this.logInForm.value);
  }
}
