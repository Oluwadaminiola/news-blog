import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [PostComponent, NotificationComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [PostComponent, NotificationComponent, LoaderComponent],
})
export class SharedModule {}
