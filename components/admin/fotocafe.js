import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase/supabase-client';

const FotoCafe = ({ foto }) => {
    const [fotoCafe, setFotoCafe] = useState();

    useEffect(() => {
        if (foto) downloadFoto(foto);
    }, [foto]);
    
    const downloadFoto = async (path) => {
        try{
            const { data, error } = await supabase.storage
                .from('foto-cafe')
                .download(path);
            if (error) {
                throw error;
            }
            
            const url = URL.createObjectURL(data);
            setFotoCafe(url);
        } catch (error) {
            console.log('Error downloading image: ', error.message);
        }
    };

    return fotoCafe ? (
        <img src={fotoCafe} width='600' height='380'/>
    ) : (
        <div>Loading foto</div>
    );
        
};

export default FotoCafe;