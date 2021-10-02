# BootCamp Node JS (Ceiba - Globant)
### Experience memories

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![made-with-nodejs](https://img.shields.io/badge/Made_with-Node_JS-green.svg)](https://nodejs.org/es/)

## Projects

- *Notes App*: Node JS Tasks App with JSON datasets.
  - Chalk (2.4.1)
  - Yargs (12.0.2)

- *Weather App*: Node JS Weather App application using live endpoints and a REST API Structure.
  - [Geolocation|Geocoding API](https://www.mapbox.com/): Geocoding Address API
  - [Weather Forecast](https://weatherstack.com/): Forecast by location API.
  - Express (4.16.4): Server management module
  - Handlebars (4.0.1): Server HTML Templatting module
  - Postman Request (2.88.1-postman.30): HTTP Requests API management module.
  - [Weather App Git](https://github.com/duquejo01/Weather-App-Node): GIT Source.
  - [Weather App Demo](https://duque-weather-application.herokuapp.com/): Live Weather App Public Demo.

- *Task Manager App*: Node JS Task Manager App using live endpoints, REST API Structure and a MongoDB Database Model.
  - *Dependencies*
    - Express (4.17.1): Server management module.
    - MongoDB (4.1.2): Generate MongoDB Support, connections, and more.
    - Mongoose (6.0.5): Manages database model sanitization and validation, also makes the MongoDB database general operations.
    - Validator (13.6.0): Allows backend to manage complex validations.
    - JsonWebToken (8.5.1): Manages user sessions (Login).
    - Bcryptjs (2.4.3): Encrypt passwords securely.
    - Multer (1.4.3): Manages file uploading.
    - Mailgun-JS (0.22.0): Email Messaging Service.
    - Sharp (0.29.1): Image manipulation and optimization library.
  - *Dev Dependencies*
    - Env-cmd: (10.1.0): Enviroment variables management.
    - Jest: (27.2.2): Node JS Testing suite with mocking support.
    - Nodemon (2.0.12): Listens any JS (or whatever) file changes.
    - Supertest: (6.1.6): Improves Jest with asyncronous tasks and HTTP Request testing support.
  - [Task Manager App Git](https://github.com/duquejo01/Task-Manager): GIT Source.
  - [Task Manager App Demo](https://duque-task-manager.herokuapp.com/): Live Task Manager App Public Demo.

- *Chat App*: Node JS Built Chat App.
  - *Dependencies*
    - Express (4.17.1): Server management module.
    - bad-words (3.0.4): Bad string words filter
    - Socket.io (4.2.0): Socket i/o event emitting and listening module.
  - *Dev Dependencies*
    - Nodemon (2.0.13): Persistent dev server demon.
  - [Chat App Git](https://github.com/duquejo01/Chat-App): GIT Source.
  - [Chat App Demo](https://duque-chat-app.herokuapp.com/): Live Chat App Public Demo.


## Tech

I used a number of open source projects to work properly:

- [node.js] - evented I/O for the backend

## Package.json recommended setup

Use the following structure to start a heroku application well and setup local nodemon dependencies easily
```json
  ...,
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js -e js,hbs"
  },
  ...
```
## MongoDB Tips

- noSQL Database
- Uses the default 27017 system port.
- Its recommended the use of https://www.npmjs.com/package/mongodb Node JS driver
- Windows Command to kill MongoDB process (Service) - Run CMD as administrator
  ```sh
  net stop mongodb
  ```


## Heroku setup

When we're deploying to production we need to login into heroku and
create SSH Keys

```sh
ssh-keygen -t rsa -b 4096 -C "something"
```

```sh
id_rsa is private
is_rsa is public -> It'll be our integrator between Git and heroku
```

```sh
eval "$(ssh-agent -s)" -> Gets process for ssh-agent
ssh-add -K ~/.ssh/id_rsa -> Adds identity to ssh (MAC)
ssh-add ~/.ssh/id_rsa -> Adds identity to ssh (Windows)
```

```sh
Get SSH Key code for apply it in Git Settings
cat ~/.ssh/id_rsa.pub 
```

Authorizing github
```sh
ssh -T git@github.com
```

Assign keys to heroku
```sh
heroku keys:add
```

Create heroku project
```sh
heroku create '--name--'
```

Setup heroku enviroment getting server port and assign heroku remote git
```sh
heroku git:remote -a git-name
``` 

Push repository to Heroku
```sh
git push heroku main
```

## Git remote tip vs local untracked files

For upload to Git an untracked files to a new Git Repository first execute git in local:
```sh
git init
```

Add the remote URL
```sh
git remote add origin URL
```

Check if the URL is saved successfully
```sh
git remote
git remote -v
```

Fetch & Merge the remote changes over local instance files
```sh
git pull origin master --allow-unrelated-histories
```

Add files to Stage, Commit them and push it to Git
```sh
git push origin master
```