const padding = (padding) =>{
    return {padding}
}

const margin = (margin) =>{
    return {margin}
}

const size = (x, y) =>{
    return {width: x, height: y}
}

const h = (num) =>{
    return {fontSize: `${num}px`}
}

module.exports = {padding, margin, size, h}