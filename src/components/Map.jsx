import { useTranslation } from '../hooks/useTranslation';
import './Map.css';

const Map = () => {
  const { t } = useTranslation();
  
  // Static Google Maps URL showing both locations in Bishkek
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.858556729456!2d74.5978!3d42.8723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d4a0a0a0a1%3A0x1234567890abcdef!2sOkurmen%20IT%20Academy!5e0!3m2!1sen!2skg!4v1640995200000!5m2!1sen!2skg`;

  return (
    <div className="map-container">
      <iframe
        className="map-iframe"
        src={mapUrl}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t('mapTitle')}
      ></iframe>
      <div className="map-locations">
        <div className="map-location">
          <h4 className="map-location-title">1. Okurmen.IT</h4>
          <p className="map-location-address">{t('turusbekovaAddress')}</p>
        </div>
        <div className="map-location">
          <h4 className="map-location-title">2. Okurmen Kids</h4>
          <p className="map-location-address">{t('tabysalievaAddress')}</p>
        </div>
      </div>
    </div>
  );
};

export default Map;