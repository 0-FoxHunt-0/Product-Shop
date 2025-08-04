# Backend API

Express.js API server for Product Shop application.

## Environment Variables

Set these in Render deployment:

- `mongo_uri` - MongoDB connection string
- `NODE_ENV` - Set to "production"
- `PORT` - Auto-set by Render

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## Local Development

```bash
npm install
npm run dev
```

## Troubleshooting

### 502 Bad Gateway

1. Check `mongo_uri` environment variable
2. Verify MongoDB Atlas network access allows all IPs (`0.0.0.0/0`)
3. Check Render logs for startup errors

### Common Issues

- Missing dependencies in `package.json`
- Incorrect MongoDB connection string
- CORS configuration issues
