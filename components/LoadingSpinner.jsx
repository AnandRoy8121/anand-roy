import React from 'react'

const LoadingSpinner = () => {
  return (
    <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.418 0 8-3.582 8-8h-4a4.003 4.003 0 01-3.874-3H6v5.291zM12 4c1.178 0 2.26.256 3.243.709L12 9V4zm0 16c-1.178 0-2.26-.256-3.243-.709L12 15v5z"
      />
    </svg>
  )
}

export default LoadingSpinner