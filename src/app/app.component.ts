import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  result = ''
  
  onButtonClick(item:any){
    this.result +=item
    // console.log(item)
  }

  // equal
  onButtonEqual(){
    // eval used to return the result of the string  ,
    // toFixed used to set the number of decimal places
    this.result = eval(this.result).toFixed(3)
  }
  // Clear
  onButtonClear (){
    this.result = ''
  }
}
