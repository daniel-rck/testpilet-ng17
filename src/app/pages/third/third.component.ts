import { Component } from '@angular/core';
import { NotificationService } from 'app/services/notification/notification.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'piral-ng/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
  imports: [CommonModule, DividerModule, SharedModule, FormsModule, InputTextModule, CardModule, BadgeModule],
  standalone: true
})
export class ThirdComponent {
  constructor(private notificationService: NotificationService) {}

  showAlert() {
    this.notificationService.showAlert();
  }
}
