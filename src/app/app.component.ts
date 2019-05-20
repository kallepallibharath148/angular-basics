import { Component, ViewChild, ElementRef } from '@angular/core';
import { Login2Component } from './login2.component';


@Component({
  
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
providers:[Login2Component]
})
export class AppComponent {
  constructor(public _login: Login2Component){

  }
  public name ="hello iam from parent";
  @ViewChild('inpat') ra:ElementRef;
  title = 'my-dream-app';
  data="gxcgjjjhkvj";
  do(x){

   this.message=x;
   this.user=x;
  }
  public message="hello";
 user:string=this.message;
 rajuu:string="bharath";
   fan(e){
     this.name=e;
     
     console.log(e);
     this.ra.nativeElement.style.backgroundColor="lightgreen";
     this.ra.nativeElement.style.border="none";
     this.ra.nativeElement.style.borderBottom="2px solid red";
     this.ra.nativeElement.style.borderRadius="8px";
     this.ra.nativeElement.value=this.user;
     this.data="LKMVS";
     console.log("bharathhugvh");
   }

  

   raju:Array<number>=[1,2,3,4,5,6];
   submit(log):void{
    console.log(this._login.new);
    this._login.new=15;
    console.log(log);
    this._login.name(this._login.new);
    console.log(this._login );
   }
   
  
}
