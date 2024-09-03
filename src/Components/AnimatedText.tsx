import { useEffect, useState, FC } from 'react';
import { motion } from 'framer-motion';

type AnimatedTextProps = {
    joke: string;
};

const AnimatedText: FC<AnimatedTextProps> = ({ joke }) => {
    const [visibleText, setVisibleText] = useState('');

    useEffect(() => {
        if (joke) {
            setVisibleText('');
            const timeoutIds = joke
                .split('')
                .map((letter: string, index: number) =>
                    setTimeout(() => {
                        setVisibleText((prev) => prev + letter);
                    }, index * 10)
                );

            return () => {
                timeoutIds.forEach(clearTimeout);
            };
        }
    }, [joke]);

    const letterAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.01,
            },
        }),
    };

    return (
        <div className='h-10 my-16 max-w-[1000px] text-center'>
            {visibleText.length === 0 ? (
                <p>Click the button...</p>
            ) : (
                visibleText.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        custom={index}
                        initial='hidden'
                        animate='visible'
                        variants={letterAnimation}
                    >
                        {letter}
                    </motion.span>
                ))
            )}
        </div>
    );
};

export default AnimatedText;
