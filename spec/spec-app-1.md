# App-1-spec

Context:

This is a full-stack server rendered AJAX e-Shop application to demonstrate working knowledge of EJS-jQuery-Bootstrap front-end + Node-Express-MongoDB back-end technology stack.
That will be done by building a representational website for a fictional online shop. It will allow users to create and update an account enabling them to see personalized pages as well as maintain their shopping cart inventory. Shopping cart functionality will be available for non-registered users as well. The app will support payments. It will also have an admin panel which will allow the shop owner to manage their inventory and see various website-related statistics.

## Functional spec:

Functionality:

- User register/login/update functionality.
- Personalized pages for logged in users.
- Protected private pages functionality.
- Shopping cart functionality.
- Payments functionality.
- Admin panel for content management and statistics.
- Responsive front-end design.

Site pages and their functions:

```sh
Home                 # Landing page.
|
|- Register/login    # Register/login functionality
|
|- Admin panel*      # Content management and statistics (for shop owner).
|
|- User info*        # User account info/updates
|
|- Shop items        # Shop inventory.
|
|- Shopping cart     # Shopping cart/payments
|
|- About/Contacts    # Information about the company/contacts


* - These pages are private and require user login.
```

## Design spec:

TDB

## Technical spec:

### Front End

Views:

- EJS templating and jQuery.

Styling:

- Custom version of Bootstrap.

### Back End

API:

- REST

Server:

- Node with Express.

Database:

- MongoDB with Mongoose.
