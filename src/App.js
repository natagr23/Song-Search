import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import SongList from './Components/SongList';
import SongTable from './Components/SongTable';

//memo memoriza un componente, useMemo memoriza un valor calculado o el resultado de una función
//useCallback memoriza una función para no volver a definirla en cada render
//use callback siempre que se pase una función como argumento de un efecto, y cuando se pase una función
//por props a un compomente memorizado

const InitialsongsValues = [
  {
    id: 1,
    SongTitle: 'una canción para ti',
    artist: 'Los de Adentro',
    year: '2000',
  },
  {
    id: 2,
    SongTitle: 'Suerte',
    artist: 'Shakira',
    year: '2000',
  },
  {
    id: 3,
    SongTitle: 'a Dios le Pido',
    artist: 'Juanes',
    year: '2000',
  },
  {
    id: 4,
    SongTitle: 'El Carpintero',
    artist: 'Andrés Cepeda',
    year: '2000',
  },
];

const App = () => {
  const [songValues, setSongValues] = useState(InitialsongsValues);
  const [text, setText] = useState('');

  // const handleAdd = () => {
  //   const newSong = { id: Date.now(), SongTitle: text }
  //   setSongValues([...songValues, newSong]) //spread operator, le mandamos los objetos existentes
  // }

  // const handleDelete = useCallback((songValueId) => {
  //   setSongValues(songValues.filter(songValue => songValue.id !== songValueId))
  // }, [songValues])

  // const handleDelete = (songValueId) => {
  //   setSongValue(songValues.filter(songValue => songValue.id !== songValueId))
  // }

  // const handleSearch = () => {
  //   setSearch(text);
  // };

  const searchsongHandler = (event) => {
    event.preventDefault();
    setText('');
  };

  const searchChangeHandler = (event) => {
    setText(event.target.value);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing any key
    searchsongHandler();
  };

  //use callback almacena directamente la definición de la función, guardar una función memorizada, evitar re-renderizados cuando usamos useMemo

  const filteredSongs = useMemo(
    () =>
      //useMemo almacena el valor que retorna una función

      songValues.filter((songValue) => {
        // console.log('filter process')
        return songValue.SongTitle.toLowerCase().includes(text.toLowerCase());
      }),
    [text, songValues]
  );

  const printSongs = useCallback(() => {
    console.log('changed Songs', songValues);
  }, [songValues]);

  useEffect(() => {
    //efecto se actualiza cada vez que su componente hace un render
    // console.log('App render')
  });

  useEffect(() => {
    printSongs();
  }, [songValues, printSongs]);

  // const { textSong } = songValues;

  return (
    <div className="p-3 mb-2 bg-light text-dark">
      <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Busca tus canciones Favoritas
      </h1>
      <div className="container mb-2">
        <input //vincular con un estado
          type="text"
          value={text}
          onChange={searchChangeHandler}
          className="form-control"
          onKeyPress={handleKeypress}
        />
      </div>

      <button onClick={searchsongHandler} className="btn btn-primary mb-2">
        Search
      </button>

      <table class="w-full whitespace-no-wrap table-auto">
        <thead>
          <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th class="px-4 py-3">Song</th>
            <th class="px-4 py-3">Artist</th>
            <th class="px-4 py-3">Year</th>
          </tr>
        </thead>
        <SongTable songValues={filteredSongs} />
        {/*{' '} */}
      </table>
      {/* <hr></hr>
      <div className="container-fluid ">
        <SongList songValues={filteredSongs} />{' '}
      </div> */}
    </div>
  );
};

export default App;
