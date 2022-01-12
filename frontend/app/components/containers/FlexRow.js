import React from 'react'

function FlexRow({children, style, className}) {
    return (
        <div className={className} style={{display: "flex", ...style}}>
            {children}
        </div>
    )
}

export default FlexRow
