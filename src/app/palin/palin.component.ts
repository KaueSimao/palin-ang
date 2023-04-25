import { Component } from '@angular/core';

@Component({
  selector: 'app-palin',
  templateUrl: './palin.component.html',
  styleUrls: ['./palin.component.css']
})
export class PalinComponent {
  text: string ='';
  inverso : string= '';


  isPalindromo() : boolean {
    this.inverso = this.text.split('').reverse().join('');
 return this.text == this.inverso;

  }



}
