import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    title: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;