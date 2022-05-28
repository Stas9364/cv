import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./My projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

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
