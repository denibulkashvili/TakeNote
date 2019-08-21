import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background: #F2F4F5;
  margin: 0;
  justify-content: center;
  align-items: center;

`

const TopBar: React.FC = () => (
  <MenuWrapper>
    <h1>TakeNote</h1>
  </MenuWrapper>
)

export default TopBar
