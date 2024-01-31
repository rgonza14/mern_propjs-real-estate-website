const fileUpload = async file => {
    if (!file) throw new Error("No se seleccionó ningún archivo");
    const cloudUrl = "https://api.cloudinary.com/v1_1/rgonnza/image/upload";
    const formData = new FormData();
    formData.append("upload_preset", "react-bienesraices"); //llave - valor
    formData.append("file", file);

    try {
        const resp = await fetch(cloudUrl, {
            method: "POST",
            body: formData
        });

        if (!resp.ok) throw new Error("Ocurrió un error al subir la imagen");
        const cloudResp = await resp.json();
        return cloudResp.secure_url; //url de la imagen
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};

export default fileUpload;
