import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({

  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})

export class Login2Component implements OnInit {
  fa: string;
 new:number;

  @Input('parentData') public raj;
  constructor() { }
  @Output() public childvent = new EventEmitter();
  ngOnInit() {
  }
  grtTex():string{
    return "helloworld";
  }
  dosome(e) {

    this.childvent.emit(e);
    this.fa = e;
  }
  raju: string = "bharath satya krishna raju kjallepalli"
   function submitt(val:number): void {
    this.display(5);
    console.log(this.new);
  }

  con:boolean = false;
  function name(raju: number): void {
    console.log(raju);
  }
  function display (hello:number):void{
    console.log(hello);
  }
}
