import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import './Certificates.css';

const Certificates = () => {
  const { t, tArray } = useTranslation();
  
  const certificates = [
    {
      title: t("standardCert"),
      subtitle: t("standardSub"),
      description: t("standardDesc"),
      icon: "📜",
      color: "var(--primary-color)"
    },
    {
      title: t("goldenCert"),
      subtitle: t("goldenSub"),
      description: t("goldenDesc"),
      icon: "🥇",
      color: "var(--accent-color)"
    }
  ];

  const certFeatures = tArray("certFeatures");

  return (
    <section id="certificates" className="certificates section section--dark">
      <Container>
        <h2 className="section-title">{t('certificatesTitle')}</h2>
        <div className="certificates__content">
          {certificates.map((cert, index) => (
            <div key={index} className="certificates__card">
              <div className="certificates__icon" style={{ color: cert.color }}>{cert.icon}</div>
              <h3 className="certificates__title">{cert.title}</h3>
              <div className="certificates__subtitle">{cert.subtitle}</div>
              <p className="certificates__description">{cert.description}</p>
              <div className="certificates__features">
                {certFeatures.map((feature, idx) => (
                  <div key={idx} className="certificates__feature">{feature}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Certificates;