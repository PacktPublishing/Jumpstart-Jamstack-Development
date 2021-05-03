import React, {useState} from "react";

function EventForm (props) {
  const [isVisible, toggleVisible] = useState(true)

  return (
    <form name='propose-event' method='POST' data-netlify='true' >
      <input type='hidden' name='form-name' value='propose-event' />
      <div className='field'>
        <label className='label'>Full name:
          <input className='input' type='text' name='name'/>
        </label>
      </div>
      <div className='field'>
        <label className='label'>Email:
          <input className='input' type='email' name='email'/>
        </label>
      </div>
      <div className='mt-10 block'>
        <label className='label'>Event Title:
          <input className='input' type='text' name='eventTitle'/>
        </label>
      </div>
      <div className='mt-10 block'>
        <label className='label'>Date:
          <input className='input' type='datetime-local' name='date'/>
        </label>
      </div>
      <div className='mt-10 block'>
        {isVisible && <label className=''>Event Venue:
          <select className='form-select block w-full mt-1' name='venue' id={`venue`}>
            {props.venueNodes &&
            props.venueNodes.map((venue) => (
              <option value={venue._id}>{venue.name}</option>
            ))}
          </select>
        </label>
        }
      </div>
      <div className='mt-10 block'>
        <label className=''>Is Event Virtual?
          <input onClick={() => toggleVisible(!isVisible)} className='form-checkbox ml-3 h-6 w-6' type='checkbox' name='virtual'/>
        </label>
      </div>
      <div className='field'>
        <label className='mt-10 block'>Event url:
          <input className='input' type='text' name='eventUrl'/>
        </label>
      </div>
      <div className='mt-10 block'>
        <label className='label'>Message:
          <textarea className='textarea' name='message'></textarea>
        </label>
      </div>
      <div className='mt-10 block'>
        <button className='button' type='submit'>Send
        </button>
      </div>
    </form>

)
}

EventForm.defaultProps = {
  title: '',
  venueNodes: [],
}
export default EventForm
