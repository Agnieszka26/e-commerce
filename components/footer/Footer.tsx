import styles from './Footer.module.css';

export interface IFooter {
  sampleTextProp: string;
}

const Footer: React.FC<IFooter> = ({ sampleTextProp }) => {
  return <div className={styles.container}>a to je footer</div>;
};

export default Footer;
