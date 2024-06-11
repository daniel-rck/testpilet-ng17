import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ConfirmDialogModule, RouterLink],
  standalone: true,
})
export class AppComponent {
  title = 'Another title bites the dust';
}
