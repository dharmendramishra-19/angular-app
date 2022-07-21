import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string = 'angular-app';
  color: string ="red";
  value:number=0;
  load(area: string) {
    console.log(area);
    this.value= parseInt(area)+5;
  }
  birthday= new Date(2021, 3, 14);
  named="";
 clearValue() {
   this.named="";
 }
 userTasks:any[]=[];

 addTask(task:string){
  this.userTasks.push({id:this.userTasks.length,name:task});
 }
 deleteTask(task:number){
  console.log(task);
  this.userTasks=this.userTasks.filter(taskno=>taskno.id!==task)
 }

 data:number=10;
 random(){
  this.data=Math.floor((Math.random()*6)+1);
 }
 
}