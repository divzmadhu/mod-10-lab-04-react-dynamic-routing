# Lab 4: Dynamic Routing in React

## Project Overview

This project demonstrates dynamic routing and authentication in a React application using React Router.

The application is a simple blog platform called **Beyond the Basics**, where users can explore blog posts, log in, and access protected pages.

## Features Implemented

### 1. Dynamic Routing

* Created a blog listing page at `/blog`.
* Implemented dynamic routes using `/blog/:slug` to display individual blog posts.
* Used `useParams()` to retrieve the post slug from the URL.
* Used the `find()` method to identify and display the matching blog post.
* Displayed a "Post not found" message for invalid blog post slugs.

### 2. Authentication Using Context API

* Created an `AuthContext` to manage authentication status.
* Implemented login and logout functionality.
* Used React Context to share authentication information across components.

### 3. Protected Routes

* Created a reusable `ProtectedRoute` component.
* Restricted access to individual blog posts and the Admin Dashboard.
* Redirected unauthenticated users to the Login page.

### 4. Conditional Navigation

* Used `NavLink` to navigate between application pages.
* Displayed navigation links based on authentication status:

  * Logged out: Explore | Login
  * Logged in: Explore | Admin | Logout

### 5. Admin Dashboard

* Created a protected Admin Dashboard page accessible only to authenticated users.

## Additional Improvements

Beyond the requirements of the lesson, I made a few improvements to create a more user-friendly application.

### 1. Controlled Blog Post Access

* Kept the Explore page publicly accessible so visitors can browse the available blog titles.
* When a logged-out visitor clicks a blog title, navigation is prevented and a message asks them to log in.
* Authenticated users can open and read individual blog posts.

### 2. Login and Logout Confirmation Messages

* Added confirmation messages after successful login and logout.
* Used React Router's navigation state to pass messages between pages.

### 3. Clear Navigation Messages

* Implemented `useEffect` to clear navigation state after capturing the confirmation message.
* Ensured that old login and logout messages do not reappear when the page is refreshed.

### 4. Page Not Found Handling

* Added a catch-all route using `path="*"` to handle undefined URLs.
* Displayed a "404 - Page Not Found" message for routes that do not exist.

### 5. User Interface

* Created a simple blog application layout with a consistent navigation bar.
* Used CSS to improve spacing, layout, colors, and overall presentation.

## Challenges and Learnings

During implementation, I encountered a few challenges that helped me understand React Router and React Context more clearly.

1. **Understanding Protected Routes:** Initially, I needed to understand how to prevent unauthenticated users from accessing protected pages while allowing public access to the Explore and Login pages.

2. **Managing Navigation After Login and Logout:** Ensuring that users were redirected to the correct page after logging in or out, while displaying appropriate confirmation messages, required understanding React Router's `useNavigate()` and navigation state.

3. **Handling Navigation Messages on Refresh:** Login and logout confirmation messages continued to appear after refreshing the page. I learned how to use `useEffect` and React state to capture and clear navigation messages.

4. **Handling Invalid URLs:** Initially, undefined URLs displayed only the navigation bar. I learned how to use a wildcard route (`path="*"`) to display a custom 404 message.

## Key Concepts Practiced

* React Router (`BrowserRouter`, `Routes`, `Route`)
* Dynamic Routing and URL Parameters (`useParams`)
* Navigation (`Link`, `NavLink`, `useNavigate`, `useLocation`)
* Protected Routes and Conditional Rendering
* React Context API (`createContext`, `useContext`)
* React State Management (`useState`)
* Side Effects (`useEffect`)
* Handling Invalid Routes (404)
