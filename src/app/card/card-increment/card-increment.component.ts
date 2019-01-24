import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-increment',
  templateUrl: './card-increment.component.html',
  styleUrls: ['./card-increment.component.css']
})
export class CardIncrementComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faPlus = faPlus;
  incrementValue;
  incrementElm;

  constructor() { }

  ngOnInit() { }

  increment() {
    this.incrementElm = document.getElementById('counterTag');
    this.incrementValue = parseInt(this.incrementElm.textContent, 10) + 1;
    this.incrementElm.innerHTML = ('000' + this.incrementValue).slice(-4);
  }

}
