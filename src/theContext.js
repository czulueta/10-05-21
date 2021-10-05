import {useState} from "react"
const TheContext = React.createContext()

function TheContextProvider(props) {
    const [count, setCount] = useState(0)
    return(
        <TheContext.Provider value={{count}}>
            {props.children}
        </TheContext.Provider>
    )
}
export default {TheContextProvider, TheContext}