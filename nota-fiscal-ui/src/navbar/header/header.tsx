import React, {Component} from "react";
import './header.css';

import logoUnialfa from '../../assests/images/logo-unialfa.png';

export default class Header extends Component {

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="ui-g">
                        <div className="ui-g-4">
                            <img src={logoUnialfa} alt="Unialfa" />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
