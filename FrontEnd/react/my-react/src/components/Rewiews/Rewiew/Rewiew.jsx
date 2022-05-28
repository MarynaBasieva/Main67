import styled from 'styled-components';

//console.log(props.name);

const  Rewiew = (props) =>{
    return(
        <div className="Rewiew">
            <span className="RewiewName">{props.name}</span>
            <div className="RewiewMassage">{props.massage}</div>
        </div>
    );
}



export default  Rewiew;