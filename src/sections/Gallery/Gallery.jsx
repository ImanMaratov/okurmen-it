import { useTranslation } from '../../hooks/useTranslation';
import Container from '../../components/Container';
import './Gallery.css';

const Gallery = () => {
  const { t } = useTranslation();
  
  const images = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    alt: `${t('eduPhoto')} ${i + 1}`,
    placeholderText: `${t('photo')} ${i + 1}`
  }));

  return (
    <section id="gallery" className="gallery section">
      <Container>
        <h2 className="section-title">{t('galleryTitle')}</h2>
        <div className="gallery__content">
          {images.map((image) => (
            <div key={image.id} className="gallery__item">
              <div className="gallery__image-placeholder">
                <div className="gallery__image-content">{image.placeholderText}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;