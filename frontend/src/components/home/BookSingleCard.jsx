import React from 'react'
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle, BiShow } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import { enqueueSnackbar } from 'notistack';

const BookSingleCard = ({ book }) => {

    const [showModal, setShowModal] = useState(false);

    const handlePdfClick = () => {
        if (book.pdfURL) {
            window.open(book.pdfURL, '_blank');
        } else {
            enqueueSnackbar('No PDF available for this book', { variant: 'error' });
        }
    };

    return (
        <div
            key={book._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                {book.category}
            </h2>
            <h4 className='my-2 text-gray-500'>{book._id}</h4>
            <div className='w-full h-[300px] flex justify-center items-center mb-4'>
                <img
                    src={book.imageURL || 'https://edit.org/images/cat/book-covers-big-2019101610.jpg'}
                    alt={book.title}
                    className='w-[200px] h-[300px] object-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl'
                    onClick={handlePdfClick}
                    title={book.pdfURL ? 'Click to open PDF' : 'No PDF available'}
                />
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.author}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)} />
                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                </Link>

            </div>
            {
                showModal && (
                    <BookModal book={book} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    );
}

export default BookSingleCard