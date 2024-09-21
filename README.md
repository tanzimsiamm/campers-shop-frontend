# Campers Shop

### Live Server: [https://campers-shop-six.vercel.app](https://campers-shop-six.vercel.app)

## Overview:
Campers Shop is an e-commerce site focused on camping products where users can browse, manage, and purchase all the essentials needed for a great camping experience.

## Features:
- **Product Management:** Users can create, update, and delete products from the Product Management page.
- **Filtering & Search:** Users can filter products by price and category, or search for specific items.
- **Product Details:** Users can view full product details by clicking the "See Details" button on product listings.
- **Cart & Orders:** Users can add products to the cart from the Product Details page and place an order for the items in the cart.
- **Checkout:** Users must provide their information to place an order via the Checkout page.

## Technologies Used:
- **Frontend:**
  - HTML, Tailwind CSS
  - React, Redux Toolkit
  - TypeScript
  - DaisyUI (for styling)
  - React Hook Form (for forms)
  - React Router DOM (for routing)
  - React Slick (for carousels)
  - React Icons (for icons)
  - @szhsin/react-accordion (for collapsible sections)
- **State Management:** RTK Query for efficient data fetching and caching.
- **Responsive Design:** The site is fully responsive for all screen sizes, with pixel-perfect adjustments.
- **Error Handling:** Comprehensive error handling throughout the application for a smooth user experience.

## How to Run the Project Locally:
1. **Clone the Project:** Clone this repository to your local machine.
2. **Install Dependencies:** Run `npm install` to install all required packages.
3. **Set up Backend:**
   - Replace the backend API URL in the `baseApi.ts` file with your backend server URL.
   - The backend server for this project is available in the "camper-haven-backend" repository.
4. **Start the Development Server:** Run `npm start` to start the development server.
5. **Build the Project:** To build the project for production, use the command `npm run build`.
