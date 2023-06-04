import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../Auth/AuthProvider'

const initialActiveWalletContext = {
  activeWallet: null,
  setActiveWalletId: (walletId) => null,
}

const ActiveWalletContext = createContext(initialActiveWalletContext)

export const useActiveWallet = () => useContext(ActiveWalletContext)

export const ActiveWalletProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { currentUser } = useAuth()
  const [activeWallet, setActiveWallet] = useState()

  useEffect(() => {
    if (
      searchParams.get('active_wallet_id') &&
      currentUser?.wallets &&
      currentUser?.wallets.length > 0
    ) {
      setActiveWallet(
        currentUser.wallets.find(
          (wallet) => (wallet.id = searchParams.get('active_wallet_id'))
        )
      )
    } else {
      setActiveWallet(undefined)
    }
  }, [searchParams, currentUser])

  return (
    <ActiveWalletContext.Provider
      value={{
        activeWallet,
        setActiveWalletId: (walletId) => {
          if (walletId) {
            setSearchParams({ active_wallet_id: walletId })
          } else {
            searchParams.delete('active_wallet_id')
            setSearchParams(searchParams)
          }
        },
      }}
    >
      {children}
    </ActiveWalletContext.Provider>
  )
}
