import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '../components/GoogleLogin'
import { RegisterInput } from './RegisterInput'

export const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="max-w-800px flex">
        <div className="mx-20px grow flex justify-center flex-col align-center pb-10">
          <img
            src="/svgs/moneta-label.svg"
            className="w-28 mx-auto mb-20px sm:mb-40px"
          />
          <div className="m-auto grow text-center md:p-5 py-8 md:py-10 bg-primary-inverse border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <p className="text-2xl text-headline mb-4 md:mb-10">Register</p>
            <div className="flex flex-col-reverse md:flex-row text-paragraph">
              <div className="grow basis-50% min-w-0 flex flex-col">
                <p className="m-2 md:mb-4">Sign up with Google</p>
                <GoogleLogin />
              </div>
              <div className="bg-secondary mx-20px my-10px md:m-0 h-1px md:h-auto grow md:flex-none md:w-1px"></div>
              <div className="grow basis-50% min-w-0">
                <p className="m-2 md:mb-4">Sign up a Moneta account</p>
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
