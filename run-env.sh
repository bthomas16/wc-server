#!/usr/bin/env bash
echo "Changing env to: $1"
echo "********************"

echo "Starting App with nodemon"
echo "********************"

echo "NODE_ENV=$1" > .env
nodemon

# use ./run-env.sh 'development || staging || production'


