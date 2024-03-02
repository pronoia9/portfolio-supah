import { contacts as data } from '/src/utils/data';

export const Contacts = () => {
  return (
    <section>
      <h2>Contacts</h2>
      <ul className='no-border'>
        {data.map((contact, i) => (
          <Contact key={`contacts-${i}`} link={contact.link} name={contact.name} />
        ))}
      </ul>
    </section>
  );
};

export const Contact = ({ link, name }) => {
  return (
    <li>
      {/* <Work link='https://www.shadertoy.com/user/supah' name='Shadertoy' /> */}
    </li>
  );
};
