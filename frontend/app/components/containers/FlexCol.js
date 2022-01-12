import React from 'react'

function FlexCol({children, className, style}) {
    return (
        <div className={className} style={{display: "flex", flexDirection: "column", ...style}}>
            {children}
        </div>
    )
}

export default FlexCol
