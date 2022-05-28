import styled from 'styled-components';
import Rewiew from './Rewiew/Rewiew.jsx';

const Reiews = styled.div`
`
const  Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    `

const  Rewiews = () =>{
    return(
        <div>
           <Reiews>
              <Container>
                    <div>
                        <Rewiew name='Olga' massage='Lorem ipsum Olga' />
                        <Rewiew name='Anna' massage='Lorem ipsum Anna' />
                        <Rewiew name='Oleg' massage='Lorem ipsum Oleg' />
                        <Rewiew name='Viktor' massage='Lorem ipsum Viktor' />
                        <Rewiew name='Pavlo' massage='Lorem ipsum Pavlo' />
                        <Rewiew name='Grisha' massage='Lorem ipsum Grisha' />
                    </div>

              </Container>
           </Reiews>
        </div>
    );
}

export default  Rewiews;