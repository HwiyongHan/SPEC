import React from 'react';
import { styled } from 'styled-components';
import img from '../../static/images/mockImage.png';
import Filter from '../common/Filter';
import Like from '../common/Like';
import DateUser from '../common/DateUser';
import Language from '../common/Language';
import useNav from '../../hooks/useNav';
import Tag from '../common/Tag';
import EmployBadge from '../common/EmployBadge';

const StyleAboutPortfolioCard = styled.div`
  height: 35rem;
  width: 60rem;
  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-color: white;
  margin: 0 auto;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  .center {
    width: 60rem !important;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem !important;
  }
  h3 {
    cursor: pointer;
    font-size: 2rem;
    word-break: break-all;
    font-weight: var(--nanum-semi-bold);
  }
  .skill {
    display: flex;
    gap: 0.6rem;
  }
  .date {
    font-size: 1.6rem;
  }
`;

export default function AboutPortfolioCard({ portfolio }) {
  const { author, created_At, id, isEmploy, language, likes, tag, title, titleImg } = portfolio;
  const { toPortfolioDetail } = useNav();
  return (
    <StyleAboutPortfolioCard $background={titleImg || img}>
      {isEmploy && <EmployBadge />}
      <Filter $background="#00000080" />
      <Language language={language} size={'2rem'} />
      <div className="center">
        <h3 onClick={() => toPortfolioDetail(id)}>{title}</h3>
        <div className="skill">
          {tag.map((tag) => (
            <Tag key={tag} text={tag} type="portfolio" />
          ))}
        </div>
        <div className="action row">
          <Like likes={likes} className="likes" />
          <DateUser date={created_At} user={author} size={'1.3rem'} />
        </div>
      </div>
    </StyleAboutPortfolioCard>
  );
}
