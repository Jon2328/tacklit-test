# Backend requirement
- place .env in ./node-be/.env
- install postgresql in local machine
- create database based on your .env DB_DATABASE (default: tacklit_test)
- run yarn migrate for table setup
## Example .env
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_DATABASE=tacklit_test

# Step to run development in local
- yarn
- cd into respective folder (node-be & react-fe) and do yarn to install node packages
- yarn dev in root