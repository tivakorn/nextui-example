// Dependencies
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider, createTheme } from '@nextui-org/react'

// Components
import Navigation from '../components/Navigation'

const lightTheme = createTheme({
  type: 'light',
  theme: {}
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {}
})

const MyApp = (props: AppProps) => {

  const { Component, pageProps } = props

  return (
    <ThemeProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Navigation />
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  )
}

export default MyApp
