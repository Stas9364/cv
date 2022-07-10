import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {Projects} from "./Projects/Projects";

export const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
};
