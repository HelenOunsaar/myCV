import { Link } from 'react-router-dom';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='footer'>
         <Link to="https://www.linkedin.com/in/helen-õunsaar-429504167/">
            <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link to="https://github.com/HelenOunsaar">
            <FontAwesomeIcon icon={faGithub} />
        </Link> 
    </div>
  )
}

export default Footer