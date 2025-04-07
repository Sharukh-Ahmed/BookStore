# BookStore MERN Stack Project

A full-stack web application for managing books using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

### Backend
- **Node.js & Express.js Server**
  - RESTful API endpoints for CRUD operations
  - MongoDB connection using Mongoose
  - CORS configuration for frontend access
  - Request body parsing middleware
  - Error handling middleware

- **MongoDB Database**
  - Mongoose Schema for Book model
  - Fields: title, author, category
  - Timestamps for created and updated dates

- **API Endpoints**
  - GET `/books` - List all books
  - GET `/books/:id` - Get book details
  - POST `/books` - Create new book
  - PUT `/books/:id` - Update book
  - DELETE `/books/:id` - Delete book

### Frontend
- **React.js with Vite**
  - Component-based architecture
  - React Router for navigation
  - Axios for API requests
  - Context API for state management

- **UI Features**
  - Responsive design using Tailwind CSS
  - Book cards and table views
  - Loading spinners
  - Modal windows for book details
  - Form validation
  - Toast notifications

- **Components**
  - BookCard - Display book information
  - BookModal - Show detailed book information
  - BookTable - Tabular view of books
  - BackButton - Navigation component
  - Spinner - Loading animation

- **Pages**
  - Home - Book listing
  - CreateBook - Add new book
  - ShowBook - View book details
  - EditBook - Update book information
  - DeleteBook - Confirm deletion

### Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- Tailwind CSS
- React Router DOM
- Axios
- React Icons
- CORS

## License
MIT License

## Author
Sharukh-Ahmed