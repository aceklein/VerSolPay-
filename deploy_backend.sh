#!/bin/bash

# Install dependencies
npm install

# Set up environment variables (edit this file manually or source it from .env)
export $(cat .env | xargs)

# Start backend server
npm start