import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  selectedRange = 'Last 7 days';

  stats = [
    { title: 'Total Orders', value: 823, trend: '12%' },
    { title: 'Revenue', value: '₹1.45L', trend: '9%' },
    { title: 'New Customers', value: 95, trend: '6%' },
    { title: 'Pending Shipments', value: 24, trend: '2%' },
  ];

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
}
