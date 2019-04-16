import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RMStartPage';
  menus = [
    { label: 'Construção e Projetos', link: './cp' },
    { label: 'Recursos Humanos', link: './rh' }
  ]
}
