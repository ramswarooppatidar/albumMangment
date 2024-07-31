import { useState, useEffect } from "react"
import { deleteAlbum, getAlbum } from "../services/api"
import styles from "../styles/AlbumList.module.css"
import AlbumForm from "./AlbumForm"
import AlbumItem from "./AlbumItem"
const AlbumList=()=>{
    const [album, setAlbum] = useState([])
    useEffect(()=>{
        fetchAlbum()
    }, [])
    const fetchAlbum = async ()=>{
        const response = await getAlbum();
        setAlbum(response.data)
    }
    // return(
    //     <>
    //           <h1>Album List</h1>
    //           <AlbumForm setAlbums={setAlbum}/>
    //     <table className={styles.table}>
    //         <tr>
    //             <th>UserId</th>
    //             <th>id</th>
    //             <th>title</th>    
    //         </tr>
    //     {album.map((alb) => {
    //         return(
    //             <tr>
    //                 <td>{alb.userId}</td>
    //                 <td>{alb.id}</td>
    //                 <td>{alb.title}</td>
    //             </tr>
    //         )
    //     })}
    //     </table>    
    //     </>
    //  )
    return (
        <div className={styles.container}>
          
          <AlbumForm className={styles.formContainer}
          setAlbum={setAlbum} />
          <h2>Album List</h2>
          <div className={styles.listContainer}>
              <ul 
              // className={styles.list-group}
              >
                {album.map((album) => (
                  <AlbumItem key={album.id} album={album} setAlbum={setAlbum} />
                ))}
              </ul>
          </div>
          
        </div>
      );
    
}
export default AlbumList;