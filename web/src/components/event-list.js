import {Link} from 'gatsby'
import React from 'react'
const {format} = require('date-fns')

function EventList (props) {
  return (
  <div>
      <h2 className='font-serif text-4xl font-bold text-gray-800 bb-10'>{props.title}</h2>
      <div className='max-w-full'>
        {props.eventNodes && props.eventNodes.map((node) => {
           let pastEvent =
           new Date(node.dateAndTime) < new Date() ? true : false;
           return <div>
           <div className={`max-w-full shadow-sm mt-3 p-3 ${pastEvent ? 'bg-gray-600' : 'bg-gray-100'}`}>
              <Link to={`/event/${format(node.dateAndTime, 'YYYY/MM')}/${node.id}/`}>Event: <b>{node.name}</b></Link></div>
              <div><i>{node.venue.name}</i> {node.virtual ? '*Virtual Event' : ''} {node.eventURL}</div>
              <div>{node.dateAndTime}</div>
            </div>
          })}
      </div>
    </div>

  )
}

EventList.defaultProps = {
  title: '',
  eventNodes: []
}

export default EventList
