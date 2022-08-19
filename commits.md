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

### Commit #22
UPDATE: Refactor the buttons component
    - Refactored the buttons component as well as the css
    - Added 2 new buttons (interactions and caution)
    - Added buttons to the navbar
        - The buttons contain links to different pages
        - These links are functional
        - They use Next with Router
    - Update the header button and css
        - Added a div around the button to add a width property

### Commit #23
FEAT: New feature - Join community form
    - Create the join community form on the join page
    - Added functionality to the buttons by passing a function as a prop
        
### Commit #24 
BUG: Fixed the link navigation bug
    - Navigation links were not working properly
    - Had to remove the onClick function of the button
    - Reworked the nav buttons to be divs with the button styling

### Commit #25
UPDATE: Updated the button.js component
    - Updated the button component to spread the props
    - Which means I can add onClick functions to the imported button without having to pass the function down as a prop

### Commit #26
NEW: Setup authentication routes in _app.js
    - Setup up the routing for authentication
    - Used a useEffect hook to create a componentDidMount method
    - Use useRouter to replace the route path
    - Created a authentication.js file as well ass css module

### Commit #27
FEAT: New feature - context
    - Setup context provider as well as context hook for the user
    - Still next to setup for the community

### Commit #28
BUG: (FIXED) Changed file name of context
    - Change the context file name from Dwellster to User
    - Need to create separate context for Community

### Commit #29
UPDATE: Updated package manager
    - Installed font awesome

### Commit #30
UPDATE: Updated package manager
    - Installed font awesome

### Commit #31
FEAT: New feature - Authentication page
    - Authentication page built using the authentication page from my previous project
    - Updated some styling 

### Commit #31
NEW: Frontend API requests file
    - Created a file with all the api requests
    - These functions can be export and imported anywhere in the frontend

### Commit #32
CONFIG: Configured next to proxy requests
    - Next.config.js needs to be updated to proxy requests

### Commit #33
REBUILD: Rebuilding the frontend
    - Not using next.js as a framework
    - Using create-react-app

### Commit #34
REBUILD: Authentication feature rebuilt
    - Auth feature rebuilt and working
    - Using session storage again because cookies is a bit to complex 
    - Can look into cookies at a later stage

### Commit #35
REBUILD: Layout rebuilt
    - Installed new package called react-helmet
        - Used to add a title to the page (and Meta-tags)
    - Added the layout component around the home page interior
    - Will do this for all pages 

### Commit #35
REBUILD: Header rebuilt
    - Rebuilt the header 
    - Updated index.css to contain the global.css styles

### Commit #36
REBUILD: Header rebuilt
    - Committing Header.module.css (forgot during last commit)

### Commit #37
UPDATE: Added context to the header component
    - Added context to the header component to display the logged in users name

### Commit #38
REBUILD: Rebuilt Navbar
    - Removed next.js links and added anchor tags for routing
    - Added Route path to app.js

### Commit #39
NEW: Added favicons

### Commit #40
UPDATE: Update to nav
    - Took out the heading 
    - Removed the border

### Commit #41
UPDATE: Added nav links to the home page

### Commit #42
UPDATE: Updating to routing
    - Rerouting users to the authentication page if they log out
    - Added logout functionality the the logout button in the header

### Commit #43
NEW: New package - React bootstrap

### Commit #44
UPDATE: Added React bootstrap to the community page
    - Change the layout of the blog cards
    - Made responsive
    - Added react ThemeProvider context to app.js
    - Added context to the community.js page to validate whether a user is an admin or not

### Commit #45
UPDATE: Added routing for the join page

### Commit #46
PUSH: Context files

### Commit #46
PUSH: CSS files

### Commit #47
UPDATE: Update the join.js file
    - Deleted unused lines of code

### Commit #48
PUSH: Pushed .gitignore files

### Commit #49
FEAT: New feature - Cloud container
    - Built the cloud container for when the user wants to add a new blog
    - Created routes for the add new blog page
    - Created a AddNewBlog.js file/ page + css file

### Commit #50
DELETE: Clearing all deleted files
    - Clearing all the deleted files from my working tree

### Commit #51
UPDATE: Added context to the navbar
    - Added context to the navbar to display different buttons depending on if the user is an admin or now
    - If the user is an admin, there will be a create community button
    - If the user is not an admin, there will be a join community button
    - Removed the 'user' context from app.js as it was not being used

### Commit #52
UPDATE: Added context to the join.js page
    - Added context to the join.js page to display different headings depending on if the user is an admin or now
    - If the user is an admin, there will be a create community heading
    - If the user is not an admin, there will be a join community heading

### Commit #53 
UPDATE: User authentication post request name
    - Updated the post request name from postRequest to userPostRequest

### Commit #54
NEW: New server interaction
    - Creating a new community
    - Created a function to handle creating a new community in community.controller.js
    - Updated the community routes
    - Updated the join.js page to display different forms if the user is an admin or not
    - Wrote the api request function in requests.api.js

### Commit #55
NEW: New server interaction (Joining)
    - Joining a new community
    - Created a function to handle creating a new community in community.controller.js
    - Updated the community routes
    - Updated the join.js page to display different forms if the user is an admin or not
    - Wrote the api request function in requests.api.js

### Commit #55
NEW: Created new community context and hooks
    - Created a new context file called Community.context.js
    - This context is used to update all the communities a user belongs to
    - Added context to the app.js file to update the community context
    - Added the context provider to the index.js file
    - Created a new api request to fetch any communities

### Commit #56
UPDATE: Change the backend getCommunity response
    - The backend will respond differently depending on whether the user is an admin or not
    - It will search the community database for a different result
    - If admin, it will search for the communities admin email
    - If not admin, it will search the communities members email
    - Also added a message to the response to say whether the user is an admin or not
    - Update to the app.js file
        - Will handle the community dispatch differently 
        - Will update with the community json data instead of the entire response

### Commit #57
UPDATE: Added a form to the addNewBlog page
    - Added an input for blog title
    - Added a textarea so that the user can write their blog
    - Need to build the api interaction
    - Also committing the cloud.js component 
        - Commit #49 but never actually committed

### Commit #57
UNCOMMITTED: Blog.js
    - Built the blog cards but never committed the file

### Commit #58
UNCOMMITTED: Button.js
    - Built the buttons but never committed the file

### Commit #57
UNCOMMITTED: Community.js
    - Added a route link to the community.js file but never committed

### Commit #58
NEW: New page created - CommunityBlogs.js
    - Created a new page that will host all the blogs in their card form
    - Routes created for the new page
        - /home/community/:title
    - New react-router-dom package used: useParams
        - Used to grab information from the params
    - Community.js page updated to display the titles of the communities that the user is in
    - Added a loading state to community.js
    - Updated the Loading.js component
        - Removed the loading_container style

### Commit #58
UPDATE: Minor updates to Community.js

### Commit #58
UPDATE: Updated the loading state
    - Created a loading page to display full page loading state
    - Left the loading.js as a component and no longer a page
    - Some minor clean-ups around other files

### Commit #59 
BUG: Fixed the loading page navigation
    - Was not being redirected to the respective pages
    - User would hang on the loading page
    - Added an else if statement to correct this bug

### Commit #60
BUG: Fixed the api response for communities
    - The api was sending back all communities regardless if the user was a member or not
    - Had to sort the response from mongo and determine if the user was a member by deconstructing the array/object and checking the members array 
    - Returning a response depending on the new communities array created after the community mongoDB response

### Commit #61
UPDATE: Update to the way community titles are displayed

### Commit #62
UPDATE: Added the title of the community to the header
    - When the user opens a specific communities clogs, that communities title will display on the header
    - The title is taken from the url using react-router-doms useParams hook

### Commit #63
BUG: Fixing tangled API requests 
    - Initially the api request from the community page return all the communities
    - The communityBlog page used the same api request
    - Created a new api request to return a single community for the communityBlog page
    - This request takes in the title in the url and returns a single community

### Commit #64
UPDATE: Updated the communityBlog page
    - Updated the communityBlog page to display certain information depending on the blog array within the community api response
    - Added a button to navigate to the addNewBlog form

### Commit #65
UPDATE: Added/ Remove community key from sessionStorage
    - On community page, the sessionStorage community key is removed
    - On communityBlog page, the sessionStorage community key is added
    - Needed the communityKey for when an admin is adding a new blog to the community

### Commit #66
UPDATE: Removed the stringfy function
    - Previous commit added the communityKey to the sessionStorage while stringfying the data
    - Removed the stringfy function in order to skip the parsing step when retrieving data

### Commit #67
FEAT: New Feature - adding a new blog
    - The user is now able to add a new blog
    - The user can fill in the form on the community/add page and the blog will be added to the community database
    - The title of the community database is stored in the url
    - The community key is stored inside the sessionStorage
    - The user is also given a link back to the communityBlog page using the community title in the url
    - Backend is also up and running
    - The response from the backend is a status code as well as a message
    - Not responding with the full community database because when the user returns to the communityBlog page, the updated DB is fetched
    - Therefor it would not make sense to update the DB from teh community/add page as well as the /community page
    - Added some validation styling for successful/unsuccessful responses
    - UPDATES: 
        -Update to the header component: changed the name of the title in the params from title to communityTitle
            - Reason being, 'title' clashed with the title in the addNewBlog form
        - Update to the community.module.js file
            - Changed the title of the  blogShcema from 'user' to 'blog'
            - type is still === object

### Commit #68
UPDATE: Update to CommunityBlogs.js and Blogs.js
    - Updated CommunityBlogs.js to display the blogs in the singular card form
    - Passed the blog down through to the Blog.js card component to display certain information
    - Created a button variable inside communityBlogs that is basically a button
    - Passed the button down as a prop to display at the bottom of the card if the user is an admin
    - This button will be used to delete the blog

### Commit #68
BUG: Add blog button displaying for all
    - Add blog button displaying for users that are not admins

### Commit #69
ASSIST: Pushing code to github for assistance 
    - Need Evans help solving my delete query issue

### Commit #70
FEAT: Deleting blogs is now functional
    - The admin can now delete blogs
    - Blogs will be deleted from the community collection as well as the blogs collection

### Commit #71
UPDATE: Updated the join/create new community route
    - Displays different text depending if the user is and admin or now
    - Updated the response from the server to display text if the user or admin has joined/ created a new community or not
    - Added a 'version2.0Requirements.md' file to document what must still be done

### Commit #72
UPDATE: Updated the authentication process
    - Added new validations to the frontend
    - Added a validation function that can be tested 
    - Improved the backend to handle the validations better

### Commit #73
NEW: Added a README.md file 

### Commit #74
DEPLOY: Prepping for deployment 
    - Create files for deployment
        - vercel.json
    - Updated frontend package.json file
    - Updated the server.js file in the backend
    - Removed a comment in the user controller file

### Commit #75
DEPLOY: Prepping for deployment 
    - Updated frontend package.json file

### Commit #76
DEPLOY: Prepping for deployment 
    - Imported path in server.js

### Commit #77
DEPLOY: Prepping for deployment 
    - Update to README.md file
        - Added link to vercel website

### Commit #78
DEPLOY: Prepping for deployment 
    - Update to server.js file
        - Made changes to align with my understanding for production
    - Update to client package.json file
        - Removed a forward slash at the end of the deployed link
    - Update to README.md
        - Added some features that need be added in future versions

### Commit #79
DEPLOY: Prepping for deployment 
    - Update to server.js file
        - Added an 'export default app' to the end of the file
    - Removed PORT from .env file

### Commit #80
DEPLOY: Prepping for deployment 

### Commit #81
DEPLOY: Prepping for deployment 
    - Deleted build file

### Commit #82
DEPLOY: Prepping for deployment 
    - Update to vercel config file
        - Removed /build from the client 

### Commit #83
CLEAN-UP: Clean up
    - Change 'Business requirements' folder name to 'Documentation
    - Moved documentation files in the documentation folder
    - Updated the .gitignore file
    - Prepping for deployment to Heroku and not vercel
        - Removed vercel.json file
        - Added a heroku postbuild script to the server package.json file 

### Commit #84
DEPLOY: Prepping for deployment 
    - Removed 'homepage' from client package.json

### Commit #85
HYPERIONDEV: Prepping for task submission 

### Commit #86
HYPERIONDEV: Prepping for task submission 

### Commit #87
DEPLOY: Prepping for deployment
    - Moving away from Heroku back to vercel
    - Removed heroku postbuild script
    - Added code for vercel
    - Added vercel.json

### Commit #88
REBUILD: Massive rebuild
    - Rebuilt the folder structure for heroku deployment 
        - Moved the frontend and backend folders into an app folder 
        - The frontend is still in the client folder
        - The backend is now in the root app folder 
    - Added heroku postbuild script to the server package.json file
    - Reworked the routes in the backend and frontend
        - Added '/api' to the beginning of the api request routes 
        - This is needed for heroku
    - Deleted the vercel.json file
    - Delete 'homepage' from the server package.json

### Commit #89
REBUILD: Rebuilt folder structure again
    - Change folder structure again
    - Made the app my root folder so now all the backend files are in my root folder
    - Client folder remains the same
    - Documentation folder ignored by git commits
    - commits.md file is pushed to github

### Commit #90
UPDATE: Update to index.html file
    - Added a different route to the favicons in the index.html file