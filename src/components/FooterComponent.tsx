import React from 'react';

const FooterComponent: React.FC = () => {
    return (
        <footer style={footerStyle}>
        </footer>
    );
};

const footerStyle: React.CSSProperties = {
    backgroundColor: '#285dab',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    height:'50px',
    width: '100%'
};

export default FooterComponent;