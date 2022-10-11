import styles from './Navbar.module.css';

export interface INavbar {
  sampleTextProp: string;
}

const Navbar: React.FC<INavbar> = ({ sampleTextProp }) => {
  return <div className={styles.container}>To jest navbar</div>;
};

export default Navbar;
