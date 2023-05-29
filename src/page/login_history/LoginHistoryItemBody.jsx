import React from 'react'

function LoginHistoryItemBody({ time, location_name, ip_address }) {
  return (
    <div>
      <p className="font-medium text-xs text-primary">{time}</p>
      <h5 className="font-bold text-base text-headline mt-15px">
        {location_name}
      </h5>
      <p className="font-normal text-sm text-paragraph mt-7px">{ip_address}</p>
    </div>
  )
}

export default LoginHistoryItemBody
