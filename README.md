# BootCamp Node JS (Ceiba - Globant)
### Experience memories

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![made-with-nodejs](https://img.shields.io/badge/Made_with-Node_JS-green.svg)](https://github.com/duquejo01/BootCamp-Node-JS)

## Projects

- Notes App: Node JS Tasks App with JSON datasets.
  - Chalk (2.4.1)
  - Yargs (12.0.2)

- [Weather App](https://duque-weather-application.herokuapp.com/): Node JS Weather App application using live endpoints and a REST API Structure.
  - [Geolocation|Geocoding API](https://www.mapbox.com/)
  - [Weather Forecast](https://weatherstack.com/)
  - Express (4.16.4): Server management
  - Handlebars (4.0.1): Server HTML Templatting
  - Postman Request (2.88.1-postman.30): HTTP Requests API management.
  - [Weather App Git](https://github.com/duquejo01/Weather-App-Node): GIT Source.

## Tech

I used a number of open source projects to work properly:

- [node.js] - evented I/O for the backend

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