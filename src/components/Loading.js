import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <p>Loading...</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 25px;
  }
`;

export default Loading;
