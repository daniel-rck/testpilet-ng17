import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NotificationService } from 'app/services/notification/notification.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent {
  constructor(private notificationService: NotificationService) {}

  showAlert() {
    this.notificationService.showAlert();
  }
}
