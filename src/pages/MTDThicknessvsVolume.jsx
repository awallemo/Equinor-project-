import React, { Fragment, useState } from 'react'
import { select } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { TopBar, Icon, TextField, Button, SideSheet } from '@equinor/eds-core-react'

import {
  account_circle,
  accessible,
  notifications,
  fullscreen,
  grid_on,
} from '@equinor/eds-icons'
import '../components/layout/NavBar.css'
import '../components/layout/NavMenu.css'
import SideMenu from '../components/layout/BtnNavMenu'
import ThicknessvsVolume from '../components/domain/MTDcharts/ThicknessvsVolume'



const { Actions, Header, CustomContent } = TopBar

const icons = {
  account_circle,
  accessible,
  notifications,
  fullscreen,
  grid_on,
}

Icon.add(icons)

const TempSearch = styled(TextField)`
  width: 30%;
  min-width: 200px;
  input {
    border-bottom: none;
  }
  label {
    color: #fff;
  }
`

const LEFT_CHOICES = {
  none: null,
  icon: <Icon name="grid_on" size={16} />,
  text: 'Deep-water morphometric database​',
  'text+icon': (
    <Fragment>
      <Icon name="grid_on" size={16} />
      Deep-water morphometric database
    </Fragment>
  ),
}

const CENTER_CHOICES = {
  none: null,
  search: (
    <div className="TempSearchWrapper">
      <TempSearch
        id="topbar-test"
        type="search"
        title="search"
        placeholder="Replace with Search compoent"
      />
    </div>
  ),
  tabs: 'TODO: Use Tabs compoent',
  text: 'Some Center Text',
}

const RIGHT_CHOICES = {
  none: null,
  text: 'Some Right Text',
  icons: (
    <div className="Icons">
      <Button>&#9776; Menu </Button>
    </div>
  ),
}

 const MTDAreavsVolume = (props) => {
    const leftChoice = select('Left', Object.keys(LEFT_CHOICES), 'text')
    const centerChoice = select('Center', Object.keys(CENTER_CHOICES), 'none')
    const rightChoice = select('Right', Object.keys(RIGHT_CHOICES), 'icons')
    const [toggle, setToggle] = useState(false)
    
    return (
      <div className="Wrapper" tabIndex="0">
        <SideSheet
          variant="medium"
          title="Menu"
          open={toggle}
          onClose={() => setToggle(!toggle)}
        >
          <SideMenu pageSelection={(e)=>{props.pageSelection(e)}}></SideMenu>
        </SideSheet>
        <TopBar>
          <Header>{LEFT_CHOICES[leftChoice]}</Header>
          <CustomContent>{CENTER_CHOICES[centerChoice]}</CustomContent>
          <Actions onClick={() => setToggle(!toggle)}>{RIGHT_CHOICES[rightChoice]}</Actions>
        </TopBar>
        <body>
            <ThicknessvsVolume></ThicknessvsVolume>
        </body>
    
      </div>
    )
} 

export default MTDAreavsVolume;