# Project Title:  
**E-Commerce Website**

---

## Project Overview:  
This project is all about creating a fully functional e-commerce website where users can browse products, add them to their cart, and complete purchases securely. It’s a platform designed to simulate real-world online shopping experiences while providing a space to learn key web development skills. The project focuses on creating a user-friendly and visually appealing interface backed by a robust and scalable backend.

---

## Key Features:  

- **User Authentication:**  
  Allow users to sign up, log in, and manage their accounts securely.  

- **Product Catalog:**  
  Display a dynamic catalog of products with details like name, price, and description.  

- **Search and Filter:**  
  Enable users to search for products and apply filters like price range or category.  

- **Cart System:**  
  Let users add items to their cart, view the total, and proceed to checkout.  

- **Order Management:**  
  Users can view their order history and track ongoing orders.  

- **Admin Panel:**  
  Admins can add, edit, or delete products and manage user orders.  

- **Interactive Frontend:**  
  A responsive and engaging UI to ensure a smooth shopping experience.  

- **Payment Integration:** *(Optional)*  
  Integrate a payment gateway for secure transactions.  

---

## Tech Stack:  

- **Frontend:** React with Vite for a fast and responsive user interface.  
- **Backend:** Node.js with Express to handle server-side logic.  
- **Database:** MongoDB for storing user and product data.  
- **Authentication:** Secure user authentication using JSON Web Tokens (JWT).  
- **Hosting:** Netlify for the frontend and Render for the backend.  
- **API:** RESTful APIs for communication between the frontend and backend.  


## Milestones

### Milestone 1: Repository Creation

* Created a GitHub repository named "Ecommerce-Follow-Along" with a README file.

### Milestone 2: Initial Setup & Login Page

* Pushed code to the GitHub repository.
* Set up separate folders for frontend and backend.
* Developed a functional Login Page for the frontend.

### Milestone 3: Project Setup & Foundation

* Established project structure, set up database connection, and implemented basic error handling.

### Milestone 4: User Authentication & File Uploads

* Implemented user registration, login, and file upload functionalities.
* Integrated user authentication and authorization middleware.

### Milestone 5: User Signup

* Created the Signup page with form validation.

### Milestone 6: Password Encryption & Data Storage

1. **Encrypt Password:**
    * Hash the user's password with `bcrypt` during signup.
    * Store the hashed password securely in the database.

2. **Store User Data:**
    * Save user data (e.g., name, email) in the database, ensuring the password remains encrypted.

### Milestone 7: Login Endpoint

1. **Accept User Credentials:** Receive email/username and password from the user.
2. **Retrieve User:** Query the database for the user matching the provided credentials.
3. **Password Validation:**
    * Hash the entered password with `bcrypt`.
    * Compare the hashed password with the stored hashed password in the database.
    * Authentication is successful if they match.

### Milestone 8: Product Card & Homepage Layout

* Created a reusable Card Component with props for product details.
* Designed the Homepage layout using a grid or flexbox to display multiple product cards.


### Milestone 9: Product Form Creation

1. **Create Product Form:**
   - Make a form for adding product details like name, description, price, and images.

2. **Image Uploads:**
   - Allow users to upload multiple images for the product.

3. **Form Validation:**
   - Check that the form fields are filled correctly (e.g., price is a number, name is not empty).

### Milestone 10: Product Schema & Endpoint

1. **Product Schema:**
   - Define product details (name, description, price, image URL) using Mongoose with validation.

2. **Endpoint Creation:**
   - Create a POST endpoint to save product data to MongoDB.

3. **Why Validation?**
   - Ensures only valid data is saved, keeping the database accurate.


### Milestone 11: Display Products Dynamically

1. **Backend:**
   - Create an endpoint to send all product data from MongoDB to the frontend.

2. **Frontend:**
   - Write a function to fetch product data from the backend.
   - Pass the fetched data to the product card component.

3. **Dynamic Display:**
   - Use the product card component to display all products dynamically on the page.gt

### Milestone 12: Filter Products by User Email

1. **Backend:**
   - Create an endpoint to send products filtered by user email from MongoDB.

2. **Frontend:**
   - Write a function to fetch filtered data from the backend.
   - Pass the data to the product card component.

### Milestone 13: Update Existing Data

1. **Backend:**
   - Create an endpoint to update existing product data in MongoDB.

2. **Frontend:**
   - Add an edit button to the product card.
   - On click, send the product data to a form, auto-fill the fields, and allow editing.

3. **Dynamic Update:**
   - After editing, save the updated data back to MongoDB.

### Milestone 14: Delete Product by ID

1. **Backend:**
   - Create an endpoint to delete a product from MongoDB using its ID.

2. **Frontend:**
   - Add a delete button to the product card.
   - On click, send the product ID to the backend for deletion.

3. **Dynamic Update:**
   - Remove the deleted product from the UI without refreshing the page.

### Milestone 15: Responsive Navbar  

1. **Create Navbar Component:**  
   - Add links for Home, My Products, Add Product, and Cart.  

2. **Make It Responsive:**  
   - Ensure the navbar works well on all screen sizes.  

3. **Integrate with Pages:**  
   - Add the navbar to all pages for smooth navigation.  


### Milestone 16: ProductDetails Page  

1. **Create ProductDetails page:** -
                        This component fetches product data based on the product ID from the URL.
                        It displays the product's name, image, description, and price.
                        Users can select a quantity and click the "Add to Cart" button.
2. **Updated Routing:** -  
                        A new route was added to navigate to the ProductDetail component when a product is clicked.
                        Update the Home.jsx Component: Ensure that the product links in the Home component navigate to the ProductDetail page when clicked

### Milestone 16: Backend endpoint to add products to cart and store in database.

1. **Edited the userschema:** 
                  - Edited the userschema to store cart products

2. **Added cart endpoint:**
                  - Added a new endpoint to add products to the cart and store in the database.

