import React, { useState } from 'react'
import { Button } from '../../../components/button/Button'
import { Icon } from '@iconify/react'

export const Dropdown = ({ array, labelName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [choosenWallet, setChoosenWallet] = useState(array[0])

  return (
    <>
      <div className="relative flex flex-col justify-evenly border border-secondary rounded-md">
        <label className="text-xs p-1 text-secondary">{labelName}</label>
        <Button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className=""
        >
          <div className="flex items-center p-2 justify-between">
            {choosenWallet.name}
            <Icon icon="gridicons:dropdown" />
          </div>
        </Button>
      </div>
      <div
        className={`${
          isOpen ? 'active' : 'hidden'
        } border border-secondary rounded-md`}
      >
        {array.map((object, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center p-2 justify-between"
              onClick={() => {
                setChoosenWallet(object) && setIsOpen(!isOpen)
              }}
            >
              {object.name}
            </div>
          )
        })}
      </div>
    </>
  )
}
