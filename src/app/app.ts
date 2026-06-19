import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Banner } from "./banner/banner";

@Component({
  selector: 'app-root',
  imports: [Header, Banner],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('project-jornada');
}
