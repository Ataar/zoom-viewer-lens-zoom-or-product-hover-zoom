import { Injectable } from '@angular/core';
import { TodoItem } from '../module/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 private todos: TodoItem[] = [
  {
    id: 1,
    title: 'Library Visit',
    description: 'Borrow books and read quietly.',
    imageUrl: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-11'),
    rating: 4
  },
  {
    id: 2,
    title: 'Watch Sunset',
    description: 'Capture photos of the sunset.',
    imageUrl: 'https://images.pexels.com/photos/462353/pexels-photo-462353.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-09'),
    rating: 5
  },
  {
    id: 3,
    title: 'City Exploration',
    description: 'Walk around downtown and enjoy street food.',
    imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-12'),
    rating: 3
  },
  {
    id: 4,
    title: 'Visit Garden',
    description: 'Relax in a botanical garden.',
    imageUrl: 'https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-20'),
    rating: 4
  },
  {
    id: 5,
    title: 'Read a Book',
    description: 'Spend time reading a new novel.',
    imageUrl: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-21'),
    rating: 5
  },
  {
    id: 6,
    title: 'Go Shopping',
    description: 'Visit a shopping mall and buy clothes.',
    imageUrl: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-21'),
    rating: 3
  },
  {
    id: 7,
    title: 'Coding Practice',
    description: 'Solve coding problems for 1 hour.',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-22'),
    rating: 5
  },
  {
    id: 8,
    title: 'Photography Walk',
    description: 'Capture nature and street shots.',
    imageUrl: 'https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-22'),
    rating: 4
  },
  {
    id: 9,
    title: 'Watch Sunset',
    description: 'Relax and enjoy the evening sunset view.',
    imageUrl: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-22'),
    rating: 3
  },
  {
    id: 10,
    title: 'Cycling',
    description: 'Cycle for fitness and fun in the evening.',
    imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-23'),
    rating: 5
  },
  {
    id: 11,
    title: 'Cook Dinner',
    description: 'Prepare a healthy homemade meal.',
    imageUrl: 'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-23'),
    rating: 4
  },
  {
    id: 12,
    title: 'Meditate',
    description: 'Practice 15 minutes of mindfulness meditation.',
    imageUrl: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-23'),
    rating: 3
  },
  {
    id: 13,
    title: 'Clean Room',
    description: 'Organize and clean your bedroom.',
    imageUrl: 'https://images.pexels.com/photos/7061449/pexels-photo-7061449.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-23'),
    rating: 2
  },
  {
    id: 14,
    title: 'Attend Webinar',
    description: 'Join online webinar on career development.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-23'),
    rating: 5
  },
  {
    id: 15,
    title: 'Visit Cafe',
    description: 'Have a coffee and read in a cozy cafe.',
    imageUrl: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-23'),
    rating: 4
  },
  {
    id: 16,
    title: 'Visit Shopping Mall',
    description: 'Buy clothes, shoes, and accessories.',
    imageUrl: 'https://images.pexels.com/photos/346729/pexels-photo-346729.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-04'),
    rating: 3
  },
  {
    id: 17,
    title: 'Read in Café',
    description: 'Read your favorite novel at the local coffee shop.',
    imageUrl: 'https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-05'),
    rating: 4
  },
  {
    id: 18,
    title: 'Beach Walk',
    description: 'Relax and walk barefoot on the beach.',
    imageUrl: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-06'),
    rating: 4
  },
  {
    id: 19,
    title: 'Yoga Session',
    description: 'Practice morning yoga in open air.',
    imageUrl: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-07'),
    rating: 5
  },
  {
    id: 20,
    title: 'Tech Learning',
    description: 'Explore Angular and TypeScript tutorials.',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-08'),
    rating: 5
  },

{
    id: 21,
    title: 'Watch Sunset',
    description: 'Capture photos of the sunset.',
    imageUrl: 'https://images.pexels.com/photos/462353/pexels-photo-462353.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-09'),
    rating: 5
  },
  {
    id: 22,
    title: 'Cycling in Nature',
    description: 'Take your bicycle for a nature ride.',
    imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-10'),
    rating: 4
  },
  {
    id: 23,
    title: 'Library Visit',
    description: 'Borrow books and read quietly.',
    imageUrl: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-11'),
    rating: 4
  },
  {
    id: 24,
    title: 'City Exploration',
    description: 'Walk around downtown and enjoy street food.',
    imageUrl: 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-12'),
    rating: 3
  },
  {
    id: 25,
    title: 'Photography Practice',
    description: 'Practice taking portraits in natural light.',
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-13'),
    rating: 5
  },
  {
    id: 26,
    title: 'Visit the Flower Garden',
    description: 'Take photos of blooming flowers.',
    imageUrl: 'https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-02'),
    rating: 5
  },
  {
    id: 27,
    title: 'Climb a Hill',
    description: 'Challenge yourself with a local hill climb.',
    imageUrl: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-03'),
    rating: 4
  },
  {
    id: 28,
    title: 'Cafe Catch-up',
    description: 'Chat with a friend over coffee.',
    imageUrl: 'https://images.pexels.com/photos/374147/pexels-photo-374147.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-05'),
    rating: 3
  },
  {
    id: 29,
    title: 'Seaside Walk',
    description: 'Walk along the beach during sunset.',
    imageUrl: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-06'),
    rating: 5
  },
  {
    id: 30,
    title: 'Home Workout',
    description: 'Quick 20-minute bodyweight routine.',
    imageUrl: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-07'),
    rating: 4
  },
  {
    id: 31,
    title: 'Code Angular App',
    description: 'Build a simple UI with components.',
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-08'),
    rating: 4
  },
  {
    id: 32,
    title: 'Sky Watching',
    description: 'Look for constellations at night.',
    imageUrl: 'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-09'),
    rating: 5
  },
  {
    id: 33,
    title: 'Bike Adventure',
    description: 'Explore new bike trails.',
    imageUrl: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-10'),
    rating: 4
  },
  {
    id: 34,
    title: 'Local Library Visit',
    description: 'Borrow a mystery novel.',
    imageUrl: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-11'),
    rating: 4
  },
  {
    id: 35,
    title: 'Old Town Tour',
    description: 'Photograph historic buildings.',
    imageUrl: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-12'),
    rating: 5
  },
  {
    id: 36,
    title: 'Portrait Session',
    description: 'Shoot portraits with natural lighting.',
    imageUrl: 'https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-13'),
    rating: 4
  },
  {
    id: 37,
    title: 'Strength Training',
    description: 'Lift weights and stretch.',
    imageUrl: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: true,
    createdAt: new Date('2025-07-14'),
    rating: 5
  },
  {
    id: 38,
    title: 'Greenhouse Gardening',
    description: 'Plant seeds and water herbs.',
    imageUrl: 'https://images.pexels.com/photos/450301/pexels-photo-450301.jpeg?auto=compress&cs=tinysrgb&h=200&w=300',
    completed: false,
    createdAt: new Date('2025-07-15'),
    rating: 4
  }
];


constructor() {
  this.todos = this.todos.map(todo => ({
    ...todo,
    rating: Math.floor(Math.random() * 5) + 1 // Random rating between 1 and 5
  }));
}


  getTodos(): TodoItem[] {
    return this.todos;
  }
}