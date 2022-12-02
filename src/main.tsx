import { NextUIProvider } from '@nextui-org/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'App'
import { darkTheme } from 'styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <NextUIProvider theme={darkTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NextUIProvider>,
)
