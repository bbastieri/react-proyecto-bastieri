import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = ()=>{
    return(
        <footer>
            <a href="https://facebook.com/Calypsolenceria" target="_blank" rel='noreferrer'><FacebookIcon/></a>
            <a href="https://www.instagram.com/calypsolenceriamagika/" target="_blank" rel='noreferrer'><InstagramIcon/></a>
            <a href="mailto:calypsolenceriamagika@gmail.com"><EmailIcon/></a>
        </footer>
    )
}

export default Footer;