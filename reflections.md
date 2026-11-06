### Dynamic Routing Blog App
## Project Overview

This project is a simple blog application built using React and React Router. It demonstrates how to implement client-side routing, dynamic routes, and display blog content based on URL parameters.

### Features Implemented
1. # Blog Navigation
Created a navigation bar with a link to the Blog page.
Used NavLink for navigation.
2. # Blog Index Page
Created a blog index page that displays a list of blog posts.
Stored blog posts in a separate JavaScript data file.
Used map() to display the blog titles.
Used Link to navigate to individual blog posts.
3. # Dynamic Blog Post Pages
Implemented dynamic routing using the /blog/:slug route.
Used useParams() to retrieve the slug from the URL.
Used find() to locate the matching blog post from the posts array.
Displayed the selected blog post's title and content.
Added a "Back to Blog" link.
4. # Invalid Blog URL Handling
Added a "Post not found" message when the requested slug does not match any available blog post.


## Testing

Tested the following URLs to verify that the blog routing works correctly:

# URL	Expected Result	Status
| URL | Expected Result | Status |
|---|---|---|
| `/blog` | Displays all three blog titles | Passed |
| `/blog/my-first-blog` | Displays My First Blog and its content | Passed |
| `/blog/learning-react` | Displays Learning React and its content | Passed |
| `/blog/understanding-javascript` | Displays Understanding JavaScript and its content | Passed |
| `/blog/unknown-post` | Displays Post not found | Passed |