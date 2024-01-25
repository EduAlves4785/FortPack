import React from 'react'
import {Rodape} from './styles'

export const Footer = ({fixed}) => {
  return (
    <Rodape style={{position:fixed==true?"fixed":'relative'}}>
         <p>© 2024. FortPack. Todos os direitos reservados</p>
    </Rodape>
  )
}
