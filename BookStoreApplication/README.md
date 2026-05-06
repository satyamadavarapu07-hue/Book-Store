# Project Title
Interactive Bookstore Application

##  Objective
Build an application that allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.

## Technologies Used

Frontend - React JS (React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.)

# Functionality
 ## Core Requirements
 Develop a ReactJS application with multiple pages and reusable components:
 Page: Home

# Page Details:
Header - links for pages Home, Book List, Cart
Banner - Heading, description, and “Explore Books” Button
Navigation:
Page: Book List

# Page Details:
Header - links for pages Home, Book List, Cart, Book Items (title, subtitle, image, price ), Search (by title, author), Filter (by Price)
Navigation:
"Book List" link in Header
"Explore Books" Button
"Back" Button in Book Details Page
Page: Book Details

# Page Details:
Book detailed Information (title, subtitle, image, description, price)
"Add to cart" Button
"Back" button
Navigation: Each Book Item in Book List Page
Page: Cart

# Page Details:
Cart Items (title, subtitle, image, price)
"Remove" Button
Order Summary
"Checkout" Button
Navigation:
"Cart" link in Header
"Back" Button in Checkout Page
Page: Checkout

# Page Details:
"Back" Button,
Order Form (Personal Details, Summary, Place Order)
Navigation:
Checkout in Cart

 Implement features
 - Book search
 - Book filtering
 - Adding to cart
 - Removing items from cart
 - Order placement

# Bonus tasks
 - Implementing user authentication
 - Unit tests
 - Deploy the application on a hosting platform for live access

# Guidelines to develop a project
 - Maintaine code quality
 - Handle errors gracefully

# Submission instructions
 - Deploy the application in github

# Resources
Desihgn Files
- Home Page
- Book Listing Page
- Book Details Page
- Cart Page
- checkout
reference:(https://www.crossword.in/?srsltid=AfmBOorN8LhifDgiTKy_kXGpV_nS9q-bLLY7n7XaDlswmVEa6IO3BXjI)

Apis
- Fetch book list
- Handle user login/signup
- Manage cart & orders
reference:(http://api.itbook.store/)

Third-Party Packages
- loader(react-loader-spinner)
- icons (react-icons)
- Range Slider(rc-slider)
- react-router-dom


|     Page     |     Route    |    Path    |
|:------------:|:------------:|:----------:|
|     Home     |     Home     |      /     |
|   Book List  |   Book List  |   /books   |
| Book Details | Book Details | /books/:id |
|     Cart     |     Cart     |    /cart   |
|   Checkout   |   Checkout   |  /checkout |
|   Not Found  |   Not Found  | /not-found |