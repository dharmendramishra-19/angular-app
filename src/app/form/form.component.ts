import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userData:any = [];
  title:string ="Basic form"
  getData(data:any){
    console.log(data);
    this.userData.push(data);
  }

  display=true;
  toggle(){
    this.display=!this.display;
  }

}
