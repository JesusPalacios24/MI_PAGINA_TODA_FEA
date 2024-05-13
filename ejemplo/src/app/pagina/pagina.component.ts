import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina',
  standalone: true,
  imports: [],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {
  title = 'pagina';

  cont = 0;

  contador() {
    setInterval(() => {
      this.cont = this.cont+1;
    }, 1000);
  }
}
