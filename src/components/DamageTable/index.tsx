
import { Container } from './styles';

function DamageTable() {
  return (
    <Container>
      <h3>Ataques e Conjurações</h3>
      <table>
        <tr>
          <th>Arma</th>
          <th>Bônus</th>
          <th>Dano</th>
          <th>Alcance</th>
        </tr>
        <tr>
          <td>Martelo de Guerra</td>
          <td>+4</td>
          <td>1d8 + 5 Concussão</td>
          <td>1.5m</td>
        </tr>
        <tr>
          <td>Machadinho de Mão</td>
          <td>+4</td>
          <td>1d6 + 5 Cortante</td>
          <td>20m/60m</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </table>
    </Container>
  );
};

export default DamageTable;
