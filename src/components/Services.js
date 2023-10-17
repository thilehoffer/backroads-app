import Title from './Title';
import { services } from 'data';
import Service from './Service';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services"></Title>

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return <Service key={id} icon={icon} title={title} text={text} />;
        })}
      </div>
    </section>
  );
};
export default Services;
