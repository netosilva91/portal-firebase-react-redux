import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Home' icon='home' />
        <MenuItem path='#/aboutEvent' label='Apresentaçāo' icon='film' />
        {/* <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#/billingCycles' label='Clicos de Pagamentos' icon='usd' />
        </MenuTree> */}
    </ul>
)