import React, { useState } from "react"
 
const useShowPlayers = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = () => {
        setValue(prev => prev + 10);
    };
    return [value, setValue, handleChanges]
}

export default useShowPlayers