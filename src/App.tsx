import { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [joke, setJoke] = useState([]);

    const getJoke = async () => {
        const res = await axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' },
        });
        setJoke(res.data.joke);
    };

    return (
        <div className='text-4xl text-white flex flex-col h-screen items-center justify-center gap-10'>
            <h1 className='text-7xl mb-10'>Jokes Generator</h1>
            <div className='h-10 mb-10 '>
                <p>{joke.length === 0 ? `Click the button` : joke}</p>
            </div>
            <button
                className='text-white border-2 p-4 hover:text-black hover:bg-white rounded-lg'
                onClick={getJoke}
            >
                Get Joke
            </button>
        </div>
    );
};

export default App;
