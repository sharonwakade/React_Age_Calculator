import { Routes , Route} from "react-router-dom";
import App from "./App";
import Calculate from "./Calculate";


const Routing = () =>{

    return (
        <>
        <Routes>
            <Route  exact path="/" element={<App/>}></Route>
            <Route  exact path="/calculate" element={<Calculate/>}></Route>
        </Routes>
        </>
    )

}

export default Routing;