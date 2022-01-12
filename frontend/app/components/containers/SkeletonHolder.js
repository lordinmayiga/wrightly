import React from 'react'
import Skeleton from '../home/Skeleton'

function SkeletonHolder() {
    
        return (
            <div className="items-outer" style={{marginLeft: "30px"}}>
              <div style={{display: "flex", maxWidth: "100%", flexWrap: "wrap"}} className="itemsholder-flex">
                <Skeleton/><Skeleton/><Skeleton/>
              </div>
              <div style={{display: "flex", maxWidth: "100%", flexWrap: "wrap"}} className="itemsholder-flex">
                <Skeleton/><Skeleton/><Skeleton/>
              </div>
            </div>
        )
    
}

export default SkeletonHolder
