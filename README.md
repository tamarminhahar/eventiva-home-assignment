# 🎵 Music Artists Search App

A production-ready React application for searching music artists and exploring their details, built with a strong emphasis on clean architecture, performance, and user experience.

---

## 🚀 Project Overview

This application enables users to search for music artists and instantly view rich, structured data including biography and top songs.

Beyond the basic requirements, this project focuses on:

- Scalable and maintainable architecture
- Efficient data fetching and caching
- Clear separation of concerns
- High-quality user experience (UX)

---

## ✨ Features

### 🔍 Search Page

- Search artists by name using a simple and intuitive form
- Fetch data from TheAudioDB API (V1)
- Display results as responsive cards:
  - Artist name
  - Artist image

### 🎤 Artist Details Page

- Navigate to a dedicated details page on card click
- Display:
  - Artist name
  - Artist image
  - Artist biography
  - Top 3 songs:
    - Song name
    - Album
    - Duration

### ⚡ Loading & Error Handling

- Loading indicators during API calls
- Graceful handling of:
  - Empty results
  - API errors

- User-friendly feedback states

---

## 🧠 Technical Highlights

### 🏗️ Clean Architecture

The project is structured by domain and responsibility:

- Separation between UI, logic, and data layers
- Feature-based folder structure
- Reusable shared components

This approach ensures scalability, readability, and easier maintenance.

---

### 🔄 Data Fetching Strategy

- Built with TanStack Query (React Query)
- Automatic caching and deduplication
- Background refetching
- Built-in error and loading state management

---

### 🧭 Routing

- Implemented using TanStack Router
- Type-safe routing
- Dynamic navigation based on artist selection

---

### 🎯 Type Safety

- Fully typed with TypeScript
- Strong typing for API responses
- Reduced runtime errors and improved developer experience

---

### 🎨 UI & Responsiveness

- Styled with Tailwind CSS
- Clean and modern design
- Fully responsive (mobile-friendly)

---

## 🛠️ Tech Stack

- React
- TanStack Router
- TanStack Query
- TypeScript
- Tailwind CSS

---

## 📡 API

Data is fetched from:

TheAudioDB API (V1)
[https://www.theaudiodb.com/](https://www.theaudiodb.com/)

---

## 📦 Installation & Running

```bash
# Clone the repository
git clone https://github.com/tamarminhahar/eventiva-home-assignment.git

# Navigate into the project
cd eventiva-home-assignment

# Install dependencies
npm install

# Start development server
npm run dev
```
Create a .env file based on .env.example and set the API base URL.

```
App will run at:
http://localhost:<PORT>
