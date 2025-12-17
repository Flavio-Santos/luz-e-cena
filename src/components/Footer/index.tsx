import FooterLogo from './FooterLogo';
import FooterInfo from './FooterInfo';
import styles from './Footer.module.css';
import SubFooter from './SubFooter';

const Footer = () => {
  return (
    <footer>
      <div className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterInfo />
        </div>
      </div>
      <SubFooter />
    </footer>
  );
};

export default Footer;
