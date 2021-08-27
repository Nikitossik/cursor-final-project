import {MessageContainer} from '../styles';
import messageImage from '../../assets/empty-paper-sheet.svg';

function MessageEmpty ({messageText}) {
    return(
        <MessageContainer>
            <h2 className="message-title">{messageText}</h2>
            <img className='message-image' src={messageImage} alt="" />
        </MessageContainer>
    )
}

export default MessageEmpty;