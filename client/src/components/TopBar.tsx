import React from 'react'
import styled from 'styled-components'
import { Colors, BoxShadow } from '../shared/Styles'

const MenuWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background: ${Colors.themeDark};
  color: ${Colors.textWhite};
  margin: 0;
  justify-content: center;
  align-items: center;
  box-shadow: ${BoxShadow};

`

const TopBar: React.FC = () => (
  <MenuWrapper>
    <h1>TakeNote</h1>
  </MenuWrapper>
)

export default TopBar
