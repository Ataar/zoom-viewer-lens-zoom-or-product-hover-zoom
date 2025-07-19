// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { dataObjects } from '../module/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private titles = [
    "Sunset", "City View", "Forest", "Beach Walk", "Mountain",
    "Vintage Car", "Night Sky", "Countryside", "Desert", "Snowland",
    "Lake", "Tulips", "Misty Morning", "Bridge View", "Cliffs Edge"
  ];

  private bodies = [
    "Enjoy the scene", "Feel the vibe", "Nature at its best", "Relax and chill",
    "Adventure awaits", "Classic drive", "Calm and peaceful", "Serene landscape",
    "Unforgettable view", "White winters", "Nature's mirror", "Colorful bloom",
    "Foggy scenes", "Historic beauty", "Majestic coast"
  ];

  constructor() {}

  generatePosts(count: number = 10): dataObjects[] {
    return Array.from({ length: count }, (_, i) => ({
      userId: Math.floor(Math.random() * 100),
      id: Date.now() + Math.random(), // Unique ID
      title: this.titles[Math.floor(Math.random() * this.titles.length)],
      body: this.bodies[Math.floor(Math.random() * this.bodies.length)],
      image: `https://picsum.photos/600/400?random=${Math.floor(Math.random() * 10000)}`
    }));
  }
}
