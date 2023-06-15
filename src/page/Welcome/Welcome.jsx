import React, { useState } from 'react'
import { WalletApi } from '../../api/wallets/walletApi'
import { Button } from '../../components/button/Button'
import { Input } from '../../components/input/Input'
import { useAuth } from '../../core/Auth/AuthProvider'
import { useInput } from '../../custom-hooks/useInput'
import { WalletTypeSelect } from '../wallet/components/WalletTypeSelect'

export const WelcomePage = () => {
  const { refetchUser } = useAuth()
  const [name, onNameChange] = useInput('')
  const [selectedType, setSelectedType] = useState(null)
  const [domainErrors, setDomainErrors] = useState({})
  const isLoading = false

  const onSubmit = async (e) => {
    e.preventDefault()

    await WalletApi.createWallet({
      logo_type: selectedType.value,
      name: name,
    })

    refetchUser()
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="max-w-800px flex">
        <div className="mx-20px grow flex justify-center flex-col align-center pb-10">
          <div className="m-auto grow text-center md:p-5 py-8 md:py-10 bg-primary-inverse border border-gray-200 rounded-2xl shadow">
            <p className="text-2xl text-headline mb-4 md:mb-10">
              Let's setup your first wallet
            </p>
            <div className="flex flex-col-reverse md:flex-row text-paragraph">
              <div className="grow basis-50% min-w-0">
                <form
                  className="flex flex-col px-20px"
                  onSubmit={onSubmit}
                >
                  <Input
                    placeholder="Wallet"
                    name="name"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    error={domainErrors?.wallet}
                    disabled={isLoading}
                  />
                  <WalletTypeSelect
                    className="mb-4"
                    label="Type"
                    defaultValue={selectedType}
                    onChange={setSelectedType}
                  />
                  <Button
                    className="btn btn-primary rounded-sm mb-4"
                    type={'submit'}
                    disabled={isLoading}
                    isLoading={isLoading}
                  >
                    Create
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
