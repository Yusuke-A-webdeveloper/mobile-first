import { useGlobalContext } from '../context';
import { useState } from 'react';
import Loading from './Loading';
import styled from 'styled-components';

const Tours = ({ id, name, info, image, price }) => {
  const { loading } = useGlobalContext();
  const [readMore, setReadMore] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <main>
        <div className="img-con">
          <img src={image} alt={name} />
        </div>
        <article>
          <h2>{name}</h2>
          <h4>${price}</h4>
          <p>{readMore ? info : `${info.substring(0, 200)}`}...</p>
          <div className="btn-con">
            <button type="button" onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : 'read more'}
            </button>
          </div>
        </article>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  main {
    max-width: 400px;
    padding: 10px 20px 40px;
    margin-bottom: 50px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    .img-con {
      position: relative;
      width: 100%;
      height: 250px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    article {
      margin-top: 20px;
      h2 {
        color: var(--title-bg);
        font-size: 22px;
        letter-spacing: 1px;
      }
      h4 {
        color: var(--title-bg);
        font-size: 15px;
        letter-spacing: 1px;
      }
      p {
        margin-top: 10px;
      }
      .btn-con {
        text-align: center;
        button {
          width: 150px;
          color: #fff;
          margin-top: 10px;
          padding: 5px;
          font-size: 18px;
          border: none;
          text-transform: capitalize;
          background: var(--title-bg);
          cursor: pointer;
        }
      }
    }
  }
  @media (min-width: 850px) {
    main {
      min-height: 540px;
    }
  }
`;

export default Tours;
