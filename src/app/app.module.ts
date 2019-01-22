import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { TimerComponent } from './timer/timer.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    IconBarComponent,
    TimerComponent,
    SidebarComponent
  ],
  imports: [
    NgbModule,
    FontAwesomeModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
