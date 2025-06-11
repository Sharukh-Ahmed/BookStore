import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [pdfURL, setPdfURL] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://bookstore-backend-itmj.onrender.com/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setCategory(response.data.category);
        setImageURL(response.data.imageURL);
        setPdfURL(response.data.pdfURL);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);


  const handleEditBook = () => {
    const data = {
      title,
      author,
      category,
      imageURL,
      pdfURL,
    };
    setLoading(true);
    axios
      .put(`https://bookstore-backend-itmj.onrender.com/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book edited Successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert('An Error occured please check console');

      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p4 mx-auto'>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-x1 mr-4 text-gray-500'>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Book Image URL</label>
          <input
            type='text'
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
            placeholder='Enter book cover image URL'
          />
        </div>
        <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>PDF URL</label>
                <input
                    type='text'
                    value={pdfURL}
                    onChange={(e) => setPdfURL(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />
            </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Edit</button>

      </div>
    </div>
  )
}

export default EditBook