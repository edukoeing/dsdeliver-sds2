import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as IntagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';

function Footer() {
    return (
        <footer className="main-footer">
            Todos os direitos reservados: Eduardo Lopes ©
            <div className="footer-icons">
                <a href="https://www.youtube.com/user/edukoeing" target="_new">
                  <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/eduardo-lopes-14606039/" target="_new">
                  <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/lopesedu08" target="_new">
                  <IntagramIcon />
                </a>
            </div>
        </footer>
    )

}

export default Footer;