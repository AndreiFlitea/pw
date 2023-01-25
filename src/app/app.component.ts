import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:string = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  showSomething = '';

    onButtonClick() {      
      this.onChangeLength(this.input);
      const numbers = '1234567890';
      const letters = 'abcdefghijklmnopqrstuvxyz';
      const symbols = '~!@#$%^&*()'

      let validChars ='';
      if(this.includeLetters) 
        validChars += letters;
      if(this.includeNumbers)
        validChars += numbers;
      if(this.includeSymbols) 
        validChars += symbols;    

      let generatedPassword ='';

      for(let i = 0; i <= this.length; i++ ) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
      }  
      this.showSomething = generatedPassword;    
  }

  onChangeLength(input: string) {
    const parsedValue = parseInt(input);

    if(!isNaN(parsedValue)) {      
       this.length = parsedValue;
    } else {
      this.length = 5;
    }

    this.input ='';
  }
  
 
  
  onChangeUseLetters() {
      this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
}

onChangeUseSymbols() {
  this.includeSymbols = !this.includeSymbols;
}
}
