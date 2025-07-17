// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],

// })

// export class AppComponent {
//   title = 'routing';
// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

 ngOnInit(): void { 
  // ✅ Ye function Angular ka lifecycle hook hai jo component ke load hote hi chalega.
  // `void` ka matlab hai ye function kuch return nahi karega.

  // ✅ Browser ke Performance API se navigation-related entries (events) le rahe hain
  const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  // `getEntriesByType('navigation')` → ye page navigation (like reload, back/forward) ke data deta hai
  // `as PerformanceNavigationTiming[]` → ye TypeScript ko batata hai ke ye ek array hai jisme har item ka type `PerformanceNavigationTiming` hoga

  // ✅ Ab check kar rahe hain ke kya user ne page ko reload (refresh) kiya hai
  if (navEntries.length && navEntries[0].type === 'reload') {
    // `navEntries.length` → check karta hai ke array khaali nahi hai
    // `navEntries[0].type === 'reload'` → agar pehla navigation entry "reload" hai to iska matlab page refresh hua

    // ✅ Agar page refresh hua to user ko '/posts' page par redirect karo
    this.router.navigate(['/posts']);
    // `this.router` → Angular ka Router service hai
    // `.navigate(['/posts'])` → user ko '/posts' route pe bhejne ka kaam karta hai
  }
}

}
