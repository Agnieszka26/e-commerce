import styles from './Layout.module.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

export interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Navbar sampleTextProp={''} />
      <main>{children}</main>
      <Footer sampleTextProp={''} />
    </>
  );
};

export default Layout;
