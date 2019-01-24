import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { IconBarComponent } from './navigation/icon-bar/icon-bar.component';
import { TimerComponent } from './timer/timer.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { CardIncrementComponent } from './card/card-increment/card-increment.component';

@NgModule({
  declarations: [
    AppComponent,
    IconBarComponent,
    TimerComponent,
    SidebarComponent,
    CardComponent,
    CardIncrementComponent,
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
