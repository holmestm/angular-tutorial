import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: 'Tim',
    address: '',
  });

  onSubmit() {
    window.alert(
      `Your order has been submitted ${JSON.stringify(this.checkoutForm.value)}`
    );
    console.warn(this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}
}
