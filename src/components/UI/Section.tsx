import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="mt-16">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-10 md:px-24">
        {children}
      </div>
    </section>
  );
};

export default Section;
