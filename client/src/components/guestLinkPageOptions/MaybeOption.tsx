import { useState } from 'react';
import {
  putSuggestionMsg,
  putSuggestionBoxCounter,
} from '../../utils/apis/wannagoApiServices/putWannaGos';
import '../../css/MaybeOption.css';

type Props = { id: any, suggestionBoxCounter: number, ownerName: string };

const MaybeOption = ({ id, suggestionBoxCounter, ownerName } : Props) => {
  const [msgSent, setMsgSent] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const msg = e.target.suggestion.value;
    console.log('this is msg', msg);
    if (!msg.replace(/\s/g, '').length) {
      return;
    }
    try {
      await putSuggestionMsg(msg, id);
      await putSuggestionBoxCounter(id, ++suggestionBoxCounter);
      console.log(suggestionBoxCounter);
      setMsgSent(!msgSent);
    } catch (e) {
      console.log(`Error in MaybeOption.js, trying to send the suggestion to backend to put in db. ${e}`);
    }
    e.target.suggestion.value = '';
  };

  return (
    <>
      <h3>
        Let {ownerName} know if you have any suggestion. Remember to say who you are.
      </h3>
      {msgSent ? (
        <h3 className='textGuestLink'>We'll let {ownerName} know</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='maybeTextArea'>
            <label htmlFor='suggestions-text-area'></label>
            <textarea
              id='suggestions-text-area'
              name='suggestion'
              placeholder='write your suggestion here'
              autoFocus
              required
            ></textarea>
            <button
              title='Send'
              className='button maybe'
              type='submit'
            >
              Send
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default MaybeOption;