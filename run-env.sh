#!/usr/bin/env bash
echo "Changing NODE_ENV to: $1"
echo "********************"

export NODE_ENV=$1
echo "Now using env:" $NODE_ENV

echo "Ending Script"
echo "********************"

export NODE_ENV && node app.js

# use ./run-env.sh 'development' || 'test' || 'staging' || 'production'


