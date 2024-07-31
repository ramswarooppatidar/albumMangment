import React, { useState } from 'react';
import { addAlbum } from '../services/api';

const AlbumForm = ({ setAlbum}) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAlbum = { title, id : 11, userId: 1 }; // userId is hardcoded for this example
    const response = await addAlbum(newAlbum);
    console.log("response.data :", response.data)
    setAlbum((prevAlbums) => [...prevAlbums, response.data]);
    setTitle('');
  };

  return (
    <>
    <h2>Album form</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Album Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Album
      </button>
    </form>
    </>
    
  );
};

export default AlbumForm;
