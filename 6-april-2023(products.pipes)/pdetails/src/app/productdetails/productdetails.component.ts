  import { Component } from '@angular/core';

  interface price {
    id: Number;
    image: string;
    description: string;
    price: number;
    size: string;
    quantity: number;
}

  @Component({
    selector: 'app-productdetails',
    templateUrl: './productdetails.component.html',
    styleUrls: ['./productdetails.component.css']
  })
  export class ProductdetailsComponent {
        products: price[] = [
          {
            id: 1,
            image: 'https://th.bing.com/th/id/OIP.7YZuIpue3mZsXs_ufUzHXwHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7',
            description: 'red saree',
            price: 490,
            size: 'S',
            quantity: 1
           },

           {
            id: 2,
            image: 'https://th.bing.com/th/id/OIP.7YZuIpue3mZsXs_ufUzHXwHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7',
            description: 'blue saree',
            price: 490,
            size: 'S',
            quantity: 1
           },

           {
            id: 3,
            image: 'https://th.bing.com/th/id/OIP.7YZuIpue3mZsXs_ufUzHXwHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7',
            description: 'grey saree',
            price: 490,
            size: 'S',
            quantity: 1
           },

           {
            id: 4,
            image: 'https://th.bing.com/th/id/OIP.7YZuIpue3mZsXs_ufUzHXwHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7',
            description: 'white saree',
            price: 490,
            size: 'S',
            quantity: 1
           },
          ];
      
      sizes: string[] = ['S', 'M', 'L', 'XL'];
      price: any;
      decrementQuantity(product: price) {
      if (product.quantity > 1) {
      product.quantity--;
    }
      
    }
      
     incrementQuantity(product: price) {
     product.quantity++;
    }
      
      getTotalPrice() {
      return this.products.reduce((total, product) => {
      return total + (product.price * product.quantity);
      }, 0);
      }
      
    
      
    checkout() {
      alert("your satisfaction our goal!! please visit again ");
      }
      
    selectSize(event: Event, price: any) {
      const target = event.target as HTMLSelectElement;
      price.size = target.value;
    } 
  }




