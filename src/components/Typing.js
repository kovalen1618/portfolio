import { useState, useEffect } from 'react';

import './Typing.css';

function Typing(props) {
  // Current Message index (Web Developer, Coding Instructor, Game Developer)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  // Current index of character within message (W, e, b,  , D, e, v, e,...)
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  // Current message
  const [currentMessage, setCurrentMessage] = useState('');
  // To Type or not to Type
  const [type, setType] = useState(true);

  useEffect(() => {
    const message = props.messages[currentMessageIndex];

    // If type === true, then typeCharacters will add each character of the message to itself until it reaches its full length
    const typeCharacters = () => {
      if (currentCharacterIndex < message.length) {
        setCurrentMessage(currentMessage + message[currentCharacterIndex]);
        setCurrentCharacterIndex(currentCharacterIndex + 1);
      } else {
        setTimeout(() => {
          setType(false)
        }, 2000);
      }
    }

    // If type === false, then deleteCharacters will display only a slice of the full message, diminishing each render
    const deleteCharacters = () => {
      if (currentCharacterIndex !== 0) {
        setCurrentMessage(currentMessage.slice(0, currentCharacterIndex - 1));
        setCurrentCharacterIndex(currentCharacterIndex - 1);
      } else {
        setCurrentMessageIndex(currentMessageIndex + 1);
        setType(true);
      }
    }

    // Conditionals for typing or deleting
    if (type === true) {
      if (currentMessageIndex === props.messages.length) {
        setCurrentMessageIndex(0);
      } else {
        setTimeout(typeCharacters, 100)
      }
    }
    
    if (type === false) {
      setTimeout(deleteCharacters, 50)
    }
    
  }, [currentCharacterIndex, type, currentMessageIndex])

  return (
    <div>
      {currentMessage}
      <span className='blinking-cursor'>|</span>
    </div>
  );
}

export default Typing;
