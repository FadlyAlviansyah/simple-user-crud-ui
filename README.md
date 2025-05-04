# User Management Frontend

A simple frontend for managing users using plain HTML, CSS, and JavaScript. This app connects to a RESTful Laravel API for performing CRUD operations (Create, Read, Update, Delete) on user data.

## 📌 Features

- List all users in a table
- Create new users
- Edit existing users
- Delete users
- Minimal styling with pure CSS
- No external dependencies

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/user-management-frontend.git
cd user-management-frontend
```

### 2. Open in Browser
Just open `index.html` in your browser (no build tools required).

### 3. Update API URL
Make sure to update the API endpoint in `app.js`:
```javascript
const apiUrl = 'http://localhost/api/users'; // Adjust based on your Laravel backend
```

## 📁 Project Structure

```
.
├── index.html      # Main HTML file
├── app.js          # JavaScript logic (CRUD operations)
└── README.md       # Project documentation
```

## 🛠 Backend API Spec

Ensure your Laravel API supports the following routes:

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| GET    | /api/users         | Get all users         |
| POST   | /api/users         | Create a new user     |
| PUT    | /api/users/{id}    | Update a user         |
| DELETE | /api/users/{id}    | Delete a user         |

## 📸 Screenshot

![screenshot](https://dummyimage.com/800x400/ddd/000&text=User+Management+UI)

## 📃 License

This project is open-source and free to use.
