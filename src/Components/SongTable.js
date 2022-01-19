import React, { memo, useEffect } from 'react'; //memo memoriza los componentes con base en sus propiedades, para que los componentes no vuelvan a renderizarse
import SongRow from './SongRow';

const SongTable = memo(({ songValues }) => {
  useEffect(() => {});

  return (
    <tbody>
      {songValues.map((songValue) => (
        <SongRow key={songValue.id} songValue={songValue} />
      ))}
    </tbody>
  );
});

export default SongTable;
