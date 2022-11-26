import { Navbar } from "../../components/Nav";
import { ApartamentList } from "../../modules/ApartamentList";
import { AsideMenu } from "../../modules/AsideMenu";
import { SearchList } from "../../modules/SearchList";
import { Container } from "./styles";

export const Home = (): JSX.Element => (
  <Container>
    <Navbar />
    <div>
      <AsideMenu />
      <main>
        <SearchList />
        <ApartamentList />
      </main>
    </div>
  </Container>
);
