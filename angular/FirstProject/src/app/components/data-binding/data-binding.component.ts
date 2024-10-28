import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
courseName : string = "Angular 18";
inputType = "checkbox";
amount = 99999;
city : any;
currentDate : Date = new Date();
isIndian : boolean= false;
constructor()
{
  this.city = "Hyderabad";
}
}
