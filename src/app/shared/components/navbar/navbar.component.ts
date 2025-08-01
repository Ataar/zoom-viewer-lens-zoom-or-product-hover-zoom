import { Component, OnInit } from '@angular/core';



// 🧩 Component decorator: ye Angular ko batata hai ki yeh ek component hai
@Component({
  selector: 'app-navbar',                      // ✅ HTML me <app-navbar> tag se is component ko use kar sakte hain
  templateUrl: './navbar.component.html',      // ✅ Is component ka HTML template
  styleUrls: ['./navbar.component.scss']       // ✅ SCSS styling file for this component
})




// ✅ NavbarComponent class jo component ka logic handle karta hai
export class NavbarComponent implements OnInit {



  // 🔄 navbarOpen ek boolean property hai jo track karti hai navbar open hai ya nahi
  navbarOpen: boolean = false;



 
  constructor() { }

   // 🔁 ngOnInit: Angular ka lifecycle hook jo component load hote hi run hota hai
  ngOnInit(): void {
    
  }


  // 🔘 toggleNavbar: ye method button click par call hota hai
  // Agar navbar open hai to band karega, agar band hai to open karega
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;   // ✅ true se false aur false se true toggle karega
  }
}


