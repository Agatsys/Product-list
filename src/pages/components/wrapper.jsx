import React from 'react'

// Test component. Never use this!

export default function Tooltip(props) {
    return (
        <div className="tooltip-wrapper">
            <div className="tooltip-body">
                {props.overlay}
            </div>
            {props.children}
        </div>
    )
}


export default function App() {
    return (
        <Tooltip>
            <div>
                <span>Text text</span>
            </div>
            <EditPhone />
        </Tooltip>
    )
}
