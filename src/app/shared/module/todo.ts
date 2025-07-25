export interface Comment {
  user: string;
  message: string;
  date: string;
}

export interface todoArr {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Pending' | 'In Progress' | 'Completed';
  tags: string[];
  imageUrl: string;
  rating: number;
  assignedTo: string;
  comments: Comment[];
}
