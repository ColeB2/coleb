import React from "react";

const useOutsideClick = (callback:any) => {
    const ref = React.useRef();

    React.useEffect(() => {
        const handleClick = (event:any) => {
            if (ref.current && !ref.current.contains(event.target)){
                callback();
            }
        }
    

    document.addEventListener('click', handleClick, true);

    return () => {
        document.removeEventListener('click', handleClick, true)
    };

    }, [ref]);
    return ref
}

export default useOutsideClick;