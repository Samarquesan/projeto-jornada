import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Banner } from "./banner/banner";
import { FormBuscaPassagens } from "./form-busca-passagens/form-busca-passagens";

@Component({
  selector: 'app-root',
  imports: [Header, Banner, FormBuscaPassagens],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project-jornada');
}
