// 📦 Import required Angular core modules
import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

// 📌 Decorator to define this as a Component
@Component({
  selector: 'app-dashboard',                 // 👈 Custom tag <app-dashboard>
  templateUrl: './dashboard.component.html', // 🔗 Path to HTML template
  styleUrls: ['./dashboard.component.scss']  // 🎨 Path to SCSS styles
})

// 📦 Class implements OnInit and OnDestroy lifecycle hooks
export class DashboardComponent implements OnInit, OnDestroy {

  // 🔁 Track current theme state (true = dark, false = light)
  isDarkMode = false;

  // 💉 Inject Renderer2 to safely manipulate DOM (especially <body> tag)
  constructor(private renderer: Renderer2) {}

// ✅ Angular lifecycle hook that runs when the component is initialized (page load)
ngOnInit(): void {
  // 🔹 Get the value of 'theme' from localStorage (it could be 'dark' or 'light')
  const savedTheme = localStorage.getItem('theme'); // 📦 stored as a string

  // 🔹 Check if the saved theme is 'dark'; if yes, set isDarkMode = true
  this.isDarkMode = savedTheme === 'dark'; // ✅ enables dark mode if matched

  // 🔹 Apply the theme class to the <body> tag accordingly
  this.updateBodyClass();
}

// ✅ Method to toggle between light and dark mode
toggleTheme(): void {
  // 🔄 Flip the value of isDarkMode (true -> false, false -> true)
  this.isDarkMode = !this.isDarkMode;

  // 💾 Save the current theme to localStorage
  // If dark mode is on, store 'dark', else store 'light'
  localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');

  // 🔁 Update the <body> tag's CSS class to reflect the current theme
  this.updateBodyClass();
}


  // ⚙️ Helper function to manage <body> classes
  updateBodyClass(): void {
    const body = document.body;

   if (this.isDarkMode) {
  // 🌙 If dark mode is enabled (isDarkMode is true)

  // ✅ Add the CSS class 'dark-mode' to the <body> element
  this.renderer.addClass(body, 'dark-mode');

  // ❌ Remove the CSS class 'light-mode' from the <body> element if it exists
  this.renderer.removeClass(body, 'light-mode');

} else {
  // ☀️ If light mode is enabled (isDarkMode is false)

  // ✅ Add the CSS class 'light-mode' to the <body> element
  this.renderer.addClass(body, 'light-mode');

  // ❌ Remove the CSS class 'dark-mode' from the <body> element if it exists
  this.renderer.removeClass(body, 'dark-mode');
}

  }

  // ❌ Lifecycle method: runs when component is destroyed
  ngOnDestroy(): void {
    // 🧹 Clean up any leftover theme classes on <body>
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.removeClass(document.body, 'light-mode');
  }
}
