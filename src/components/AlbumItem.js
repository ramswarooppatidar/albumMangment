import React, { useState } from 'react';
import { updateAlbum, deleteAlbum } from '../services/api';
import styles from "../styles/AlbumList.module.css";

const AlbumItem = ({ album, setAlbum }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(album.title);

  const handleUpdate = async () => {
    const updatedAlbum = { ...album, title };
    await updateAlbum(album.id, updatedAlbum);
    setAlbum((prevAlbums) =>
      prevAlbums.map((a) => (a.id === album.id ? updatedAlbum : a))
    );
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteAlbum(album.id);
    setAlbum((prevAlbums) => prevAlbums.filter((a) => a.id !== album.id));
  };

  return (
    <li className={styles["list-group-item"]}>
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <span>{album.title}</span>
      )}
      <div className={styles["button-group"]}>
        {isEditing ? (
          <>
            <button className={styles.save} onClick={handleUpdate}>
              Save
            </button>
            <button className={styles.cancel} onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <button className={styles.edit} onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className={styles.delete} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default AlbumItem;
