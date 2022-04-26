import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  notification!: { message: string; show: boolean };
  constructor(private generalService: GeneralService) {}

  ngOnInit() {
    this.triggerNotification()
  }
  triggerNotification() {
    this.generalService.alertStatus.subscribe((res) => {
      this.notification = res;
    });
  }
  dismissNotification() {
    this.generalService.dismissNotification();
  }
}
