// import axios from 'axios'
// Reverted to fetch to avoid dependency issues and ensure standard FormData handling

export const uploadToCloudinary = async (file, resourceType = 'auto') => {
    if (!file) return null;

    const cloudName = process.env.NEXT_PUBLIC_CLOUDNAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET;

    if (!cloudName || !uploadPreset) {
        console.error("Cloudinary configuration missing");
        alert("Cloudinary keys missing! Check console.");
        throw new Error("Cloudinary keys missing");
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
            {
                method: 'POST',
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error(`Upload failed: ${response.statusText}`);
        }

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
};
