import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password='';
  length = 0 ;
  changeletter= false;
  changenumber= false;
  changesymbol= false;

  onChangelength(value : string){
    const parsedvalue = parseInt(value);
    if(!isNaN(parsedvalue))
    this.length = parseInt(value);
  }


  changeletters(){
    this.changeletter = !this.changeletter;
  }

  changenumbers(){
    this.changenumber = !this.changenumber;
  }

  changesymbols(){
    this.changesymbol = !this.changesymbol;
  }

  onButtonClick(){
   const numbers = "1234567890"
   const letters = "abcdefghijklmnopqrstuvwxyz"
   const symbols = "!@#$%^&*()?"
   let validchars =""
   if(this.changeletter){
     validchars += letters;
   }
   if(this.changenumber){
      validchars+= numbers;
   }
   if(this.changesymbol){
     validchars+= symbols;
   }

   let generatedpassword = "";
   for(let i = 0 ; i < this.length ; i++ ){
     const index = Math.floor(Math.random() * validchars.length);
     generatedpassword += validchars[index];
   }
   this.password = generatedpassword;
  }
}
