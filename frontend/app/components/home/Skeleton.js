import React from 'react'
import "./Skeleton.css"

function Skeleton() {
    return (
        <div class="skeleton-container">
        <div className="notescard-icon sk"></div>
            <div class="skeleton-img sk">
    
            </div>
            <div class="skeleton-lower">
                <div class="skeleton-title sk">This is my fake text     inv</div>
                <div class="skeleton-date sk"></div>
            </div>
        </div>
    )
}

export default Skeleton
