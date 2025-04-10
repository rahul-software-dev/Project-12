import React from "react";
import PropTypes from "prop-types";
import "./UploadedFileList.css";

const UploadedFileList = ({ files, onRemove }) => {
    if (!files.length) return <p>No files uploaded yet.</p>;

    return (
        <ul className="uploaded-file-list" aria-label="Uploaded Files List">
            {files.map((file, idx) => (
                <li key={idx} className="uploaded-file-item">
                    {file.type.startsWith("image/") ? (
                        <img src={file.url} alt={`Uploaded ${idx}`} className="uploaded-image" />
                    ) : (
                        <a href={file.url} target="_blank" rel="noopener noreferrer" className="file-link">
                            {file.name || `File ${idx + 1}`}
                        </a>
                    )}
                    {onRemove && (
                        <button
                            className="remove-button"
                            onClick={() => onRemove(file)}
                            aria-label={`Remove file ${idx + 1}`}
                        >
                            ✕
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

UploadedFileList.propTypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string,
            type: PropTypes.string.isRequired,
        })
    ).isRequired,
    onRemove: PropTypes.func,
};

export default UploadedFileList;