# Product Shop

A full-stack web application for managing products with a React frontend and Node.js/Express backend.

## 🚀 Features

- **Product Management**: Create, read, update, and delete products
- **Modern UI**: Built with React and Chakra UI for a beautiful user experience
- **RESTful API**: Backend API built with Express.js and MongoDB
- **State Management**: Uses Zustand for efficient state management
- **Responsive Design**: Mobile-friendly interface

## 📁 Project Structure

```
Product Shop/
├── backend/          # Node.js/Express API server
│   ├── config/       # Database configuration
│   ├── controllers/  # API route controllers
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API route definitions
│   └── index.js      # Server entry point
├── frontend/         # React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   └── store/       # Zustand state management
│   └── package.json
└── package.json      # Root package.json for scripts
```

## 🛠️ Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Chakra UI** - Component library
- **Zustand** - State management
- **React Router** - Client-side routing
- **Framer Motion** - Animation library

## 🚀 Quick Start

### Prerequisites

- Node.js (>= 14.0.0)
- MongoDB installed and running
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd product-shop
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   npm install --prefix frontend
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   MONGODB_URI=mongodb://localhost:27017/product-shop
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the application**

   ```bash
   # Development mode (runs both frontend and backend)
   npm run dev

   # Production build
   npm run build
   npm start
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build frontend for production
- `npm start` - Start production server
- `npm test` - Run tests (placeholder)

## 🌐 API Endpoints

The backend provides RESTful API endpoints for product management:

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `GET /api/products/:id` - Get a specific product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## 🎨 Frontend Features

- **Home Page**: Display all products in a grid layout
- **Create Page**: Add new products with form validation
- **Navigation**: Responsive navbar with routing
- **Product Cards**: Beautiful product display with images and details

## 🔧 Development

### Backend Development

- Server runs on port 5000 by default
- MongoDB connection with automatic reconnection
- CORS enabled for frontend communication
- JSON body parsing middleware

### Frontend Development

- Vite dev server with hot module replacement
- ESLint configuration for code quality
- Chakra UI theme customization
- Responsive design with mobile-first approach

## 📦 Deployment

The application is configured for production deployment with:

- Static file serving for the React build
- Environment-based configuration
- MongoDB Atlas support for cloud database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Built as a portfolio project demonstrating full-stack development skills.

## 🔧 Solution for Render.com Deployment

The error occurs because there's a mismatch between the environment variable names. Here's how to fix it:

### 1. **Fix the Database Configuration**

Update your `backend/config/db.js` file:

```javascript:backend/config/db.js
/**
 * Database configuration and connection setup
 * Handles MongoDB connection using Mongoose
 */

import mongoose from "mongoose";

/**
 * Connects to MongoDB database
 * Uses MONGODB_URI from environment variables
 * Exits process on connection failure
 */
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
```

### 2. **Set Environment Variables in Render.com**

In your Render.com dashboard:

1. Go to your service settings
2. Navigate to the "Environment" tab
3. Add these environment variables:

```env
<code_block_to_apply_changes_from>
```

### 3. **MongoDB Atlas Setup (if not already done)**

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Create a database user with password
4. Get your connection string
5. Replace the placeholder in the MONGODB_URI with your actual connection string

### 4. **Alternative: Add Fallback Configuration**

You can also make the database configuration more robust by adding a fallback:

```javascript:backend/config/db.js
/**
 * Database configuration and connection setup
 * Handles MongoDB connection using Mongoose
 */

import mongoose from "mongoose";

/**
 * Connects to MongoDB database
 * Uses MONGODB_URI from environment variables
 * Exits process on connection failure
 */
export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

    if (!mongoUri) {
      console.error("MongoDB connection string not found. Please set MONGODB_URI environment variable.");
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};
```

### 5. **Verify Your Render.com Configuration**

Make sure your Render.com service is configured correctly:

- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Root Directory**: Leave empty (or `/` if needed)

### 6. **Check Your package.json Scripts**

Ensure your root `package.json` has the correct scripts:

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon backend/index.js",
    "start": "cross-env NODE_ENV=production node backend/index.js",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
  }
}
```

### 7. **Test Locally First**

Before deploying, test your environment variables locally:

```bash
# Create a .env file with your MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/product-shop
PORT=5000
NODE_ENV=production
```

Then run:

```bash
npm run dev
```

## 🚨 Common Issues and Solutions

### Issue 1: Environment Variable Not Set

- **Solution**: Double-check that `MONGODB_URI` is set in Render.com environment variables

### Issue 2: MongoDB Atlas Network Access

- **Solution**: In MongoDB Atlas, go to Network Access and add `0.0.0.0/0` to allow all IPs (or your Render.com IP)

### Issue 3: Database User Permissions

- **Solution**: Ensure your MongoDB Atlas user has read/write permissions

### Issue 4: Connection String Format

- **Solution**: Make sure your connection string includes the database name:
  ```
  mongodb+srv://username:password@cluster.mongodb.net/product-shop
  ```

## 📄 Debugging Steps

1. **Check Render.com Logs**: Look for the exact error message
2. **Verify Environment Variables**: Use `console.log(process.env.MONGODB_URI)` temporarily
3. **Test Connection String**: Try connecting with MongoDB Compass or similar tool
4. **Check MongoDB Atlas**: Ensure cluster is running and accessible

After making these changes, redeploy your application on Render.com. The error should be resolved, and your application should connect to MongoDB successfully.
