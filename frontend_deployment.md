## Steps:

1. **Install Node.js**:
   Ensure you have Node.js installed:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   sudo apt-get install -y nodejs

	2.	Install Frontend Dependencies:
Navigate to the frontend folder:

cd src/frontend/
npm install


	3.	Build the Frontend:
Build the frontend for production:

npm run build


	4.	Deploy:
	•	Deploy the built files to a hosting service like Vercel, Netlify, or AWS.
