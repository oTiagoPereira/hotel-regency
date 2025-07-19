import ImageHotel from "../../assets/images/img-hotel.svg";
import Button from "../Button";
import {HeroBannerStyles as styles} from "./HeroBanner.style"

function HeroBanner() {
  return (
    <section className={styles.sectionStyle}>

      <div className={styles.containerStyle}>

        <div className={styles.contentStyle}>
          <h1 className={styles.titleStyle}>
            Bem-Vindo ao
            <br />
            <span className={styles.highlightStyle}> Regency Heights </span>
            <br />
            Hotel
          </h1>
          <p className={styles.descriptionStyle}>
            Onde o luxo encontra o conforto. Nossa equipe está preparada para
            proporcionar uma experiência inesquecível, com serviço personalizado
            e atenção aos mínimos detalhes.
          </p>
          <Button label="Explore Nossas Suítes" variant="primary"/>
        </div>

        <div className={styles.imageContainerStyle}>
          <img
            src={ImageHotel}
            alt="Imagem do Hotel Regency Heights"
            className={styles.imageStyle}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
