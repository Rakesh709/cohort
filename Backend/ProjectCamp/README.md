
### steps to Follow

1. npm init -y

2. npm install express mongoose dotenv cors express-validator

3. npm install --save-dev prettier

   - .prettierrc - create file

   ```
   {
   "tabWidth": 2,
   "useTabs": false,
   "semi": true,
   "singleQuote": false,
   "trailingComma": "all",
   "bracketSpacing": true,
   "jsxSingleQuote": false,
   "arrowParens": "always"
   }
   ```

   - prettierignore create file

   ```
   node_modules
   .env
   ```

4. To use module way in package.json
   ```
   {
   "name": "projectcamp",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "type": "module",
   //TYPE NEED TO ADD 
   "scripts": {
   "start": "node index.js"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "dependencies": {
   "cors": "^2.8.5",
   "dotenv": "^16.4.7",
   "express": "^4.21.2",
   "express-validator": "^7.2.1",
   "mongoose": "^8.13.1"
   },
   "devDependencies": {
   "prettier": "^3.5.3"
   }
   }
   ```

5. create .env file (optinal .env.example or .env.local)

6. create public folder for the static file 
    - images 
    - fevicon
    - logo

            git ignores the empty folder so create 
                - .gitkeep file

7. All code will be in src folder 
    ```
    mkdir controllers db middlewares models routes utils validators 
    ```
8. In src -- > index.js and app.js for the code sagrigation 

    ``` js 
    app.js
    import express from "express";

    const app = express;

    export default app;
    ```

    ``` js 
    index.js
    import app from "./app.js"

    import dotenv from "dotenv"

    dotenv.config({
        path:"./.env"
    })
    //awlays give the path becaouse verbose code is always good
    ```