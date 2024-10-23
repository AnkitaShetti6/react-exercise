import React from 'react';

const HeaderComponent: React.FC = () => {
    return (
        <header style={headerStyle}>
            <img
          className="logo"
          src="./icons/pet.jpg"
          alt="img"
          style={{ width: 50, height: 50, color:"#F8CF47"}}
        />
        </header>
    );
};

const headerStyle: React.CSSProperties = {
    backgroundColor: '#F8CF47',
    padding: '10px',
    color: 'white',
    height:'50px'
};

export default HeaderComponent;