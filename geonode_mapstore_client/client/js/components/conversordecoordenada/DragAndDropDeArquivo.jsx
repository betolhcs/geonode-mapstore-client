import React from 'react';

import './draganddropdearquivo.css';

export default function DragAndDropDeArquivo({children, onUpload}) {
    const [dragging, setDragging] = React.useState(false);
    const drag = React.useRef(null);
    const drop = React.useRef(null);

    const hoverText = 'Arraste o arquivo aqui.';

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        const files = [...e.dataTransfer.files];

        if (files && files.length) {
            onUpload(files);
        }
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target !== drag.current) {
            setDragging(true);
        }
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target === drag.current) {
            setDragging(false);
        }
    };

    React.useEffect(() => {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
        drop.current.addEventListener('dragenter', handleDragEnter);
        drop.current.addEventListener('dragleave', handleDragLeave);

        return () => {
            drop.current.removeEventListener('dragover', handleDragOver);
            drop.current.removeEventListener('drop', handleDrop);
            drop.current.removeEventListener('dragenter', handleDragEnter);
            drop.current.removeEventListener('dragleave', handleDragLeave);
        };
    }, []);

    return (
        <div
            ref={drop}
            className="drag-and-drop-container"
        >
            {dragging && (
                <div
                    ref={drag}
                    className="drag-and-drop-hover"
                >
                    {hoverText}
                </div>
            )}
            {children}
        </div>
    );
}
