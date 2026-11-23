# Task 2 – React Frontend Integration

A React frontend for the Task 1 Express.js + MongoDB Products CRUD API.

## Features
- Product dashboard with product count, inventory value, and total units
- List products and delete products
- Add products with controlled form inputs and validation
- View a product by its MongoDB ID and edit its details
- React Router navigation
- Axios API service layer
- Loading, success, and error states

## Requirements
- Node.js and npm
- Task 1 backend running at `http://localhost:3000`
- MongoDB running and connected through the Task 1 backend

## Run the application
1. Start your Task 1 backend in its own terminal:
   ```bash
   cd path/to/task-1-crud-api
   npm start
   ```
2. In another terminal, open this frontend folder:
   ```bash
   cd task-2-react-frontend
   npm install
   npm start
   ```
3. The React app opens at `http://localhost:3000` by default. If CRA reports that port 3000 is already in use by the backend, type `Y` to run the frontend on the next available port (usually `http://localhost:3001`).

The `proxy` setting in `package.json` forwards relative `/products` API requests to the Task 1 backend at `http://localhost:3000`. This avoids needing CORS configuration during local development.

## API contract used
The frontend expects the Task 1 API routes:
- `GET /products` → `{ "count": number, "products": [] }`
- `POST /products` → `{ "message": string, "product": {} }`
- `GET /products/:id` → `{ "product": {} }`
- `PUT /products/:id` → `{ "message": string, "product": {} }`
- `DELETE /products/:id` → `{ "message": string, "product": {} }`

Product fields: `name`, `description`, `price`, and `quantity`.

## Test checklist
- [ ] Existing products appear on the dashboard
- [ ] Add a product and verify it appears
- [ ] Open a product and verify its details
- [ ] Edit the product and verify changes persist after refresh
- [ ] Delete a product and verify it disappears
- [ ] Try empty/negative form values
- [ ] Open a product URL directly in the browser

## Build for production
```bash
npm run build
```

## Notes
This project follows the assignment's Create React App, Axios, React Hooks, and React Router requirements. Do not commit `node_modules`, `build`, or secret `.env` files.
