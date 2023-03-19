import React from 'react'

export const DragAndDrop = () => {
  
    // drag state
    const [dragActive, setDragActive] = React.useState(false);

    const [file, setFile] = React.useState([])
    // ref
    const inputRef = React.useRef(null);
    
    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
        } else if (e.type === "dragleave") {
        setDragActive(false);
        }
    };
    
    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setFile(e.dataTransfer.files);
        }
    };
    
    // triggers when file is selected with click
    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
        setFile(e.target.files);
        }
    };
    
    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(file)
    }
  return (
            <form id="form-file-upload" className='text-black' onDragEnter={handleDrag} onSubmit={(e) => handleSubmit(e)}>
                <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                    <div>
                    <p>Drag and drop your file here or</p>
                    <button type='button' className="upload-button" onClick={onButtonClick}>Upload a file</button>
                    </div> 
                </label>
                { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
            </form>
  )
}


