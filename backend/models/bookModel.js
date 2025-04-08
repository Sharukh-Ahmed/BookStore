import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        imageURL: {
            type: String,
            default: 'https://edit.org/images/cat/book-covers-big-2019101610.jpg' // default image
        },
        pdfURL: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);