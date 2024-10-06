Real-Time Tracking Deployment Guide

## Overview
This guide provides instructions on how to set up and deploy the Real-Time Tracking feature in the UNBNKD DEX platform.

## Prerequisites
- Ensure you have the necessary blockchain SDKs installed.
- Ensure that your smart contracts have been deployed.

## Deployment Steps

1. **Set Up the Backend**
   - Ensure that the `real_time_tracker.js` service is correctly placed in the backend.
   - Ensure integration with the Pyth Network for real-time pricing.

2. **Set Up the Frontend**
   - Ensure that the `PWD_support.js` component is included in your main application file.
   - Ensure the `offline_support.js` utility is imported wherever you manage local data storage.

3. **Run the Application**
   - Start the backend server:
     ```bash
     cd backend
     node server.js
     ```
   - Start the frontend application:
     ```bash
     cd frontend
     npm start
     ```

## Testing
- Test the real-time tracking by adding assets to your portfolio and observing the total value updates.
- Test voice commands to ensure they respond correctly to user input.
- Test offline functionality by storing some data locally and retrieving it after refreshing the page.

## Troubleshooting
- Ensure the Pyth Network integration is functional and returning the expected data.
- Check for errors in the console if the voice recognition does not start.
