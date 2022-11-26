import { Container } from "./styles";

export const SearchList = (): JSX.Element => (
  <Container>
    <input type="search" placeholder="Digite aqui..." />

    <ul>
      <li>
        <input
          type="checkbox"
          name="Casa Alugadas"
          id=""
          placeholder="Qualquer coisa"
        />
        <p>Alugadas</p>
      </li>
      <li>
        <input
          type="checkbox"
          name="Casa Alugadas"
          id=""
          placeholder="Qualquer coisa"
        />
        <p>Pronto para morar</p>
      </li>
      <li>
        <input
          type="checkbox"
          name="Casa Alugadas"
          id=""
          placeholder="Qualquer coisa"
        />
        <p>Em construção</p>
      </li>
    </ul>
  </Container>
);
