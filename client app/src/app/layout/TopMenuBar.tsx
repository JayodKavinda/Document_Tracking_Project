
import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

export const TopMenuBar = () => {

  let {  url } = useRouteMatch();
    return (
        <div>
        <Menu  pointing>
          <Menu.Item
            name='Home'
            as ={NavLink} exact to={`${url}`}
          />
          <Menu.Item
            name='Send Documents'
            as ={NavLink} to={`${url}/forms`}
          />
          <Menu.Item
            name='Inbox Documents'
            as ={NavLink} to={`${url}/inbox`}
          />
          <Menu.Menu position='right'>
            {/* <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item> */}
          </Menu.Menu>
        </Menu>

        
      </div>
    )
}

export default {TopMenuBar};
