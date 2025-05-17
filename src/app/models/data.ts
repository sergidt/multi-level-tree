import { TreeNode } from "./model";

export const TREE_DATA: TreeNode[] = [
  {
    id: '0',
    name: 'HQ',
    description: 'Headquarter',
    icon: '🏢',
    children: [{
      id: '1',
      name: 'Barcelona',
      description: 'Barcelona zone',
      icon: '🏪',
      children: [
        {
          id: '1-1',
          name: 'Computers',
          description: 'Desktop and laptop computers',
          icon: 'computers',
          children: [
            {
              id: '1-1-1',
              name: 'Laptops',
              description: 'Portable computers',
              icon: 'laptop',
              children: [
                {
                  id: '1-1-1-1',
                  name: 'MacBook Pro',
                  description: 'Apple MacBook Pro with M2 chip',
                  metadata: {
                    price: 1999,
                    specs: '16GB RAM, 512GB SSD',
                    rating: 4.8
                  },
                  icon: 'apple'
                },
                {
                  id: '1-1-1-2',
                  name: 'Dell XPS',
                  description: 'Dell XPS 15 with Intel i7',
                  metadata: {
                    price: 1799,
                    specs: '32GB RAM, 1TB SSD',
                    rating: 4.7
                  },
                  icon: 'windows'
                }
              ]
            },
            {
              id: '1-1-2',
              name: 'Desktops',
              description: 'Desktop computers',
              icon: 'desktop',
              children: [
                {
                  id: '1-1-2-1',
                  name: 'iMac',
                  description: 'Apple iMac with M1 chip',
                  metadata: {
                    price: 1499,
                    specs: '8GB RAM, 256GB SSD',
                    rating: 4.6
                  },
                  icon: 'apple'
                }
              ]
            }
          ]
        },
        {
          id: '1-2',
          name: 'Smartphones',
          description: 'Mobile phones and accessories',
          icon: 'smartphone',
          children: [
            {
              id: '1-2-1',
              name: 'iPhone 15',
              description: 'Apple iPhone 15 Pro Max',
              metadata: {
                price: 1099,
                specs: 'A17 Bionic, 256GB',
                rating: 4.9
              },
              icon: 'apple'
            },
            {
              id: '1-2-2',
              name: 'Samsung Galaxy S24',
              description: 'Samsung Galaxy S24 Ultra',
              metadata: {
                price: 1199,
                specs: 'Snapdragon 8 Gen 3, 512GB',
                rating: 4.8
              },
              icon: 'android'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Bilbao',
      description: 'Bilbao zone',
      icon: '🏪',
      children: [
        {
          id: '2-1',
          name: 'Fiction',
          description: 'Fiction books',
          icon: 'fiction',
          children: [
            {
              id: '2-1-1',
              name: 'Science Fiction',
              description: 'Science fiction books',
              icon: 'sci-fi',
              children: [
                {
                  id: '2-1-1-1',
                  name: 'Dune',
                  description: 'Novel by Frank Herbert',
                  metadata: {
                    author: 'Frank Herbert',
                    year: 1965,
                    rating: 4.7
                  },
                  icon: 'book'
                }
              ]
            },
            {
              id: '2-1-2',
              name: 'Fantasy',
              description: 'Fantasy books',
              icon: 'fantasy',
              children: [
                {
                  id: '2-1-2-1',
                  name: 'The Lord of the Rings',
                  description: 'Epic by J.R.R. Tolkien',
                  metadata: {
                    author: 'J.R.R. Tolkien',
                    year: 1954,
                    rating: 4.9
                  },
                  icon: 'book'
                }
              ]
            }
          ]
        },
        {
          id: '2-2',
          name: 'Non-Fiction',
          description: 'Non-fiction books',
          icon: 'non-fiction',
          children: [
            {
              id: '2-2-1',
              name: 'Science',
              description: 'Science books',
              icon: 'science',
              children: [
                {
                  id: '2-2-1-1',
                  name: 'A Brief History of Time',
                  description: 'Book by Stephen Hawking',
                  metadata: {
                    author: 'Stephen Hawking',
                    year: 1988,
                    rating: 4.8
                  },
                  icon: 'book'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: '3',
      name: 'Andalucia',
      description: 'Andalucia zone',
      icon: '🏪',
      children: [
        {
          id: '3-1',
          name: 'Men',
          description: 'Men\'s clothing',
          icon: 'men',
          children: []
        },
        {
          id: '3-2',
          name: 'Women',
          description: 'Women\'s clothing',
          icon: 'women',
          children: []
        }
      ]
    }]
  }
];