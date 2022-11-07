import '../styles/globals.css'
import React from 'react'
import Navigation from './components/Navigation'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>My first app</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
