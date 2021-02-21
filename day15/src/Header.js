import React from 'react'
import headderStyles from './styles/main.css'
import styled from 'styled-components'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                
                <div className='header-wrapper'>
                    <h1>30 Days Of React</h1>
                    <h2>Getting Started React</h2>
                    <h3>JavaScript Library</h3>
                    <p>Instructor: Asabeneh Yetayeh</p>
                    <small>Oct 15, 2020</small>
                </div>
            </header>
        )
    }
}

export default Header