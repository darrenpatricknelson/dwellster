### Commit #1
Scaffolding and folder structure

### Commit #2
Business requirements and wireframe

### Commit #3
NEW: 
    - .gitignore file

### Commit #4
UPDATE: Update to css files
    - Added variables for the colour pallet I'm going to use to globals.css
    - Deleted home.module.css

### Commit #5
FEAT: New Feature - Header component
    - Created a Header component 
    - Created a Header.module.css file
    - Header comp styled appropriately 
    - TODO: 
        - Add functionality to the logout button
        - Import data from DB to populate placeholders information 

### Commit #6
NEW: 
    - Commit tracker file created

### Commit #7
FEAT: New feature - Navbar
    - Incomplete
    - Created a Navbar component
    - Created Navbar.module.css

### Commit #8
UPDATE: Updated layout and index.js
    - Made updates to the layout.js component
    - Made updates to index.js file
        - Added a div container to house the navbar and main container
    - Made updates to Home.module.css styles

### Commit #9
NEW: Created new components
    - Blog.js
    - Button,js
        - These components will have several exportable components inside of them
    - Blogs.module.css
    - Buttons.module.css

### Commit #10
UPDATE: Update to Header component
    - Update to the button in the header component
    - This button will now imported from the Buttons.js component
    - Added the container comp to the index.js file

### Commit #11
FEAT: New feature: Container
    - This component will contain all the different forms of the blog state
    - Blog state could be:
        - Card, a summary (technically completed)
        - Blog, this full blog  (incomplete)
        - Cloud, adding a new blog (incomplete)
    - Blog Card is essentially done
    - TODO: 
        - Fix the ellipsis overflow (not working)
        - Find better colours (Colour pallet is not working!)
        - Populate placeholder with DB information once backend is up and running
    
### Commit #12
NEW: New files
    - Created server.js running on Port 3001
    - Created .env file containing the PORT, MONGO_URI and SECRET-KEY
    - New files:
        - server.js
        - auth.routes.js
        - community.routes.js
        - blog.routes.js
        - auth.models.js
        - community.models.js
        - blog.models.js
        - auth.controller.js
        - community.controller.js
        - blog.controller.js

### Commit #13
UPDATE: Update to package.json
    - Added "type": "module" to allow importing modules instead of requiring
    - Update to commits. file (changed Labels from 'Push #' to 'Commit #')
    
### Commit #14
FEAT: New feature: Backend created
    - Routes added to server.js
    - User
        - This will be used to authenticate uses
        - Created a model for the user
        - Created a controller for the user
        - Created routes for the user
    - Community
        - This will be used to shared blog posts within a community
        - Created a model for the Community
        - Created a controller for the Community
        - Created routes for the Community
    - blog
        - This will be used to create blogs
        - Created a model for the blog
        - Created a controller for the blog
        - Created routes for the blog
    - (Untested)

### Commit #15
UPDATE: Update to container and blog card
    - Updated the blog card to have one standard colour and variable buttons depending on who's logged in
    - Update to the blog.module.css file 

### Commit #16
UPDATE: Update to px amounts
    - Standardizing the px amounts
    - Changing from % to fixed pixel numbers
    - Change name of the container component to blogContainer (All components and css files)

### Commit #17
NEW: Added bootstrap 
    - Added bootstrap components to the BlogContainer field
    - Now the card gets mapped inside of a responsive container

### Commit #18
UPDATE: Update to scripts and plugins
    - Added a few extensions (tabnine)
    - Added a .babelrc.json file
    - Update to .eslintrc.json file
    - Above updates updated the container component
    - Update to commits.ms file (added a commit number to each commit)

### Commit #19
UPDATE: Update to the layout component
    - Redesigned the layout component
    - Moved components from index to layout
    - Changed Home.model.css to layout.model.css

### Commit #20
UPDATE: Update to the Community display
    - Change BlogContainer to Community
    - This will display all the blogs within the community
    - Created a Community.js page
    - Updated BlogContainer.module.css to Community.module.css

### Commit #21
UPDATE: Update to the css
    - Change the container to form around all the children of the layout component
    - That way, not matter what page the user is on, the layout is the same