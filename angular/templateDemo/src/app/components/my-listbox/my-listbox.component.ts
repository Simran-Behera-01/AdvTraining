import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-listbox',
  standalone: true,
  imports: [],
  templateUrl: './my-listbox.component.html',
  styleUrl: './my-listbox.component.css'
})
export class MyListboxComponent {
  @Input() value :string ;
}
