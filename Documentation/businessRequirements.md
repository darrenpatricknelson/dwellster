### Dwellster - Come dwell with me

### Preface

1. Expected audience: 
    - HyperionDev moderator
    - Friends and family
    - An interviewer for a potential full-stack job

2. Version history:
    - Version 1.0 (unreleased)

### Introduction 

The initial name for this software was 'Dwellster - come dwell with us' but was changed to 'come dwell with me' do to how personalized the community will be.
Dwellster is a simple blog mock up where users will be able to sign up as either a blog or a reader (or a dweller).
The blogger will have the ability to write up a storm and post it on their board and those dwelling around can have a read, leave a like and leave a comment. 

Dwellster is meant to a live version of the bloggers thoughts. The blogger will be able to post anything and everything they'd like without having the fear of being 'canceled' or their boss seeing their post. The unique thing about Dwellster is than, it's not a public board. Unlike instagram and twitter, bloggers boards can't be searched. The problem with public apps is that even if your account is private, people still know your account exists and can pester you into accepting their follow request. Dwellster takes that situation off the table. YOU are in control about who dwells around your personal board. You have a personal link that you can send out to friends and family and that link will only generate 1 profile. That profile will be the person you've invited! You can build your own small community of like-minded individuals, friends, family and love ones. And if anyone is giving you a hard time, simply remove them!

Your Dwellster board is meant to be private because in todays day and age, privacy is hard to come by. So create your Dwellster board and start building your little community of Dwellers.

### Software requirements

1. User requirements:
    - Authentication process
        - Registration
        - Log in
    - Admin related 
        - Create blog posts
        - Update blog posts
        - Delete blog posts 
        - Reply to comments
        - React to comments 
        - Remove comments
    - User related
        - View all the Admins blog posts
        - View specific blog posts
        - Add comments 
        - Add reactions
    - Sign out

2. System Architecture: 
    - Dwellster will use MERN stack of technologies.
    - The MERN stack is a well rounded fast stack of technologies comprising of:
        - MongoDB (The database)
        - Express.js (To configure the RESTful api)
        - React.js (To create the UI and UX)
            - I will be using the Next.js framework. Next is fast and lightweight and easy to understand, and offers server-side rendering which greatly improves the performance of an application. 
            - Will possibly also incorporate third party libraries (for a faster built and better looking UI and UX), such as:
                - React Bootstrap for pre-built components
                - Font Awesome for icons
        - Node.js (The backend runtime environment)
    - Dwellster will be deployed on vercel.com
        - Vercel is already setup and is connected to github so any new code pushed to github will automatically be available for deployment on vercel.
    - Dwellster will be kind of be a combination of Pinterest and Twitter but with a more personally curated board. 
        - The admin not only owns his/ her Dwellster board but is also in control of who views their board.
        - This means that the admin can created a small little community where his/her Dwellers react to their life

3. System requirements: 
    - The application is a plain and simple blog board replica. It is meant to be a personal and homie feeling app that has one blogger and all the dwellers that blogger allows. 
    - The app is based off of any blog site, the only difference is it's personalized feeling. Instead of have a humongous database filled with thousands and thousands of users, Dwellster is mean to be a personal blog or thought board when one user, the admin, can scribble all their thoughts and pin it to the board. They can then share their board using their link to their partner, parents, uncles or friends, who in turn may dwell on the site and have a peak into the blog owners mind. 
        - This idea is only in theory though. For this task, I won't be setting up unique databases with only one admin and unique users that the admin/ blogger has invited. There will only be one registration route. For deployment, I would have seeded data and shared the admins log in details. You, as a moderator, however can register your own account which will only give you dweller rights. My skill set is not as sharp as I would like to attempt my initial idea of having a blogger share their unique board and have dwellers sign up using the invite link. I think that would be to time consuming for myself as well but I will possibly update this app in the future once I have learnt some new skills! 
    - The system should allow the admin/ blogger to create and add new blog posts 
    - The system should allow the admin/ blogger to update old blog posts 
    - The system should allow the admin/ blogger to delete blog posts as well as delete unwanted comments on their blog posts
    - The system should allow the user to view multiple blog post pinned to a board
    - The system should allow the user to click on one blog post and view the blog post in it's entirety 
    - The user should be able to leave a comment and/ or like on the post 

    1. Functional requirements:
        - The moderator should be able to sign in as the admin
            - These credentials will be shared via a readme.md file once I submit my task for review
        - The user/ dweller should be able to sign up and log in with their registered email and password combination
        - The user should also be able to login using one of 3 different ways:
            - Google account login 
            - Facebook account login
            - Registered email and password combination
        - All 4 CRUD functions
            - CREATE new posts/ comments/ reactions
            - READ specific blog posts 
            - UPDATE blog posts and comments
                - This will be for the admin only. If there is time, I'll add functionality so that the user can update their comments as well
            - DELETE blogs posts and comments
                - This will be for the admin only. If there is time, I'll add functionality so that the user can update their comments as well
        - The admin and user should be able to sign-out 

    2. Non-functional requirements:
        - The site should be:
            - attractively styled,
            - user friendly, 
            - simple,
            - fast and reliable, and
            - secure.
        - The site should also speak to the user:
            - Have loading spinners,
            - Toaster notifications when something goes wrong,
            - etc.

### User stories 

1. All new users should be allowed to create an account
    - Account type (Blogger or Dweller) will be in the registration form 
    - As mentioned above: 
        - For this task, an admin will be seeding while users may sign up as they please. 
        - The reason for this is to save time since the task requirements do not specify a new user should have the choice between an blogger (admin) and dweller (user)
        - In later version, the functionality described in point 2 of the system requirements will be fleshed out but for now, I will keep the authentication process short and simple and have a basic 'user' registration form.
2. Users should be able to log in and out as they please.
    - There is a possibility that I will use cookies to store the details about the user. If not cookies then the session storage for sure
3. A user should be able to leave a reaction and a comment on any of the bloggers posts.
    - Since the community is meant to be personalized to the blogger (i.e they sent out private invite links to their Dwellster board), any user should be able to leave a comment on any of blog posts that are currently on the board.
4. The blogger/ admin should also have the functionality to reply to the user. 

### Possible features mentioned but (possibly) won't make the final software: 
1. Personalized invite links
2. Replies to comments
3. Admin being able to remove a user from their community
4. Being able to sign up as a blogger

### Product owner notes:

Reading through this document and thinking of the possible solutions to each problem, I think that I might have created a very audacious piece of software idea.
Only once I started writing the code for the app, will I find out if I have the skills necessary to pull off this app. I like the challenge and I like the scale of my idea so I have left everything in the doc however I can not promise that all the functionality will be in the deployed version 1.0 of Dwellster. 
I'm not trying to belittle what I believe my ability is but there are a lot of variables in play outside of this task so having to the capacity to sit, code and research solutions while maintaining a clean coded software solution might be a step to far for me at the moment. The software solution that I do submit for review will be to the best of my ability while also minimizing the time it takes to develope the above solution. 

I hope that I can pull a rabbit out the hat a deliver on all the software requirements listed in this doc, that is the goal, but I make no promises. 

I hope you are excited to see what I come up with because I am excited to start building this app! :D

Some late nights coming up... 