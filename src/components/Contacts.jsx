import { Section, OverlayContainer } from '/src/components';
import { contacts as data } from '/src/assets/data';

export const Contacts = () => {
  return (
    <Section>
      <h2>Contacts</h2>
      <ul className='no-border'>
        {data.map((contact, i) => (
          <div key={`contacts-${i}`}>
            <OverlayContainer {...contact} />
          </div>
        ))}
      </ul>
    </Section>
  );
};
