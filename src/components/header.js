import React from "react"

const Header = () => {
    function onToggle(ele){
        let dropDownMenu = document.getElementById('header-menu');

        // Toggle the nav-btn and the dropdown menu
        dropDownMenu.classList.toggle('active');
    }
    return (
        <div className="header header-fixed unselectable header-animated">
        <div className="header-brand">
           <div className="nav-item no-hover">
              <h6 className="title"><a href="/">Jang Belche</a></h6>
           </div>
           <div onClick={onToggle} className="nav-item has-sub nav-btn " id="header-btn"> <span></span> <span></span> <span></span> </div>
          
        </div>
        <div className="header-nav" id="header-menu">
           <div className="nav-left">
              <div className="nav-item text-center"> <a href="https://github.com/jango707"> <span className="icon"> <i className="fab fa-github fa-2x" aria-hidden="true"></i> </span> </a> </div>
           </div>
           <div className="nav-right">
              <div className="nav-item has-sub toggle-hover" id="dropdown">
                 <div className="nav-dropdown-link">Menu</div> 
                 <ul className="dropdown-menu dropdown-animated" role="menu">
                    <li ><a href="/about">About Me</a></li>
                    <li ><a href="/work">Work Experience</a></li> 
                    <li ><a href="/projects">Projects</a></li>
                 </ul>
              </div>
           </div>
        </div>
     </div>
    )
}

export default Header