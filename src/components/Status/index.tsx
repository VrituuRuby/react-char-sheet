
import { Container } from './styles';

function Status() {
  return (
    <Container>
      <div>
        <div className='shield'>
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24">
            <path d="M12 0c-2.995 2.995-7.486 4-11 4 0 8.583 5.068 16.097 11 20 5.932-3.903 11-11.417 11-20-3.514 0-8.005-1.005-11-4z"/>
          </svg>
          <h3>CA 13</h3>
        </div>

        <div className="hex">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24">
            <path d="M18 2l6 10.5-6 10.5h-12l-6-10.5 6-10.5z"/>
          </svg>
          <h3>Dado de Vida <br/> 1d8</h3>
        </div>
      </div>
      <h3>Pontos de Vida</h3>
      <div className='health-bar'>
        <h3 className='health-value'>17/17</h3>
        <div className='health-fill' style={{'width': '60%'}}></div>
        
      </div>

      

    </Container>
  );
};

export default Status;
