import { Button, Input, Text } from '@nextui-org/react'

import * as S from './styles'

import * as C from 'styles/components'

export const AuthLayout = () => {
  return (
    <S.AuthWrapper>
      <S.AuthTitle>
        <Text
          span
          size={56}
          css={{
            textGradient: '45deg, $red600 -20%, $red400 50%',
          }}
          weight='bold'
        >
          Welcome
        </Text>
        <Text
          span
          size={56}
          css={{
            textGradient: '45deg, $red600 -20%, $red400 100%',
          }}
          weight='bold'
        >
          To The
        </Text>
        <Text
          span
          size={56}
          css={{
            textGradient: '45deg, $red600 -20%, $red400 100%',
          }}
          weight='bold'
        >
          Elite Events
        </Text>
      </S.AuthTitle>

      <S.AuthForm>
        <Text blockquote>
          Вход в приложение доступен участникам организации. Для получения доступа свяжитесь с
          нашими менеджерами.
        </Text>
        <Input size='lg' underlined labelLeft='+7' placeholder='Номер телефона' />
        <Button color='gradient' auto>
          Отправить код
        </Button>
        <C.Divider decorated />
        <Input size='lg' underlined placeholder='Код подтверждения' />
      </S.AuthForm>
    </S.AuthWrapper>
  )
}
