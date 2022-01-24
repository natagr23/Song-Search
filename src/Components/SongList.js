import React, { memo, useEffect } from 'react'; //memo memoriza los componentes con base en sus propiedades, para que los componentes no vuelvan a renderizarse
import SongItem from './SongItem';

const SongList = memo(({ songValues /*handleDelete*/ }) => {
  //memo utilizarla cuando se tienen muchos elementos en una lista
  //cuando un componente llama a una API, que no este realizando petición tras petición

  useEffect(() => {
    // console.log('List render')
  });

  return (
    <ul>
      {songValues.map((songValue) => (
        <SongItem
          key={songValue.id}
          songValue={songValue}
          // handleDelete={handleDelete}
        /> //enviamos la propiedad
      ))}
    </ul>
  );
});

export default SongList;
