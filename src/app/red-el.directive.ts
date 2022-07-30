import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  // constructor(el: ElementRef) {
  //   el.nativeElement.innerText  ="START:"; 
  // }
  element:ElementRef

  constructor(el:ElementRef) {

     el.nativeElement.style.color = "red"

     this.element = el;
     this.element.nativeElement.innerText="Hello";
   }
   ngOnInit(){

      this.element.nativeElement.innerText = "Hello World";

   }
}
