import React from 'react'
import { Link } from 'react-router-dom'
import { LoginInput } from './LoginInput'

export const LoginPage = () => {
  return (
    <div className="grid place-content-center h-screen bg-background">
      <svg
        className="w-28 m-auto"
        width="174"
        height="228"
        viewBox="0 0 174 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="86.5"
          cy="86"
          r="86"
          fill="white"
        />
        <path
          d="M129.177 92.1031L129.494 91.8521L129.821 91.6142L136.496 86.7562V79.4182H87.4544H37.792V99.0099H120.452L129.177 92.1031Z"
          stroke="#3DA9FC"
          strokeWidth="40"
        />
        <path
          d="M61.2058 82.5968L47.9609 82.5968L34.716 82.5968"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M61.2058 94.0022L47.9609 94.0022L34.716 94.0022"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M138.1 82.5968L124.855 82.5968L111.61 82.5968"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M120.072 94.0022L115.841 94.0022L111.61 94.0022"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M94.3523 79.6708C89.9218 78.2201 80.1997 76.8566 79.5015 82.5787C78.2034 93.2185 97.727 86.3929 95.2732 96.149C93.8918 101.642 82.3796 100.242 78.8108 98.4108"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M87.1445 72.9942V78.4025M87.1445 100.036V105.444"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M156.746 107.285L137.887 122.191C133.953 125.3 128.166 122.498 128.166 117.484V102.578C128.166 99.2639 130.853 96.5776 134.166 96.5776H153.025C158.715 96.5776 161.209 103.757 156.746 107.285Z"
          stroke="white"
          strokeWidth="5"
        />
        <path
          d="M26.8281 198.75V220H20.9844V209.688L16.7031 214.531H14.9531L10.6719 209.688V220H4.82812V198.75H6.89062L15.8281 207.812L24.7656 198.75H26.8281ZM48.1656 198.594C49.5823 198.594 50.9365 198.844 52.2281 199.344C53.5406 199.823 54.7073 200.531 55.7281 201.469C56.749 202.406 57.551 203.552 58.1344 204.906C58.7385 206.26 59.0406 207.802 59.0406 209.531C59.0406 211.26 58.7385 212.802 58.1344 214.156C57.551 215.51 56.749 216.656 55.7281 217.594C54.7073 218.531 53.5406 219.25 52.2281 219.75C50.9365 220.229 49.5823 220.469 48.1656 220.469C46.749 220.469 45.3844 220.229 44.0719 219.75C42.7802 219.25 41.624 218.531 40.6031 217.594C39.5823 216.656 38.7698 215.51 38.1656 214.156C37.5823 212.802 37.2906 211.26 37.2906 209.531C37.2906 207.802 37.5823 206.26 38.1656 204.906C38.7698 203.552 39.5823 202.406 40.6031 201.469C41.624 200.531 42.7802 199.823 44.0719 199.344C45.3844 198.844 46.749 198.594 48.1656 198.594ZM48.1656 204.062C47.2281 204.062 46.3948 204.302 45.6656 204.781C44.9365 205.26 44.3531 205.917 43.9156 206.75C43.499 207.562 43.2906 208.49 43.2906 209.531C43.2906 210.573 43.499 211.51 43.9156 212.344C44.3531 213.156 44.9365 213.802 45.6656 214.281C46.3948 214.76 47.2281 215 48.1656 215C49.1031 215 49.9365 214.76 50.6656 214.281C51.4156 213.802 51.999 213.156 52.4156 212.344C52.8323 211.51 53.0406 210.573 53.0406 209.531C53.0406 208.49 52.8323 207.562 52.4156 206.75C51.999 205.917 51.4156 205.26 50.6656 204.781C49.9365 204.302 49.1031 204.062 48.1656 204.062ZM88.6281 199.062V220.312H86.5656L75.3469 209.719V220H69.5031V198.75H71.5656L82.7844 209.531V199.062H88.6281ZM114.809 207.219V211.594H106.497V215H115.903V220H100.653V199.062H115.903V203.906H106.497V207.219H114.809ZM143.741 199.062V204.219H137.584V219.906H131.741V204.219H125.584V199.062H143.741ZM161.984 198.75L171.672 220H164.859L163.828 217.188H157.203L156.172 220H149.359L159.047 198.75H161.984ZM160.516 208.188L158.922 212.5H162.109L160.516 208.188Z"
          fill="#3DA9FC"
        />
      </svg>
      <div className="min-w-800 text-center p-5 py-10 max-w-32 min-h-full bg-primary-inverse border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
        <p className="text-2xl text-headline mb-10">Login</p>
        <div className="flex text-paragraph">
          <div className="flex-1">
            <p className="mb-4">Sign in with Google</p>
            <button
              type="button"
              className="group h-12 px-6 rounded-3xl transition duration-300 
              hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 border border-secondary p-2 min-w-3/4"
            >
              <div className="relative flex items-center space-x-4 justify-center">
                <img
                  src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max tracking-wide text-secondary text-sm transition duration-300 group-hover:primary-hover sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>
          </div>
          <div className="bg-secondary w-px"></div>
          <div className="flex-1">
            <p className="mb-4">Sign in with Moneta account</p>
            <LoginInput />
            <p className="text-sm">
              Don't have an account? <Link to="/auth/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
