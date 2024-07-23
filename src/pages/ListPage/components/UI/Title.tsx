import React, { useEffect, useState } from "react";

interface Character {
    char: string;
    key: number;
    isSpace: boolean;
}

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const chars: Character[] = Array.from(text).map((char, index) => ({
            char,
            key: index,
            isSpace: char === ' '
        }));
        setCharacters(chars);
    }, [text]);

    const animationStyle = (index: number) => ({
        animationName: 'fadeIn',
        animationDuration: '0.5s',
        animationDelay: `${0.5 + index * 0.05}s`,
        animationFillMode: 'forwards',
        display: 'inline-block',
    });

    return (
        <>
            <style>
                {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
            <h1 className="mt-[20px] mb-[5px] font-bold text-2xl">
                {characters.map((char, index) => (
                    <span
                        key={char.key}
                        style={char.isSpace ? { ...animationStyle(index), width: '0.25em' } : animationStyle(index)}
                    >
                        {char.isSpace ? '\u00A0' : char.char}
                    </span>
                ))}
            </h1>
        </>
    );
};

export default Title;