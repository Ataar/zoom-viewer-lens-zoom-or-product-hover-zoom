import { Component, OnInit, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit , OnDestroy {
  isDarkMode = false;
  selectedRange = 'Last 7 days';

  stats = [
    { title: 'Total Orders', value: 823, trend: '12%' },
    { title: 'Revenue', value: '₹1.45L', trend: '9%' },
    { title: 'New Customers', value: 95, trend: '6%' },
    { title: 'Pending Shipments', value: 24, trend: '2%' },
  ];

   constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart() {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Orders',
            data: [120, 190, 300, 250, 280, 200, 350],
            backgroundColor: '#007bff',
            borderRadius: 8,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 100 }
          }
        }
      }
    });
  }





 ngOnInit(): void {
  const savedTheme = localStorage.getItem('theme');
  this.isDarkMode = savedTheme === 'dark';
  this.updateTheme();
}


  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  updateTheme(): void {
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
      this.renderer.removeClass(document.body, 'light-mode');
    } else {
      this.renderer.addClass(document.body, 'light-mode');
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }


  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.removeClass(document.body, 'light-mode');
  }


}
 
  


