import styles from './Contact.module.scss';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
      </Helmet>
      <Header />
      <main className={styles.contactPage}>
        <section className={styles.contact}>
          <h1 className={styles.pageTitle}>Contact</h1>

          <div className={styles.contactList}>
            <div className={styles.contactEmail}>
              <span>
                <BsFillEnvelopeFill /> Email
              </span>
              <a href="mailto:t.koprivnik@gmail.com">t.koprivnik@gmail.com</a>
            </div>

            <div className={styles.contactPhone}>
              <span>
                <BsFillTelephoneFill /> Phone
              </span>
              <a href="tel:0038651412337">(+386)51 412 337</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
