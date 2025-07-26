import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: {
    average: number;
    count: number;
  };
  stock: number;
  brand: string;
  category: string;
  tags: string[];
  specifications: {
    key: string;
    value: string;
  }[];
  images: string[];
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 101,
      title: 'Samsung Galaxy S22 Ultra',
      description: '6.8" AMOLED Display, 108MP Camera, 5000mAh Battery',
      price: 99999,
      discountPercentage: 10,
      rating: {
        average: 4.6,
        count: 1523
      },
      stock: 34,
      brand: 'Samsung',
      category: 'Smartphones',
      tags: ['Android', 'Flagship', '5G', 'Stylus'],
      specifications: [
        { key: 'Processor', value: 'Snapdragon 8 Gen 1' },
        { key: 'RAM', value: '12GB' },
        { key: 'Storage', value: '256GB' },
        { key: 'Battery', value: '5000mAh' }
      ],
      images: [
        'https://images.unsplash.com/photo-1644501635454-bb6be8e42e6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1591531110744-49eacf536ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUzfHx8ZW58MHx8fHx8'
      ],
      createdAt: '2025-07-01T10:00:00Z',
      updatedAt: '2025-07-25T16:30:00Z'
    },
    {
      id: 102,
      title: 'Apple MacBook Pro 14"',
      description: 'M2 Pro chip, 16GB RAM, 1TB SSD, macOS Ventura',
      price: 219999,
      discountPercentage: 5,
      rating: {
        average: 4.8,
        count: 1043
      },
      stock: 12,
      brand: 'Apple',
      category: 'Laptops',
      tags: ['MacOS', 'M2', 'Professional', 'Retina'],
      specifications: [
        { key: 'Processor', value: 'Apple M2 Pro' },
        { key: 'Display', value: '14.2" Retina Display' },
        { key: 'RAM', value: '16GB Unified Memory' },
        { key: 'Storage', value: '1TB SSD' }
      ],
      images: [
        'https://images.unsplash.com/photo-1514826786317-59744fe2a548?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1599479235918-10abd224c709?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      createdAt: '2025-06-15T12:00:00Z',
      updatedAt: '2025-07-24T09:45:00Z'
    },
    {
      id: 103,
      title: 'Sony WH-1000XM5 Headphones',
      description: 'Industry leading noise cancellation, 30hr battery life, wireless',
      price: 29999,
      discountPercentage: 15,
      rating: {
        average: 4.7,
        count: 876
      },
      stock: 58,
      brand: 'Sony',
      category: 'Audio',
      tags: ['Bluetooth', 'Noise Cancelling', 'Wireless', 'Over-Ear'],
      specifications: [
        { key: 'Battery Life', value: '30 hours' },
        { key: 'Noise Cancelling', value: 'Yes' },
        { key: 'Weight', value: '250g' }
      ],
      images: [
        'https://plus.unsplash.com/premium_photo-1679913796054-fc4e44f35b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8',
        'https://plus.unsplash.com/premium_photo-1679913792954-6a5a93ae4cff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'
      ],
      createdAt: '2025-07-10T14:30:00Z',
      updatedAt: '2025-07-25T10:20:00Z'
    },

    {
  id: 104,
  title: 'Fitbit Charge 6 Fitness Tracker',
  description: 'Heart rate monitor, GPS, sleep tracking & 7-day battery',
  price: 12999,
  discountPercentage: 20,
  rating: {
    average: 4.4,
    count: 1129
  },
  stock: 45,
  brand: 'Fitbit',
  category: 'Wearables',
  tags: ['Fitness', 'Smartwatch', 'Tracker', 'Health'],
  specifications: [
    { key: 'Battery Life', value: '7 Days' },
    { key: 'Water Resistant', value: 'Up to 50m' },
    { key: 'Heart Rate Monitor', value: 'Yes' },
    { key: 'Display', value: 'AMOLED Touchscreen' }
  ],
  images: [
    'https://images.unsplash.com/photo-1434494817513-cc112a976e36?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1575054092299-4a300e7a2511?q=80&w=602&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
  createdAt: '2025-07-18T11:15:00Z',
  updatedAt: '2025-07-25T18:00:00Z'
},
{
  id: 105,
  title: 'Dyson V11 Absolute Pro Vacuum Cleaner',
  description: 'Cordless, powerful suction with LCD screen & HEPA filter',
  price: 54999,
  discountPercentage: 12,
  rating: {
    average: 4.5,
    count: 684
  },
  stock: 21,
  brand: 'Dyson',
  category: 'Home Appliances',
  tags: ['Cordless', 'Vacuum', 'HEPA', 'Powerful'],
  specifications: [
    { key: 'Run Time', value: '60 minutes' },
    { key: 'Suction Power', value: '185 AW' },
    { key: 'Weight', value: '3 kg' },
    { key: 'Filter Type', value: 'HEPA' }
  ],
  images: [
    'https://c8.alamy.com/comp/PHT7HG/young-man-vacuum-cleaning-his-apartment-PHT7HG.jpg',
    'https://plus.unsplash.com/premium_photo-1663099604191-ef16e480d5f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
  createdAt: '2025-07-16T08:40:00Z',
  updatedAt: '2025-07-25T13:00:00Z'
},
{
  id: 106,
  title: 'Canon EOS R10 Mirrorless Camera',
  description: '24.2MP APS-C sensor, 4K video, Dual Pixel AF II',
  price: 84999,
  discountPercentage: 7,
  rating: {
    average: 4.9,
    count: 437
  },
  stock: 10,
  brand: 'Canon',
  category: 'Cameras',
  tags: ['Mirrorless', 'Photography', '4K', 'Professional'],
  specifications: [
    { key: 'Sensor', value: 'APS-C CMOS' },
    { key: 'Resolution', value: '24.2 MP' },
    { key: 'Video', value: '4K 60fps' },
    { key: 'Connectivity', value: 'Wi-Fi, Bluetooth' }
  ],
  images: [
    'https://images.unsplash.com/photo-1593449651424-adb56e5001aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxDYW5vbiUyMEVPUyUyMFIxMCUyME1pcnJvcmxlc3MlMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1619401952369-c5bdeb8f0185?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxDYW5vbiUyMEVPUyUyMFIxMCUyME1pcnJvcmxlc3MlMjBDYW1lcmF8ZW58MHx8MHx8fDA%3D'
  ],
  createdAt: '2025-07-17T09:10:00Z',
  updatedAt: '2025-07-25T14:15:00Z'
},

{
  id: 107,
  title: 'U.S. Polo Assn. Men Checked Casual Shirt',
  description: 'Full-sleeve cotton shirt with classic fit and soft brushed fabric',
  price: 1899,
  discountPercentage: 35,
  rating: {
    average: 4.4,
    count: 978
  },
  stock: 64,
  brand: 'U.S. Polo Assn.',
  category: 'Fashion',
  tags: ['Shirt', 'Checked', 'Men', 'Casual', 'Cotton'],
  specifications: [
    { key: 'Material', value: '100% Cotton' },
    { key: 'Sleeve', value: 'Full Sleeve' },
    { key: 'Pattern', value: 'Checked' },
    { key: 'Fit', value: 'Regular Fit' },
    { key: 'Color', value: 'Navy Blue' }
  ],
  images: [
    'https://5.imimg.com/data5/SELLER/Default/2022/11/FI/VT/DZ/24199444/us-polo-mens-formal-shirts-500x500.jpeg',
    'https://pictures-ghana.jijistatic.net/41141694_NjIwLTYyMC05NjI1NjdkNjFl.webp'
  ],
  createdAt: '2025-07-10T10:00:00Z',
  updatedAt: '2025-07-26T09:30:00Z'
},

{
  id: 108,
  title: 'Prestige Omega Non-Stick Fry Pan 24cm',
  description: 'Durable 3-layer non-stick coating, compatible with gas stoves',
  price: 799,
  discountPercentage: 25,
  rating: {
    average: 4.5,
    count: 512
  },
  stock: 100,
  brand: 'Prestige',
  category: 'Kitchen Appliances',
  tags: ['Cookware', 'Non-stick', 'Kitchen', 'Pan'],
  specifications: [
    { key: 'Material', value: 'Aluminium' },
    { key: 'Diameter', value: '24 cm' },
    { key: 'Induction Safe', value: 'No' },
    { key: 'Lid Included', value: 'No' }
  ],
  images: [
    'https://5.imimg.com/data5/JX/SH/GM/SELLER-27792567/prestige-omega-deluxe-granite-pan-500x500.jpg',
    'https://neverowned.in/cdn/shop/files/original-imaguzj8wfn7gbqg_800x.webp?v=1704721223'
  ],
  createdAt: '2025-07-01T14:00:00Z',
  updatedAt: '2025-07-26T12:00:00Z'
},
{
  id: 109,
  title: 'Wooden Study Table with Drawers',
  description: 'Premium engineered wood desk with side drawers and smooth finish',
  price: 4999,
  discountPercentage: 18,
  rating: {
    average: 4.2,
    count: 310
  },
  stock: 30,
  brand: 'Wakefit',
  category: 'Furniture',
  tags: ['Home', 'Table', 'Study', 'Wood'],
  specifications: [
    { key: 'Material', value: 'Engineered Wood' },
    { key: 'Color', value: 'Walnut' },
    { key: 'Storage', value: '3 Drawers' },
    { key: 'Dimensions', value: '100 x 60 x 75 cm' }
  ],
  images: [
    'https://i.pinimg.com/1200x/87/e0/db/87e0db864e768fae8b7e01f92c708b07.jpg',
    'https://i.pinimg.com/1200x/49/b4/21/49b421c3900909b430e35d21805ebcb7.jpg'
  ],
  createdAt: '2025-07-12T10:10:00Z',
  updatedAt: '2025-07-26T14:00:00Z'
},
{
  id: 110,
  title: 'Ajmal Aurum Concentrated Perfume (Attar) for Men',
  description: 'A luxurious, long-lasting attar with woody and musky fragrance notes, perfect for daily wear and special occasions',
  price: 899,
  discountPercentage: 28,
  rating: {
    average: 4.5,
    count: 670
  },
  stock: 150,
  brand: 'Ajmal',
  category: 'Fragrance',
  tags: ['Attar', 'Perfume', 'Men', 'Long Lasting', 'Luxury'],
  specifications: [
    { key: 'Type', value: 'Concentrated Perfume (Attar)' },
    { key: 'Volume', value: '12 ml' },
    { key: 'Fragrance Family', value: 'Woody & Musky' },
    { key: 'Alcohol-Free', value: 'Yes' }
  ],
  images: [
    'https://i.pinimg.com/736x/5d/65/f7/5d65f755282b81f4a4fb0b4814fe19c1.jpg',
    'https://i.pinimg.com/736x/de/18/a7/de18a7a8704907b79465031dcf01d43f.jpg'
  ],
  createdAt: '2025-07-05T16:00:00Z',
  updatedAt: '2025-07-26T15:30:00Z'
},

{
  id: 111,
  title: 'Wings of Fire: The Abdul Kalam Collection',
  description: 'A must-read motivational box set featuring autobiographical and inspirational works by Dr. A.P.J. Abdul Kalam',
  price: 1599,
  discountPercentage: 30,
  rating: {
    average: 4.8,
    count: 982
  },
  stock: 25,
  brand: 'Penguin Books',
  category: 'Books',
  tags: ['Biography', 'Motivation', 'Inspiration', 'Abdul Kalam'],
  specifications: [
    { key: 'Language', value: 'English' },
    { key: 'Binding', value: 'Paperback' },
    { key: 'Author', value: 'Dr. A.P.J. Abdul Kalam' },
    { key: 'Books Included', value: 'Wings of Fire, Ignited Minds, India 2020, My Journey' }
  ],
  images: [
    'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop',
    'https://i.pinimg.com/736x/55/20/58/552058692705dece97d5b18e2be4f4de.jpg'
  ],
  createdAt: '2025-07-15T09:00:00Z',
  updatedAt: '2025-07-26T17:00:00Z'
},

{
  id: 112,
  title: 'Remote Control Stunt Car 360° Flip & Spin',
  description: 'High-speed 4WD RC stunt car with 360° spinning and flipping action. Durable build with cool LED lights for kids age 6+',
  price: 1499,
  discountPercentage: 26,
  rating: {
    average: 4.7,
    count: 840
  },
  stock: 85,
  brand: 'ToyKart',
  category: 'Toys',
  tags: ['Remote Control', 'RC Car', 'Stunt Car', 'Kids', 'Rechargeable'],
  specifications: [
    { key: 'Age Group', value: '6 years and up' },
    { key: 'Battery', value: 'Rechargeable (included)' },
    { key: 'Material', value: 'ABS Plastic' },
    { key: 'Features', value: '360° Spin, LED Lights, Dual Sides Drive' }
  ],
  images: [
    'https://i.pinimg.com/736x/5e/80/9b/5e809b218b4a61c5fa1370c60d3a295f.jpg',
    'https://i.pinimg.com/1200x/85/69/56/856956fa13445ae16e733f25d329e851.jpg'
  ],
  createdAt: '2025-07-20T11:00:00Z',
  updatedAt: '2025-07-26T18:00:00Z'
}


  ];

  constructor() {}

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
