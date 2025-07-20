import { Injectable } from '@angular/core';
import { dataObjects } from '../module/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  postArr :Array<dataObjects>= [
     {
      userId: 1,
      id: 1,
      title: "Sunset Over the Hills",
      body: "A beautiful sunset with golden hues lighting up the hills.",
      image: "https://picsum.photos/id/1015/600/400"
    },
    {
      userId: 2,
      id: 2,
      title: "City Skyline",
      body: "The city skyline at night glowing with lights and energy.",
      image: "https://picsum.photos/id/1011/600/400"
    },
    {
      userId: 3,
      id: 3,
      title: "Forest Path",
      body: "A serene path through a dense, green forest.",
      image: "https://picsum.photos/id/1040/600/400"
    },
    {
      userId: 4,
      id: 4,
      title: "Ocean Breeze",
      body: "Waves crashing on the beach under a clear blue sky.",
      image: "https://picsum.photos/id/1016/600/400"
    },
    {
      userId: 5,
      id: 5,
      title: "Mountain Adventure",
      body: "Hiking up the rocky terrain with a breathtaking view at the top.",
      image: "https://picsum.photos/id/1020/600/400"
    },
    {
      userId: 6,
      id: 6,
      title: "Vintage Car Ride",
      body: "Cruising the coastal road in a classic vintage car.",
      image: "https://picsum.photos/id/1012/600/400"
    },
    {
      userId: 7,
      id: 7,
      title: "Starry Night",
      body: "A peaceful campsite under a sky full of stars.",
      image: "https://picsum.photos/id/1008/600/400"
    },
    {
      userId: 8,
      id: 8,
      title: "Countryside House",
      body: "A cozy wooden house nestled in the green fields.",
      image: "https://picsum.photos/id/1024/600/400"
    },
    {
      userId: 9,
      id: 9,
      title: "Desert Journey",
      body: "Camels traveling across golden sand dunes.",
      image: "https://picsum.photos/id/1002/600/400"
    },
    {
      userId: 10,
      id: 10,
      title: "Snowy Escape",
      body: "A quiet cabin surrounded by snowy pine trees.",
      image: "https://picsum.photos/id/1003/600/400"
    },
    {
      userId: 11,
      id: 11,
      title: "Lake Reflections",
      body: "A still lake reflecting the beauty of the trees and sky.",
      image: "https://picsum.photos/id/1010/600/400"
    },
    {
      userId: 12,
      id: 12,
      title: "Tulip Field",
      body: "Vibrant tulips blooming in rows in springtime.",
      image: "https://picsum.photos/id/1025/600/400"
    },
    {
      userId: 13,
      id: 13,
      title: "Foggy Forest",
      body: "Tall trees wrapped in morning fog and mystery.",
      image: "https://picsum.photos/id/1035/600/400"
    },
    {
      userId: 14,
      id: 14,
      title: "River Bridge",
      body: "An old stone bridge crossing a calm flowing river.",
      image: "https://picsum.photos/id/1021/600/400"
    },
    {
      userId: 15,
      id: 15,
      title: "Coastal Cliffs",
      body: "Steep cliffs meeting the crashing waves below.",
      image: "https://picsum.photos/id/1023/600/400"
    }
  ];
  constructor() { }
  
    fetchData():Array<dataObjects>
    {
      return this.postArr
    }


    createPost(newPost:dataObjects){

      this.postArr.push(newPost)
    }

  }
    
  





   

