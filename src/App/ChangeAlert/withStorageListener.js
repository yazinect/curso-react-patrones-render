import React from "react";

function withStorageListener(WrapedComponent) {
    return function WrapedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if (change.key === 'TODOS_V1') {
                console.log('Hubo cambios en TODOS_V1');
                setStorageChange(true);
            }
        })

        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }
        return (
            <WrapedComponent show={storageChange} toggleShow={toggleShow} />
        )
    }
}

export { withStorageListener };