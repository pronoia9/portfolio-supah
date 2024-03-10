import { ContactContainer, OverlayContainer } from '/src/components';
import { contacts as data } from '/src/utils/data';

export const Contacts = () => {
  return (
    <section>
      <h2>Contacts</h2>
      <ul className='no-border'>
        {data.map((contact, i) => (
          <ContactContainer key={`contacts-${i}`}>
            <OverlayContainer {...contact} />
          </ContactContainer>
        ))}
      </ul>
    </section>
  );
};
