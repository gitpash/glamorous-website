import React from 'react'
import glamorous, {Div} from 'glamorous'
import Logo from '../components/glamorous-logo'

const Title = glamorous.h1(props => ({
  margin: '1em 0',
  color: props.theme.colors.primaryMed,
  fontWeight: 'lighter',
  textAlign: 'center',

  [props.theme.mediaQueries.mediumDown]: {
    fontSize: '2.75rem',
  },
}))

const Hero = ({css, ...rest}) => {
  return (
    <Div margin="0 auto" maxWidth={800} textAlign="center" css={css}>
      <Logo margin="0 auto" />
      <Title {...rest} />
    </Div>
  )
}

export default Hero
export {Title}
