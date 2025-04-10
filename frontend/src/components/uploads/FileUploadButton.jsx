import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./FileUploadButton.css";

const FileUploadButton = ({ onUpload, acceptedTypes = ["image/*", "application/pdf"] }) => {
    const fileInputRef = useRef(null);
    const [preview, setPreview] = useState(null);
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!acceptedTypes.includes("*") && !acceptedTypes.some(type => file.type.includes(type.split("/")[0]))) {
            setError("Invalid file type");
            return;
        }

        setFileName(file.name);
        setError("");

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }

        onUpload(file);
    };

    const handleClick = () => fileInputRef.current.click();

    return (
        <div className="upload-button-container">
            <button type="button" onClick={handleClick} className="upload-btn">
                Upload File
            </button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept={acceptedTypes.join(",")}
                hidden
            />
            {fileName && (
                <div className="file-preview">
                    <p>{fileName}</p>
                    {preview && <img src={preview} alt="preview" className="image-preview" />}
                </div>
            )}
            {error && <p className="error" role="alert">{error}</p>}
        </div>
    );
};

FileUploadButton.propTypes = {
    onUpload: PropTypes.func.isRequired,
    acceptedTypes: PropTypes.arrayOf(PropTypes.string),
};

export default FileUploadButton;