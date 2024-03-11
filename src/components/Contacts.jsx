import { Section, ContactContainer, OverlayContainer } from '/src/components';
import { contacts as data } from '/src/assets/data';

export const Contacts = () => {
  return (
    <Section>
      <h2>Contacts</h2>
      <ul className='no-border'>
        {data.map((contact, i) => (
          <ContactContainer key={`contacts-${i}`}>
            <OverlayContainer {...contact} />
          </ContactContainer>
        ))}
      </ul>
    </Section>
  );
};
