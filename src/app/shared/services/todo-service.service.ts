import { Injectable } from '@angular/core';
import { todoArr } from '../module/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
 todoData: todoArr[] = [
  {
    id: 1,
    title: 'Buy groceries',
    description: 'Milk, Bread,Fruits, and Vegetables from local mart.',
    dueDate: '2025-07-28',
    priority: 'High',
    status: 'Completed',
    tags: ['shopping', 'urgent'],
    imageUrl: 'https://images.unsplash.com/photo-1603532232030-69a8264a71f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    assignedTo: 'Prakash Gupta',
    comments: [
      { user: 'Ali', message: 'Don’t forget butter', date: '2025-07-25' }
    ]
  },
  {
    id: 2,
    title: 'Workout',
    description: 'Go for 30 mins running and 20 mins strength training.',
    dueDate: '2025-07-26',
    priority: 'Medium',
    status: 'In Progress',
    tags: ['health', 'fitness'],
    imageUrl: 'https://images.unsplash.com/photo-1626031706819-da335408f197?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 3,
    assignedTo: 'Sudheer Kulkarni',
    comments: []
  },
  {
    id: 3,
    title: 'Finish Complex project',
    description: 'Complete all components, integrate API, and test thoroughly.',
    dueDate: '2025-07-30',
    priority: 'Critical',
    status: 'Pending',
    tags: ['work', 'angular', 'dev'],
    imageUrl: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
    assignedTo: 'Aisha Mirza',
    comments: [
      { user: 'Zoya', message: 'Check responsiveness too', date: '2025-07-24' },
      { user: 'Mateen', message: 'On it!', date: '2025-07-25' }
    ]
  },
  {
    id: 4,
    title: 'Read a book',
    description: 'Read "Atomic Habits" for at least 1 hour before bed.',
    dueDate: '2025-07-26',
    priority: 'Low',
    status: 'Completed',
    tags: ['personal development', 'reading'],
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    rating: 5,
    assignedTo: 'Malik Chavan',
    comments: []
  },
  {
    id: 5,
    title: 'Plan weekend trip',
    description: 'Decide on the location, book a hotel, and prepare itinerary.',
    dueDate: '2025-07-27',
    priority: 'Medium',
    status: 'Pending',
    tags: ['travel', 'fun'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661308284188-9bbbd4602200?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
    assignedTo: 'Anju Khapra',
    comments: [
      { user: 'Sara', message: 'Let’s go to Lonavala!', date: '2025-07-25' }
    ]
  },
  {
  id: 6,
  title: 'Organize Workspace',
  description: 'Clean desk, label folders, remove clutter, and set up a dual monitor stand.',
  dueDate: '2025-07-28',
  priority: 'Medium',
  status: 'Pending',
  tags: ['productivity', 'organization', 'desk'],
  imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  rating: 3,
  assignedTo: 'K.K Sharma',
  comments: [
    { user: 'Rohit', message: 'Don’t forget cable organizers', date: '2025-07-26' }
  ]
},
{
  id: 7,
  title: 'Team Meeting (Sprint Planning)',
  description: 'Discuss tasks, deadlines, blockers, and upcoming features with the dev team.',
  dueDate: '2025-07-29',
  priority: 'High',
  status: 'In Progress',
  tags: ['work', 'meeting', 'scrum'],
  imageUrl: 'https://plus.unsplash.com/premium_photo-1661520658560-5e3c96d37b53?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  rating: 4,
  assignedTo: 'Rajat Mehra',
  comments: [
    { user: 'Ankit', message: 'Let’s finalize story points today', date: '2025-07-27' }
  ]
},
{
  id: 8,
  title: 'Backup Important Files',
  description: 'Back up documents, photos, and code repositories to an external SSD and cloud.',
  dueDate: '2025-07-30',
  priority: 'High',
  status: 'Pending',
  tags: ['data', 'backup', 'security'],
  imageUrl: 'https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
  rating: 4,
  assignedTo: 'Pooja Rane',
  comments: [
    { user: 'Jay', message: 'Use Google Drive & GitHub both', date: '2025-07-26' }
  ]
},
{
  id: 9,
  title: 'Attend Online Course: UX Design',
  description: 'Watch 3 lectures, take notes, and complete module quiz on Figma basics.',
  dueDate: '2025-08-01',
  priority: 'Medium',
  status: 'Pending',
  tags: ['learning', 'design', 'ux'],
  imageUrl: 'https://images.unsplash.com/photo-1672309558498-cfcc89afff25?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  rating: 5,
  assignedTo: 'Neha Agarwal',
  comments: []
},
{
  id: 10,
  title: 'Grocery Budget Planning',
  description: 'Plan weekly groceries within ₹2500, compare local vs online store prices.',
  dueDate: '2025-07-27',
  priority: 'Low',
  status: 'Completed',
  tags: ['finance', 'budget', 'home'],
  imageUrl: 'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  rating: 4,
  assignedTo: 'Gulshan Roy',
  comments: [
    { user: 'Fatima', message: 'BigBasket has discounts on Sundays', date: '2025-07-24' }
  ]
},
{
  id: 21,
  title: 'Wake Up at 5 AM',
  description: 'Start the day early. No snooze. Drink water, stretch, and plan the day.',
  dueDate: '2025-07-26',
  priority: 'High',
  status: 'In Progress',
  tags: ['discipline', 'morning', 'motivation'],
  imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0',
  rating: 5,
  assignedTo: 'Sweta Pathak',
  comments: [
    { user: 'Coach', message: 'Discipline beats motivation 👊', date: '2025-07-25' }
  ]
},
{
  id: 22,
  title: 'Write Down Top 3 Goals',
  description: 'Visualize your success. Write down what you want in life. Be specific.',
  dueDate: '2025-07-26',
  priority: 'Medium',
  status: 'Completed',
  tags: ['goals', 'clarity', 'self-improvement'],
  imageUrl: 'https://plus.unsplash.com/premium_photo-1705178703357-91fa88da8eca?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  rating: 4,
  assignedTo: 'Mehnaz Siddiqui',
  comments: [
    { user: 'Mentor', message: 'Focus on WHY you want it.', date: '2025-07-25' }
  ]
},
{
  id: 23,
  title: 'Complete Daily 1% Challenge',
  description: 'Do one thing that improves you by 1% today — habit, skill, or mindset.',
  dueDate: '2025-07-27',
  priority: 'High',
  status: 'Pending',
  tags: ['discipline', 'habits', 'growth'],
  imageUrl: 'https://images.unsplash.com/photo-1567646303972-f7de3a9c0a05?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  rating: 5,
  assignedTo: 'Harsh Agarwal',
  comments: []
},
{
  id: 24,
  title: 'Read 10 Pages of a Book',
  description: 'Make reading a non-negotiable. Any topic that grows you: mindset, money, focus.',
  dueDate: '2025-07-26',
  priority: 'Medium',
  status: 'Completed',
  tags: ['reading', 'habits', 'self-growth'],
  imageUrl: 'https://plus.unsplash.com/premium_photo-1750053353131-845823f97efd?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  rating: 5,
  assignedTo: 'Manjeet Singh',
  comments: [
    { user: 'Zara', message: 'Book: "Can’t Hurt Me" 💥', date: '2025-07-24' }
  ]
},
{
  id: 25,
  title: 'Review Your Vision Board',
  description: 'Take 5 minutes to look at your dreams and remind yourself why you started.',
  dueDate: '2025-07-27',
  priority: 'Low',
  status: 'Pending',
  tags: ['mindset', 'vision', 'success'],
  imageUrl: 'https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  rating: 4,
  assignedTo: 'Inaya Shaikh',
  comments: []
}


];




 

  constructor() { }
  getTodos(): todoArr[] {
    return this.todoData;
  }
}
