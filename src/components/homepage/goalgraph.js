import { useState, useEffect } from 'react';
import Goalprogress from './svg/goalprogress'
function Goalgraph() {
    const [progress, setProgress] = useState(285)

    useEffect(()=>{
        setProgress((progress) => progress - 50);
    }, []);
        

    return (
        <Goalprogress  progress={progress}/>
    );
}

export default Goalgraph;