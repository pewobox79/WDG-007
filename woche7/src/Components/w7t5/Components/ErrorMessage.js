import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorMessage() {
    const error = useRouteError();
console.log(error.message)
  return (
    <div>{error.message}</div>
  )
}

export default ErrorMessage