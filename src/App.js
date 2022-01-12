import React, { useState, useEffect, useMemo, useCallback } from 'react';
import SongList from './Components/SongList';

//memo memoriza un componente, useMemo memoriza un valor calculado o el resultado de una función
//useCallback memoriza una función para no volver a definirla en cada render
//use callback siempre que se pase una función como argumento de un efecto, y cuando se pase una función
//por props a un compomente memorizado

const InitialsongsValues = [
  {
    id: 1,
    SongTitle: 'una canción para ti',
    cantante: 'Los de Adentro'
  },
  {
    id: 2,
    SongTitle: 'Suerte',
    cantante: 'Shakira'
  },
  {
    id: 3,
    SongTitle: 'a Dios le Pido',
    cantante: 'Juanes'
  },
  {
    id: 4,
    SongTitle: 'El Carpintero',
    cantante: 'Andrés Cepeda'
  },

];

const App = () => {

  const [songValues, setSongValues] = useState(InitialsongsValues);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const handleAdd = () => {
    const newSong = { id: Date.now(), SongTitle: text }
    setSongValues([...songValues, newSong]) //spread operator, le mandamos los objetos existentea
  }



  const handleDelete = useCallback((songValueId) => {
    setSongValues(songValues.filter(songValue => songValue.id !== songValueId))
  }, [songValues])

  // const handleDelete = (songValueId) => {
  //   setSongValue(songValues.filter(songValue => songValue.id !== songValueId))
  // }

  const handleSearch = () => {
    setSearch(text);
  }

  //use callback almacena directamente la definición de la función, guardar una función memorizada, evitar re-renderizados cuando usamos useMemo

  const filteredSongs = useMemo(() => //useMemo almacena el valor que retorna una función

    songValues.filter(songValue => {
      // console.log('filter process')
      return songValue.SongTitle.toLowerCase().includes(search.toLowerCase())
    })
    , [search, songValues]);

  const printSongs = useCallback(() => {
    console.log('changed Songs', songValues);
  }, [songValues])


  useEffect(() => { //efecto se actualiza cada vez que su componente hace un render
    // console.log('App render')
  })


  useEffect(() => {
    printSongs();
  }, [songValues, printSongs])

  // const { textSong } = songValues;

  return (
    <div className="p-3 mb-2 bg-light text-dark" >

      <h1>Busca tus canciones Favoritas</h1>
      <div className='container mb-2'>


        <input //vincular con un estado
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"

        />

      </div>


      <button onClick={handleSearch} className="btn btn-primary mb-2">
        Search
      </button>

      <button onClick={handleAdd} className="btn btn-success mb-2">
        Add
      </button>

      <div className="container-fluid ">
        <SongList songValues={filteredSongs} handleDelete={handleDelete} />  {/*primero definir aca */}
      </div>

      {/* <ul>
            {InitialsongsValues.map((InitialsongsValues) => (
              <li>
                {InitialsongsValues.SongTitle}
              </li>))} */}
      {/* <li>{InitialsongsValues[0].SongTitle}</li>
            <li>{InitialsongsValues[1].SongTitle}</li>
            <li>{InitialsongsValues[2].SongTitle}</li>
            <li>{InitialsongsValues[3].SongTitle}</li> */}
      {/* </ul> */}

    </div>

  );
}

export default App;
