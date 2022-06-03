# test-Nodejs-backend
# local project setup

- install Nodejs v16.15.0

# run this project

- node app.js

# Build Docker image

- docker build . -t backend_nodejs
- docker run -p 3001:3001 -d backend_nodejs