import React from 'react'
import LoginHistoryItemBody from './LoginHistoryItemBody'
import moment from 'moment/moment'

function LoginHistoryItem({ time, location_name, ip_address }) {
  return (
    <div className="block max-w-600px my-5 mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow">
      <LoginHistoryItemBody
        time={moment(time).format('MMMM Do YYYY, h:mm:ss a')}
        location_name={location_name}
        ip_address={ip_address}
      />
    </div>
  )
}

export default LoginHistoryItem
