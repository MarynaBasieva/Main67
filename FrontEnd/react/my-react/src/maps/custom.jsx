import React from "react";


function App(){
    return <h1>Mainacademy</h1>
}

const App = () =>{
    return <h1>Mainacademy</h1>
}


function Header(){
    return(
        <a>Home</a>
        <a>News</a>
        <a>Contact</a>
    );
}


const Header = () => {
    return(
        <a>Home</a>
        <a>News</a>
        <a>Contact</a>
);
}

Header()?????







const  Rewiew = (props) =>{
    return(
        <div className="Rewiew">
            <span className="RewiewName">{props.name}</span>
            <div className="RewiewMassage">{props.massage}</div>
        </div>
    );
}



<Rewiew name='Olga' massage='Lorem ipsum Olga' />
<Rewiew name='Anna' massage='Lorem ipsum Anna' />
<Rewiew name='Oleg' massage='Lorem ipsum Oleg' />
<Rewiew name='Viktor' massage='Lorem ipsum Viktor' />
<Rewiew name='Pavlo' massage='Lorem ipsum Pavlo' />
<Rewiew name='Grisha' massage='Lorem ipsum Grisha' />

let obj = {
    name: Olga,
    massage: Lorem ipsum Olga
}
Rewiew(obj);
<Rewiew />
<Rewiew name='Olga' massage='Lorem ipsum Olga' />