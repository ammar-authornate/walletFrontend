import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styles from '../styles/Home.module.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
