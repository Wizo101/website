import './footer.scss';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone,  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <FaFacebookF />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaLinkedin />
          </a>
          <a href="#" className="me-4 text-reset">
            <FaGithub />
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FaGem className="me-3" /> WideScope</h6>
              <p>
                Description
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p><a href="#!" className="text-reset">A4</a></p>
              <p><a href="#!" className="text-reset">Magazines</a></p>
              <p><a href="#!" className="text-reset">Portfolios</a></p>
              <p><a href="#!" className="text-reset">Leaflets</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">links</h6>
              <p><a href="#!" className="text-reset">Home</a></p>
              <p><a href="#!" className="text-reset">Price Estimator</a></p>
              <p><a href="#!" className="text-reset">Products</a></p>
              <p><a href="#!" className="text-reset">About Us</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FaHome className="me-3" /> 142, 46 Pinatubo Street. Barangay Barangka Ilaya, Mandaluyong City 1550 Philippines</p>
              <p><FaEnvelope className="me-3" /> neo.wsps@gmail.com</p>
              <p><FaPhone className="me-3" /> 63+ 2 7940-2629</p>

            </div>
          </div>
        </div>
      </section>
      
    </footer>
  );
};

export default Footer;
