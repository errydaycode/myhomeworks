import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'
import {PATH} from '../Pages'
import closeIcon from './closeOutline.svg'

type PropsType = {
    open: boolean
    handleClose: () => void
}

export const Sidebar: FC<PropsType> = ({open, handleClose}) => {
    const sidebarClass = s.sidebar
        + (open ? ' ' + s.open : '')

    // if(!open){
    //     return null
    // }

    return (

        <>

            {/*затемнение справа от открытого меню*/}
            {open && <div className={s.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                    <img
                        src={closeIcon}
                        className={s.close}
                        alt="close sidebar"
                        id={'hw5-menu-close'}
                        onClick={handleClose}
                    />


                <nav id={'hw5-menu'} className={s.nav}>
                    <NavLink
                        id={'hw5-pre-junior-link'}
                        to={PATH.PRE_JUNIOR}
                        onClick={handleClose}

                        className={({isActive})=> isActive ? s.active : s.nav}
                    >
                        Pre-junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-link'}
                        to={PATH.JUNIOR}
                        onClick={handleClose}

                        className={({isActive})=> isActive ? s.active : s.nav}
                    >
                        Junior
                    </NavLink>
                    <NavLink
                        id={'hw5-junior-plus-link'}
                        to={PATH.JUNIOR_PLUS}
                        onClick={handleClose}

                        className={({isActive})=> isActive ? s.active : s.nav}
                    >
                        Junior Plus
                    </NavLink>
                </nav>
            </aside>
        </>
    )
}
