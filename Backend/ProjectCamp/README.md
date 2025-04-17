
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
   "start": "node src/index.js"
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

    const PORT = process.env.PORT || 8000;
    //awlays give the path becaouse verbose code is always good
    ```

    ``` env
        PORT = 8000
    ```
9. Connect to MongooDB
    - In db --> index.js

    ```javascript
    import mongoose from "mongoose"

    const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected")
    } catch (error) {
        console.log("MongoDB Connection failed",error);
        process.exit(1);
        //if the project run without db then fine else need to debug
    }
    }

    export default connectDB;
    ```

10 . Error standards
    - In utility -->api-error.js

    ```javascript
            
    class ApiError extends Error{
        constructor(
            statusCode,
            message = "Something went wrong",
            error =[],
            stack=""
        )   {
            super(message);
            //ATLEST MSG IS REQUIRED
            this.statusCode = statusCode;
            this.message= message;
            this.succss = false;
            this.error = error;
            
        }
    }

        export {ApiError}
    ```

- In utility -->api-response.js

    ```
    class ApiResponse{
        constructor(statusCode, data, message="Success"){
        this.statusCode= statusCode;
        this.data= data;
        this.message = message;
        this.success = statusCode<400;
        }
    }

        export {ApiResponse}
    ```

- In utility -->constant.js
    ```
    export const UserRolesEnum ={
    ADMIN:"admin",
    PROJECT_ADMIN:"project_admin",
    MEMBER: "member",
    }

    export const AvailableUserRoles = Object.values(UserRolesEnum)

    export const TaskStatusEnum ={
    TODO:"todo",
    IN_PROGRESS:"in_progress",
    DONE:"done",
    }

    export const AvaibaleTaskStatus = Object.values(TaskStatusEnum)

    ```

- async handler ; need it later


11. Work on Models

- touch user.models.js task.models.js subtask.models.js project.models.js note.models.js 

12. npm i bcryptjs jsonwebtoken
   - mongoose hook 

13. touch healthcheck.controller.js auth.controller.js note.controller.js project.controller.js task.controller.js

14. $ touch healthcheck.routes.js auth.routes.js note.routes.js project.routes.js task.routes.js

 14.1 AsyncHandler.js
      [[...Error handling ya to trycatch sai hoti ya fir promise sai ]]

15. Validator.js 

16. validator.middleware.js

### Till here boiler code Done 

###part 2

13.1 Auth Controller
        15.1 to validate : validators-->index.js [[...express validator]]



