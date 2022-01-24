import React, { memo, useEffect } from 'react';

const SongItem = memo(({ songValue /*handleDelete*/ }) => {
  //recibimos la propiedad

  useEffect(() => {
    // console.log('Item render ' + songValue.SongTitle)
  });

  return (
    <li>
      <div className="col-md-3 ml-md-auto">{songValue.SongTitle}</div>
      {/* <button onClick={() => handleDelete(songValue.id)} className='btn btn-danger mr-2'>
                Delete
            </button> */}
    </li>
  );
});

export default SongItem;
