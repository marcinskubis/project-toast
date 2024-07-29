import React from "react"

export default function useEscape(handlingFunction) {
    React.useEffect(() => {
        const handleToastsDismiss = (e) => {
            if (e.code === 'Escape') handlingFunction();
        }
        window.addEventListener('keydown', handleToastsDismiss);
        return (() => {
            window.removeEventListener('keydown', handleToastsDismiss);
        })
    }, [handlingFunction])
}