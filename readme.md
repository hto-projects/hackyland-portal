# Hackyland Portal
This MERN app is meant to serve as a portal for the Hyland Hackathon. Participants should be able to submit their teams and projects, and see information about the event. It is deployed at [hackyland.onrender.com](https://hackyland.onrender.com). *Note that it usually takes a minute or too to load up for the first time*.

## Getting Started Locally
If you'd like to run or develop the application locally, there are a few things you will need to do.

### MongoDB
Follow these steps to create a database for the app:

1. Set up an account on MongoDB Atlas. [instructions](https://hytechcamps.github.io/databases/MongoDbAtlasRegistration.html)
2. Get your connection string. [instructions](https://hytechcamps.github.io/databases/FollowAlong.html)
   1. You can ignore everything after the "Getting the Connection String" section
3. Create a database named `hackathon-portal-local` within your cluster.
4. Add dummy data to the `hackathon-portal-local` database.
   1. You can use the [testData.json](testData.json) file.

### Back-end Env
In the root of the repo directory, create a **.env** file that looks something like this:

```
NODE_ENV=development
PORT=5000
MONGO_URI=YOUR_MONGO_CONNECTION_STRING
DB_NAME=hackathon-portal-local
JWT_SECRET=abc123
FRONTEND_URL=http://localhost:3000
```

Replace `YOUR_MONGO_CONNECTION_STRING` with your mongo connection string.

### Front-end Env
In the **frontend/** directory, create a **.env** file that looks something like this:

```
VITE_BACKEND_URL="http://localhost:5000"
```

### Dependencies
To get ready to run, install the dependencies for both the front-end and the back-end:

```
npm install
cd frontend
npm install
```

### Run
To run both the front-end and the back-end concurrently, use this command:

```
npm run dev
```

You should be all set to start exploring!

## Portal Features
There are a few things the portal can/should be able to do.

### The Book
The "book" portion (bottom bar) is essentially a static site. It does not interact with the back-end, and simply serves up information about the event. This can be explored to find a lot of information about the event.

### Join / Sign In
To join, a participant ID will be required. These will be given to each participant, and should be kept secret. Participants can create an account in the portal using their participant ID - they will additionally provide their name and a password. Once they have an account, they can sign in with their participant ID and password.

### Team Submission / Viewing
Participants who have joined can submit their teams. This will require a team name, workstation number, and a list of participant IDs. The participants do not all need to have accounts in order for the team to be submitted. Once a team is submitted, it can be viewed.

### Project Submission / Viewing
Once a participant is on a team, they can submit a project on behalf of their team. They will need a project name, description, artifact link, and optional thumbnail. Once a project is submitted, it must be approved by an admin. When it is, it will be viewable within the showcase. The showcase has a list of all the approved projects.

### Student Choice Voting - Not Yet Implemented
Any participant who has an account will be able to vote for projects. They are only able to vote for projects not submitted by their team. They will have a certain number of votes to cast. A team will only be eligible for the "Student Choice" award if every member of the team has cast all of their votes.

### More
There are probably more things this portal can/should do, but for now - this is it!

## Source
This project was based on this repo: [https://github.com/bradtraversy/mern-auth](https://github.com/bradtraversy/mern-auth).
