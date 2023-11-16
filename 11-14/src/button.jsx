import { useContext } from 'react';
import { CountContext } from './countContext.jsx';

export default function Button({ count, incrementCount }) {

    return (
        // incrementCount() runs it once on load, incrementCount does not
        <button onClick={incrementCount}>I have been clicked {count} times!</button>
    )
}