import express from "express";

import posts from './posts.js';
import categories from './categories.js';

let rootRouter = express.Router();

rootRouter.use('/posts', posts);
rootRouter.use('/categories', categories);

export default rootRouter;