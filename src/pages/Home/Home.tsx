import Button from "../../components/Button/Button";
import MainContainer from "../../components/MainContainer/MainContainer";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const navigateToNewRaffle = () => {
    navigate("/raffle/create");
  };

  return (
    <MainContainer>
      <section>
        <h2>My Raffles</h2>
        <Button variant="solid" onClick={navigateToNewRaffle}>
          New Raffle
        </Button>
      </section>
    </MainContainer>
  );
};

export default Home;
