// export interface TodoItem {
//   id: number;
//   title: string;
//   description: string;
//   imageUrl: string;
//   completed: boolean;
//   createdAt: Date;
// }
export interface TodoItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  completed: boolean;
  createdAt: Date;
  rating?: number; // make it optional if generating dynamically
}
