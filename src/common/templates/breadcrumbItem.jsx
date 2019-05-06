import React from 'react'

export default props => (

    

    <li className={props.path ? '' : 'active'}>

        {props.path ? 
            <a href={props.path}>
                {props.icon ? <i className={`fa fa-${props.icon}`}></i> : ''}
                <span> {props.label}</span>
            </a>
            :
            <span>
                {props.icon ? <i className={`fa fa-${props.icon}`}></i> : ''}
                <span> {props.label}</span>
            </span>
        }
        
    </li>

)