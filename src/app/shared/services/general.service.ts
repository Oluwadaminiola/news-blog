import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  alertStatus: BehaviorSubject<{ message: string; show: boolean }> =
    new BehaviorSubject<{ message: string; show: boolean }>({
      message: 'testing',
      show: false,
    });

  constructor() {}

  showNotification(details: { message: string }) {
    this.alertStatus.next({ message: details.message, show: true });
    setTimeout(() => {
      this.dismissNotification();
    }, 4000);
  }

  dismissNotification() {
    this.alertStatus.next({ message: '', show: false });
  }
}
