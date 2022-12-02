import { TWallpaper } from '@twallpaper/react'
import { ReactNode, useRef } from 'react'

import * as S from './styles'

import type { TWallpaperHandlers } from '@twallpaper/react'

import '@twallpaper/react/css'

interface I_AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: I_AppLayoutProps) => {
  const ref = useRef<TWallpaperHandlers>(null)

  return (
    <div>
      <TWallpaper
        ref={ref}
        options={{
          fps: 60,
          tails: 90,
          colors: ['#6F062B', '#2B2F31', '#6F062B', '#2B2F31'],
          pattern: {
            image: 'https://twallpaper.js.org/patterns/tattoos.svg',
          },
        }}
      />
      <S.AppContainer>
        <S.AppBox>{children}</S.AppBox>
      </S.AppContainer>
    </div>
  )
}
