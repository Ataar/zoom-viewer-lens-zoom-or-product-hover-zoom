
// // 📦 Import core Angular functionality
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-todo-items',                  // 🔹 Custom HTML tag used for this component
//   templateUrl: './todo-items.component.html',  // 🔹 HTML template for this component
//   styleUrls: ['./todo-items.component.scss']   // 🔹 SCSS styling specific to this component
// })
// export class TodoItemsComponent implements OnInit {





//   ngOnInit(): void {
    
//   }

 
// }


// ###############################################################################################

// example 1

// import { Component, OnInit } from '@angular/core';
// import { Product, ProductService } from '../../services/todo-service.service';

// @Component({
//   selector: 'app-todo-items',
//   templateUrl: './todo-items.component.html',
//   styleUrls: ['./todo-items.component.scss']
// })
// export class TodoItemsComponent implements OnInit {
//   products: Product[] = [];
//   hoveredProductId: number | null = null;

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     this.products = this.productService.getAllProducts();
//   }
// }


// ###############################################################################################


import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/todo-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {
  products: Product[] = [];
  hoveredProductId: number | null = null;

  // Track wishlist items
  wishlist: Set<number> = new Set();

 constructor(
  private productService: ProductService,
  private snackBar: MatSnackBar
) {}


  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  toggleWishlist(productId: number): void {
    if (this.wishlist.has(productId)) {
      this.wishlist.delete(productId);
    } else {
      this.wishlist.add(productId);
    }
  }

  isWishlisted(productId: number): boolean {
    return this.wishlist.has(productId);
  }
  addToCart(product: Product): void {
  this.snackBar.open(`🛒 " ${product.title} added to cart!`, '', {
    duration: 3000,         // auto-close after 3s
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: ['snackbar-success']
  });
}
}
























// import { Component, OnInit } from '@angular/core';
// import { TodoServiceService } from '../../services/todo-service.service';
// import { todoArr } from '../../module/todo';

// @Component({
//   selector: 'app-todo-items',
//   templateUrl: './todo-items.component.html',
//   styleUrls: ['./todo-items.component.scss']
// })
// export class TodoItemsComponent implements OnInit {
//   todoData: todoArr[] = [];

//   constructor(private todoService: TodoServiceService) {}

//   ngOnInit(): void {
//     this.todoData = this.todoService.getTodos();
//   }
// }
