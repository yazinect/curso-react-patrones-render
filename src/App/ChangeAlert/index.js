import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <>
                <p>Se realizaron cambios desde otra pestaña, selecciona 'Actualizar' para verlos</p>
                <button
                    onClick={() => {
                        toggleShow(false)
                    }
                    }
                >Actualizar</button>
            </>
        )
    } else {
        return null;
    }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener };