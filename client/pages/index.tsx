import { Button } from '@mui/material'
import React from 'react'

const Index = () => {
  return (
    <>
      <div className="center">
        <h1>Welcome!</h1>
        <h3>Best tracks are here!</h3>
      </div>
      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Index
