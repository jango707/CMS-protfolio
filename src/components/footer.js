import React from "react"

const Footer = () => {
    return (
        <div className="bg-light" style={{width:'100%', textAlign:'center'}}>
            <hr style={{margin:'30px 100px'}}/>
            <p>&copy; Jang Belche {new Date().getFullYear()}</p><br />
        </div>
    )
}

export default Footer