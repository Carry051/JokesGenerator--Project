import { useState } from 'react';

import axios from 'axios';
import { motion } from 'framer-motion';
import AnimatedText from './Components/AnimatedText';

const App = () => {
    const [joke, setJoke] = useState('');

    const getJoke = () => {
        axios
            .get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' },
            })
            .then((res) => {
                setJoke(res.data.joke);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className='text-4xl text-white flex flex-col h-screen items-center justify-center gap-10'>
            <h1 className='text-7xl flex gap-6'>
                <motion.p
                    className='first-letter:text-green-500 '
                    animate={{ y: [5, -5, 5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    Jokes
                </motion.p>
                <motion.p
                    className='first-letter:text-green-500'
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                >
                    Generator
                </motion.p>
            </h1>
            <AnimatedText joke={joke} />
            <motion.button
                animate={{ x: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                className='text-white border-2 p-4  hover:bg-green-500 rounded-lg'
                onClick={getJoke}
            >
                Get Joke
            </motion.button>
        </div>
    );
};

export default App;
