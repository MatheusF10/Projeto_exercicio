import React from 'react'
import * as Icon from 'react-feather'
import './Footer.css'

export default () => {
    return(
        <footer>
            <a href="#"><h1>A C M E</h1></a>
            <div className="social-midias">
                <a href=""><Icon.Twitter color="white"></Icon.Twitter></a>
                <a href=""><Icon.Facebook color="white"></Icon.Facebook></a>
                <a href=""><Icon.Instagram color="white"></Icon.Instagram></a>
            </div>
        </footer>
    )
}