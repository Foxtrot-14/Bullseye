# Bullseye

This is a web application that allows users to create and manage their own watchlists of stock symbols. Users can view the latest stock values of the symbols on their watchlist through a dashboard. The platform can handle multiple users concurrently, each having different watchlists. It uses a database to store user and watchlist data and a secure authentication mechanism for user authentication.

## Features

- **User authentication:** Users can sign up, log in, and log out securely.
- **Watchlist management:** Users can create, edit, and delete their watchlists.
- **Dashboard:** Users can view the latest stock values of symbols on their watchlist.
- **Concurrent user support:** The platform can handle multiple users concurrently.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Python Django
- **Database:** SQLite3
- **API:** Alpha Vantage (https://www.alphavantage.co)
- **Authentication:** JSON Web Tokens (JWT)
- **HTTP Secure:** HTTPS

## Front-end Setup

1. **Clone the repository:**

```
https://github.com/Foxtrot-14/Bullseye.git
```

2. **Navigate to the React Project:**

```
cd Bullseye/UI
```

3. **Install Dependencies:**

```
npm install
```

4. **Run React App:**

```
npm run dev
```

## Back-end Setup

1. **Navigate to Django Project:**

```
cd Bullseye/backend
```
