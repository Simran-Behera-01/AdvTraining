import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyListboxComponent } from "./components/my-listbox/my-listbox.component";
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyListboxComponent,NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'templateDemo';
  IsFormValid = true;
  MySelection= "Simmi";
  photoUrl :string = "/photo.jpg"
}
