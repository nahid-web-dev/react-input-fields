import { FaCloudUploadAlt } from "react-icons/fa";
import { useState, useRef, useCallback } from "react";
import "./input-image.css"; // Import component-specific CSS

const InputImage = ({ width = "100%", height = "auto", inputName = "image", color = "#FFA500", background = "#808080" }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const setImageFile = useCallback((file) => {
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const file = e.dataTransfer.files?.[0];
      if (file) {
        setImageFile(file);
      }
    },
    [setImageFile]
  );

  return (
    <div className="input-image-wrapper">
      <div
        className={`input-image-container ${isDragging ? "dragging" : ""}`}
        style={{
          width,
          height,
          borderColor: isDragging ? color : background,
          backgroundColor: isDragging ? `${color}20` : "transparent",
        }}
        onClick={() => fileInputRef.current?.click()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {preview ? (
          <img src={preview} alt="Preview" className="input-image-preview" />
        ) : (
          <FaCloudUploadAlt
            className="input-image-icon"
            style={{ color: isDragging ? color : background }}
          />
        )}
        <input name={inputName} type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="input-image-hidden" />
      </div>
    </div>
  );
};

export default InputImage;
