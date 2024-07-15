import React from 'react';
import Section from '../../../components/UI/Section';
import { LinkButton } from '../../../components/UI/Button'; 

const AllRolling: React.FC = () => {
  return (
    <div>
      <Section>
        <div>
          <div className="flex-grow-3 flex-shrink-0 basis-0">
            <h2 className="font-bold text-2xl">최근에 만든 롤링 페이퍼 ⭐️️</h2>
          </div>
        </div>
      </Section>
      <div></div>
      <div className="mt-4">
        <LinkButton path="../post" btnName="나도 만들어보기" />
      </div>
    </div>
  );
};

export default AllRolling;
