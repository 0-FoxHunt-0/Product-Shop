# Backend API Server

A RESTful API server built with Node.js, Express, and MongoDB for the Product Shop application.

## 🏗️ Architecture

The backend follows a modular architecture with clear separation of concerns:

```
backend/
├── config/          # Database and configuration files
├── controllers/     # Business logic and request handlers
├── models/          # MongoDB schemas and models
├── routes/          # API route definitions
└── index.js         # Server entry point
```

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **dotenv** - Environment variable management
- **nodemon** - Development server with auto-restart

## 📦 Dependencies

### Production Dependencies

- `express` - Web framework
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables
- `cross-env` - Cross-platform environment variables

### Development Dependencies

- `nodemon` - Auto-restart development server

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 14.0.0)
- MongoDB installed and running locally
- npm or yarn package manager

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   MONGODB_URI=mongodb://localhost:27017/product-shop
   PORT=5000
   NODE_ENV=development
   ```

3. **Start the server**

   ```bash
   # Development mode with auto-restart
   npm run dev

   # Production mode
   npm start
   ```

## 🌐 API Endpoints

### Products API

All endpoints are prefixed with `/api/products`

| Method | Endpoint | Description        | Request Body           | Response          |
| ------ | -------- | ------------------ | ---------------------- | ----------------- |
| GET    | `/`      | Get all products   | -                      | Array of products |
| POST   | `/`      | Create new product | `{name, price, image}` | Created product   |
| GET    | `/:id`   | Get product by ID  | -                      | Single product    |
| PUT    | `/:id`   | Update product     | `{name, price, image}` | Updated product   |
| DELETE | `/:id`   | Delete product     | -                      | Success message   |

### Request/Response Examples

#### Create Product

```bash
POST /api/products
Content-Type: application/json

{
  "name": "Sample Product",
  "price": 29.99,
  "image": "https://example.com/image.jpg"
}
```

#### Get All Products

```bash
GET /api/products
```

Response:

```json
[
  {
    "_id": "60f7b3b3b3b3b3b3b3b3b3b",
    "name": "Sample Product",
    "price": 29.99,
    "image": "https://example.com/image.jpg",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

## 📊 Database Schema

### Product Model

```javascript
{
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  createdAt: Date,  // Auto-generated
  updatedAt: Date    // Auto-generated
}
```

## 🔧 Configuration

### Database Connection

- MongoDB connection with automatic reconnection
- Connection string configurable via environment variables
- Error handling for connection failures

### Server Configuration

- Port configurable via `PORT` environment variable
- JSON body parsing middleware
- CORS enabled for frontend communication
- Static file serving for production builds

## 🏃‍♂️ Development

### File Structure

- **`index.js`** - Server entry point and Express app setup
- **`config/db.js`** - MongoDB connection configuration
- **`models/product.model.js`** - Product schema definition
- **`controllers/product.controller.js`** - CRUD operations logic
- **`routes/product.route.js`** - API route definitions

### Development Workflow

1. **Start development server**

   ```bash
   npm run dev
   ```

2. **Server will run on** `http://localhost:5000`

3. **Auto-restart on file changes** (nodemon)

4. **API testing** - Use tools like Postman or curl

## 🧪 Testing

Currently, no automated tests are implemented. Consider adding:

- Unit tests for controllers
- Integration tests for API endpoints
- Database connection tests

## 🔒 Security Considerations

- Input validation (implement with libraries like Joi or express-validator)
- Rate limiting (implement with express-rate-limit)
- CORS configuration for production
- Environment variable protection
- MongoDB injection prevention (handled by Mongoose)

## 📦 Production Deployment

### Environment Variables

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/product-shop
PORT=5000
NODE_ENV=production
```

### Build Process

```bash
npm run build  # Builds frontend and installs dependencies
npm start      # Starts production server
```

### Static File Serving

In production mode, the server serves the React frontend build from `frontend/dist`.

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**

   - Check if MongoDB is running
   - Verify connection string in `.env`
   - Ensure network connectivity

2. **Port Already in Use**

   - Change `PORT` in `.env`
   - Kill process using the port

3. **Module Not Found**
   - Run `npm install`
   - Check Node.js version compatibility

## 📝 Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests (placeholder)

## 🤝 Contributing

1. Follow the existing code structure
2. Add proper error handling
3. Include input validation
4. Update API documentation
5. Test your changes thoroughly
