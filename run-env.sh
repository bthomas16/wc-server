#!/usr/bin/env bash
echo "Changing NODE_ENV to: $1"
echo "********************"

echo "NODE_ENV=$1"
export NODE_ENV=$1

echo "Starting App with nodemon"
echo "********************"

# nodemon

# use ./run-env.sh 'development' || 'staging' || 'production'


