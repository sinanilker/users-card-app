import React from 'react'
import PropTypes from 'prop-types'

const Header = ({logoTitle, navbarItems}) => {
    return (
        <header className="app-header">
            <div className="logo">
                <h1>{logoTitle}</h1>
            </div>
            <nav>
                <ul>{navbarItems.map((item, index) => (
                    <li key={`${item}${index}`}>
                        <a href="">{item}</a>
                    </li>
                ))}</ul>
            </nav>
        </header>
    )
}
// For Default Props
Header.defaultProps = {
    logoTitle: "Header Title",
    navbarItems: ["Button 1", "Button 2", "Button 3"]
}

Header.propTypes = {
    logoTitle: PropTypes.string,
    navbarItems: PropTypes.array.isRequired
}
export default Header