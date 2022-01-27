import React from 'react';
import 'cirrus-ui';

const navbar= () => {
    return (
        <div class="header header-fixed u-unselectable header-animated">
            <div class="header-brand">
                <div class="nav-item no-hover">
                    <a><h6 class="title">sdub</h6></a>
                </div>
                <div class="nav-item nav-btn" id="header-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="header-nav" id="header-menu">
                <div class="nav-left">
                    <div class="nav-item text-center">
                        <a href="#">
                            <span class="icon">
                                <i class="fab fa-wrapper fa-instagram" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                    <div class="nav-item text-center">
                        <a href="#">
                            <span class="icon">
                                <i class="fab fa-wrapper fa-github" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                    <div class="nav-item has-sub toggle-hover" id="dropdown">
                        <a class="nav-dropdown-link">Van Life</a>
                        <ul class="dropdown-menu dropdown-animated" role="menu">
                            <li role="menu-item"><a href="#">Van Build</a></li>
                            <li role="menu-item"><a href="#">Life in a Van</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default navbar;