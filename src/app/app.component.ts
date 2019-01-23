import { Component } from '@angular/core';
import { faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'bytesFrontTest';
  faShoppingCard = faShoppingCart;
  faPlus = faPlus;
  incrementValue;
  incrementElm;

  increment() {
    this.incrementElm = document.getElementById('counter');
    this.incrementValue = parseInt(this.incrementElm.textContent, 10) + 1;
    this.incrementElm.innerHTML = ('000' + this.incrementValue).slice(-4);
 }

}
