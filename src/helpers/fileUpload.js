
//esto se encarga de la subida del acrchivo recordar que este codigo se creo guiandose de lo publicado en el postman

export const fileUpload = async(file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/danfelogar/upload';

    const fromData = new FormData();
    // aqui abajao se añadiran los datos del file y el upload_preset proporcionados por el postman
    fromData.append('upload_preset','react-journal');
    fromData.append('file',file );

    try {
        //recordar el metodo fetch es apra llamar links le colocamos el cloudUrl como peticon que queremos llamar  pero este cloudUrl no es tratado como GET y lo que estara dentro del {} sera el get
        const resp = await fetch( cloudUrl,{
            method: 'POST',
            body: fromData
        });

        if( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }

}
