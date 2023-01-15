import styled from 'styled-components';
import Tours from './Tours';
import { useGlobalContext } from '../context';

const Home = () => {
  const { tours } = useGlobalContext();

  return (
    <Wrapper className="home">
      <header>
        <h1>Mobile First</h1>
      </header>

      <div className="tour-con">
        {tours.map((tour) => {
          return <Tours key={tour.id} {...tour} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  header {
    position: relative;
    width: 100%;
    background: var(--title-bg);
    padding: 10px;
    h1 {
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      font-size: 35px;
      letter-spacing: 2px;
    }
  }
  .tour-con {
    position: relative;
    width: 100%;
    margin: 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 850px) {
    .tour-con {
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
`;

export default Home;
