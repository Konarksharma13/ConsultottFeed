# ConsultOTT Feed

A React-based mini social feed built using the **JSONPlaceholder API**.  
Users can view posts, search, paginate, see author info, view comments, and create new posts.
<br>
[ConsultOTT Feed Deployed Link](https://consultottfeed.netlify.app/)  

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```
   git clone https://github.com/Konarksharma13/ConsultottFeed.git
   cd consultott-feed
   ```
2. **Install dependencies**
    ```
   npm install
   ```
3. **Start the development server**
   ```
   npm run dev
   ```

App runs on: http://localhost:5173

## 🧠 Tech Stack Used

- **React 18 (Vite)**
- **React Router DOM v6**
- **Axios** — for API requests  
- **Tailwind CSS** — for styling  
- **JSONPlaceholder API** — for mock REST data  

---

## 🧩 Features Overview

| Feature | Description |
|----------|-------------|
| **Posts Feed** | Fetches posts from JSONPlaceholder and displays them in a paginated grid |
| **Author Info** | Shows author name and email fetched from `/users` |
| **Post Details Page** | Displays full post content and comments from `/comments?postId=:id` |
| **Search** | Filters posts by title dynamically |
| **Pagination** | Shows 10 posts per page with Next/Prev navigation |
| **Create Post** | Allows adding a new post (simulated via `POST /posts`) |
| **Persistent Data** | Stores created posts in `localStorage` |
| **Responsive UI** | Works seamlessly on desktop and mobile |
| **Error & Loader Components** | Handles loading and network failures gracefully |

---

## 🧰 Folder Structure
src/
```
 ├─ components/
 │   ├─ CommentsCard.jsx
 │   ├─ Navbar.jsx
 │   ├─ Loader.jsx
 │   ├─ Error.jsx
 │   └─ PostCard.jsx
 ├─ pages/
 │   ├─ PostsPage.jsx
 │   ├─ PostDetails.jsx
 │   └─ CreatePost.jsx
 ├─ services/
 │   └─ api.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
```

📸 Screenshots
# Posts
<img width="1701" height="987" alt="posts" src="https://github.com/user-attachments/assets/c710543e-1cf2-4572-9670-8a01bced393a" />

# Create Feed
<img width="1707" height="986" alt="create-feed" src="https://github.com/user-attachments/assets/45ff0600-d8b9-4b35-b87a-c600a8edcaf2" />



