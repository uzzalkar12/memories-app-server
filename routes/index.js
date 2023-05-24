import express from "express";

import posts from './posts.js';
import categories from './categories.js';

// let rootRouter = express.Router();

// rootRouter.use('/posts', );
// rootRouter.use('/categories', categories);

// export default rootRouter;

module.exports = (app) => {
    app.use("/posts", posts);
    app.use("/categories", categories);
};
