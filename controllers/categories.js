import Category from "../models/category.js";
import mongoose from "mongoose";

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCategory = async (req, res) => {
    const category = req.body;
    const newCategory = new Category(category);

    try {
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
