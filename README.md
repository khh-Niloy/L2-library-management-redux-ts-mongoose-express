# 📚 Library Management System - Frontend

## Project Overview

This project is the **frontend client** for a Minimal Library Management System built with **React**, **TypeScript**, and **Redux Toolkit Query (RTK Query)**.  
It allows users to browse books, perform CRUD operations, borrow books, and view borrowing summaries—all without authentication.

The frontend consumes RESTful API endpoints for backend interaction, focusing on clean UI design, type safety, and responsive user experience.

---

## Features

- **Book Management:**  
  - View all books in a sortable and paginated table.  
  - Create, update, and delete books via forms and confirmation dialogs.  
  - Automatically mark books unavailable when copies reach zero.

- **Borrowing Books:**  
  - Borrow books through a simple form selecting quantity and due date.  
  - Validate borrowing quantity against available copies.

- **Borrow Summary:**  
  - View aggregated data of total borrowed quantities per book.

- **UI/UX:**  
  - Clean, minimalist, and responsive design using Tailwind CSS.  
  - Toast notifications for feedback on user actions.  
  - Intuitive navigation with a navbar and footer.

- **Type-Safe Forms:**  
  - Strongly typed forms with React Hook Form and TypeScript integration.

---

## Tech Stack

| Layer           | Technology                |
|-----------------|---------------------------|
| Frontend        | React + TypeScript        |
| State Management| Redux Toolkit + RTK Query |
| Styling         | Tailwind CSS              |
| API Client      | RTK Query                 |
| Forms           | React Hook Form           |
| Notifications   | react-hot-toast           |
| Routing         | React Router DOM          |


<br/>
> Developed by Hasib Hossain Niloy <br/>
- email: khhniloy0@gmail.com <br/>
- portfolio: https://niloy-portfolio.vercel.app/
