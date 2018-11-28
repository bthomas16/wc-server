#!/usr/bin/env bash
echo "Changing NODE_ENV to: $1"
echo "********************"

echo "NODE_ENV=$1"
export NODE_ENV=$1

# knex migrate:rollback

# knex migrate:latest

# knex seed:run

# npm test

echo "Starting App with nodemon"
echo "********************"

nodemon

# use ./run-env.sh 'development' || 'staging' || 'production'


