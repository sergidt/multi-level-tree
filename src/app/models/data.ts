import { TreeNode } from "./model";

export const TREE_DATA: TreeNode[] = [
  {
    id: '1',
    name: 'Electronics',
    isCategory: true,
    description: 'Electronic devices and accessories',
    iconClass: 'electronics',
    children: [
      {
        id: '1-1',
        name: 'Computers',
        isCategory: true,
        description: 'Desktop and laptop computers',
        iconClass: 'computers',
        children: [
          {
            id: '1-1-1',
            name: 'Laptops',
            isCategory: true,
            description: 'Portable computers',
            iconClass: 'laptop',
            children: [
              {
                id: '1-1-1-1',
                name: 'MacBook Pro',
                isCategory: false,
                description: 'Apple MacBook Pro with M2 chip',
                metadata: {
                  price: 1999,
                  specs: '16GB RAM, 512GB SSD',
                  rating: 4.8
                },
                iconClass: 'apple'
              },
              {
                id: '1-1-1-2',
                name: 'Dell XPS',
                isCategory: false,
                description: 'Dell XPS 15 with Intel i7',
                metadata: {
                  price: 1799,
                  specs: '32GB RAM, 1TB SSD',
                  rating: 4.7
                },
                iconClass: 'windows'
              }
            ]
          },
          {
            id: '1-1-2',
            name: 'Desktops',
            isCategory: true,
            description: 'Desktop computers',
            iconClass: 'desktop',
            children: [
              {
                id: '1-1-2-1',
                name: 'iMac',
                isCategory: false,
                description: 'Apple iMac with M1 chip',
                metadata: {
                  price: 1499,
                  specs: '8GB RAM, 256GB SSD',
                  rating: 4.6
                },
                iconClass: 'apple'
              }
            ]
          }
        ]
      },
      {
        id: '1-2',
        name: 'Smartphones',
        isCategory: true,
        description: 'Mobile phones and accessories',
        iconClass: 'smartphone',
        children: [
          {
            id: '1-2-1',
            name: 'iPhone 15',
            isCategory: false,
            description: 'Apple iPhone 15 Pro Max',
            metadata: {
              price: 1099,
              specs: 'A17 Bionic, 256GB',
              rating: 4.9
            },
            iconClass: 'apple'
          },
          {
            id: '1-2-2',
            name: 'Samsung Galaxy S24',
            isCategory: false,
            description: 'Samsung Galaxy S24 Ultra',
            metadata: {
              price: 1199,
              specs: 'Snapdragon 8 Gen 3, 512GB',
              rating: 4.8
            },
            iconClass: 'android'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Books',
    isCategory: true,
    description: 'Books and e-books',
    iconClass: 'books',
    children: [
      {
        id: '2-1',
        name: 'Fiction',
        isCategory: true,
        description: 'Fiction books',
        iconClass: 'fiction',
        children: [
          {
            id: '2-1-1',
            name: 'Science Fiction',
            isCategory: true,
            description: 'Science fiction books',
            iconClass: 'sci-fi',
            children: [
              {
                id: '2-1-1-1',
                name: 'Dune',
                isCategory: false,
                description: 'Novel by Frank Herbert',
                metadata: {
                  author: 'Frank Herbert',
                  year: 1965,
                  rating: 4.7
                },
                iconClass: 'book'
              }
            ]
          },
          {
            id: '2-1-2',
            name: 'Fantasy',
            isCategory: true,
            description: 'Fantasy books',
            iconClass: 'fantasy',
            children: [
              {
                id: '2-1-2-1',
                name: 'The Lord of the Rings',
                isCategory: false,
                description: 'Epic by J.R.R. Tolkien',
                metadata: {
                  author: 'J.R.R. Tolkien',
                  year: 1954,
                  rating: 4.9
                },
                iconClass: 'book'
              }
            ]
          }
        ]
      },
      {
        id: '2-2',
        name: 'Non-Fiction',
        isCategory: true,
        description: 'Non-fiction books',
        iconClass: 'non-fiction',
        children: [
          {
            id: '2-2-1',
            name: 'Science',
            isCategory: true,
            description: 'Science books',
            iconClass: 'science',
            children: [
              {
                id: '2-2-1-1',
                name: 'A Brief History of Time',
                isCategory: false,
                description: 'Book by Stephen Hawking',
                metadata: {
                  author: 'Stephen Hawking',
                  year: 1988,
                  rating: 4.8
                },
                iconClass: 'book'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Clothing',
    isCategory: true,
    description: 'Apparel and accessories',
    iconClass: 'clothing',
    children: [
      {
        id: '3-1',
        name: 'Men',
        isCategory: true,
        description: 'Men\'s clothing',
        iconClass: 'men',
        children: []
      },
      {
        id: '3-2',
        name: 'Women',
        isCategory: true,
        description: 'Women\'s clothing',
        iconClass: 'women',
        children: []
      }
    ]
  }
];