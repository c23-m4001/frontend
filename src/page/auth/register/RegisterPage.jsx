import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/button/Button'
import { RegisterInput } from './RegisterInput'

export const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="max-w-800px flex">
      <div className="mx-20px grow flex justify-center flex-col align-center pb-10">
        <img src="/svgs/moneta-label.svg" className="w-28 mx-auto mb-20px sm:mb-40px" />
        <div className="m-auto grow text-center md:p-5 py-8 md:py-10 bg-primary-inverse border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="text-2xl text-headline mb-4 md:mb-10">Login</p>
          <div className="flex flex-col-reverse md:flex-row text-paragraph">
            <div className="grow basis-50% min-w-0 flex flex-col">
              <p className="m-2 md:mb-4">Sign in with Google</p>
              <Button
                type="button"
                className="mx-20px h-12 px-6 p-2 mb-4 rounded-3xl transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 border border-secondary"
              >
                <div className="relative flex items-center space-x-4 justify-center">
                  <img
                    src="/svgs/google.svg"
                    className="absolute -left-2 w-5"
                    alt="google logo"
                  />
                  <span className="block whitespace-nowrap tracking-wide text-secondary text-sm transition duration-300 group-hover:primary-hover sm:text-base">
                    Continue with Google
                  </span>
                </div>
              </Button>
            </div>
            <div className="bg-secondary mx-20px my-10px md:m-0 h-1px md:h-auto grow md:flex-none md:w-1px"></div>
            <div className="grow basis-50% min-w-0">
              <p className="m-2 md:mb-4">Sign in with Moneta account</p>
              <RegisterInput />
              <p className="text-sm">
                Don't have an account? <Link to="/auth/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
        
        </div>
    </div>
  )
}
