# Product Shop

A full-stack product management application built with React, Node.js, Express, and MongoDB.

## Quick Start

### Prerequisites

- Node.js (>= 14.0.0)
- MongoDB Atlas account

### Installation

```bash
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
mongo_uri=your_mongodb_connection_string
NODE_ENV=development
```

## Project Structure

```text
├── backend/          # Express API server
├── frontend/         # React application
└── package.json      # Root dependencies
```

## Deployment

- Backend serves frontend static files in production
- Set `NODE_ENV=production` and `mongo_uri` in Render environment variables
- MongoDB Atlas network access should allow all IPs (`0.0.0.0/0`)

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
