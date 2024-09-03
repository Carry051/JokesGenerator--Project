import { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [joke, setJoke] = useState([]);

    const getJoke = () => {
        axios
            .get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' },
            })
            .then((res) => setJoke(res.data.joke))
            .catch((err) => console.error(err));
    };

    return (
        <div className='text-4xl text-white flex flex-col h-screen items-center justify-center gap-10'>
            <h1 className='text-7xl flex gap-6'>
                <p className='first-letter:text-green-500 '>Jokes</p>
                <p className='first-letter:text-green-500'>Generator</p>
            </h1>
            <div className='h-10 my-16 max-w-[1000px] text-center'>
                <p>{joke.length === 0 ? <p>Click the button...</p> : joke}</p>
            </div>
            <button
                className='text-white border-2 p-4  hover:bg-green-500 rounded-lg'
                onClick={getJoke}
            >
                Get Joke
            </button>
        </div>
    );
};

export default App;
