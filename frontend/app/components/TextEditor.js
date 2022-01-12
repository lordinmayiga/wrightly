import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react"

const Example = ({contentState}) => {
	const editor = useRef(null)
	const [content, setContent] = contentState
	
	const config = {
		readonly: false,
		allowResizeX: true,
		allowResizeY: true,
		height: 500,
		minWidth: 300 // all options from https://xdsoft.net/jodit/doc/
	}
	
	return (
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1} // tabIndex of textarea
		onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
        );
}

export default Example