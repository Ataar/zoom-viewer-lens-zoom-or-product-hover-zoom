
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
import Swal from 'sweetalert2';

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
  this.snackBar.open(`🛒 ${product.title} added to cart!`, '', {
    duration: 3000,         // auto-close after 3s
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: ['snackbar-success']
  });
}

// ---------------------------------------------------------------------

// 1: 

//  byNow(product:Product)
//  {
//     this.snackBar.open(`Sure? ${product}`)
    
//  }

// ----------------------------------------------------------------------------

// 2 - 


// ----------------------------------------------------------------------------


// isProcessing = false;

// byNow(product: any) {
//   this.isProcessing = true;

//   setTimeout(() => {
//     this.isProcessing = false;
//     // Redirect or show toast
//     alert('Redirecting to payment...');
//     // this.router.navigate(['/checkout']);
//   }, 2000);
// }


// ----------------------------------------------------------------------------


//    ## it is also part of 2 ##

// isProcessing = false;

// byNow(product: any) {
//   Swal.fire({
//     icon: 'success',
//     title: 'Buy Now',
//     text: 'Redirecting to checkout...',
//     showConfirmButton: false,
//     timer: 2000,
//     timerProgressBar: true
//   });

//   // Optional: Navigate after timeout
//   setTimeout(() => {
//     // this.router.navigate(['/checkout']);
//   }, 2000);
// }




isProcessingMap: { [productId: number]: boolean } = {};


byNow(product: Product) {
  const productId = product.id;
  this.isProcessingMap[productId] = true;

  setTimeout(() => {
    this.isProcessingMap[productId] = false;

    Swal.fire({
      title: 'Proceed to Payment?',
      text: 'We will show a QR Code for payment.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Show QR',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        this.showPaymentPopup();
      }
    });
  }, 1500);
}





// showPaymentPopup() {
//   Swal.fire({
//     title: 'Scan QR to Pay',
//     html: `
//       <img src="./assets/IMG-20250728-WA0003.jpg.png" alt="QR Code" style="width: 160px; border-radius: 10px; margin-top: 10px;">
//       <p style="font-size: 0.85rem; margin-top: 10px; color: #666;">Use any UPI app to scan and pay</p>
//     `,
//     showCloseButton: true,
//     showConfirmButton: false,
//     backdrop: true,
//     width: 240, // Reduced from 300
//     padding: '0.8em',
//     background: '#fff',
//   });
// }
showPaymentPopup() {
  Swal.fire({
    title: 'Scan QR to Pay',
    html: `
      <div class="qr-popup-content">
        <img src="./assets/IMG-20250728-WA0003.jpg.png" alt="QR Code" class="qr-image">
        <p class="qr-description">Use any UPI app to scan and pay</p>
      </div>
    `,
    showCloseButton: true,
    showConfirmButton: false,
    backdrop: true,
    width: 260,
    padding: '1em',
    background: '#fff',
    customClass: {
      popup: 'qr-popup-box'
    }
  });
}



}





// showPaymentPopup() {
//   Swal.fire({
//     title: 'Scan QR to Pay',
//     html: `
//       <img src="./assets/IMG-20250728-WA0003.jpg.png" alt="QR Code" style="width: 250px; border-radius: 10px;">
//       <p class="mt-2 text-muted">Use any UPI app to scan and pay</p>
//     `,
//     showCloseButton: true,
//     showConfirmButton: false,
//     backdrop: true,
//     width: 300,
//     padding: '1em',
//     background: '#fff',
//   });
// }


















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
