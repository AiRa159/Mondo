import './App.css';
import {Routes, Route} from "react-router-dom";
import {MainPageRoutes} from "./routes/mainPageRoutes";
import {BasicPageRoutes} from "./routes/basicPageRoutes";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPageRoutes/>}/>
                <Route path="*" element={<BasicPageRoutes/>}/>
            </Routes>
        </div>
    );
}

export default App;
