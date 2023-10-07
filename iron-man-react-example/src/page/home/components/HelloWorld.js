import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HelloWorld = ({name,children}) => {
    return (
        <>
            <h3><FontAwesomeIcon icon={faStar} /> HelloWorld <FontAwesomeIcon icon={faStar} /></h3>
            <p>hi,my name is : {name},i am prop component.</p>
            <br></br>
            {children}
            <hr></hr>
        </>
    )
}

export default HelloWorld;