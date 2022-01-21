import { Formik, Form, Field } from 'formik';
import { supabase } from '../../utils/supabase/supabase-client';

const initFormValues = {
    namaCafe: '',
    lokasiCafe: '',
    foto: null,
    deskripsiCafe: '',
    facebook: '',
    instagram: '',
}

const uploadFotoCafe = async (foto) => {
    try {
        const fileExt = foto.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;
        
        let { error: uploadError } = await supabase.storage
            .from('foto-cafe')
            .upload(filePath, foto);
        
        if (uploadError) {
            throw uploadError;
        } else {
            return filePath;
        }
    } catch (error) {
        alert(error.message);
    }
};
    
const handleOnSubmit = async (values) => {
    let url = '/api/tambah-profile';
    values.fotoPath = await uploadFotoCafe(values.foto);
    
    const respon = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
    });
    
    let status = await respon.json();
    if (status != null) {
        location.replace('/admin');
    }
};

export default function EditDataCafe(){
    return(
        <div className='container my-5 py-5'>
            <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
                {({ values, isSubmitting, setFieldValue }) => (
                    <Form>
                        <table align='center'>
                        <tr>
                                <td htmlFor="foto">Foto Hotel</td>
                                <td>:</td>
                                <td>
                                    <input 
                                        type="file"
                                        name='foto'
                                        accept='image/png, image/jpeg, image/jpg,'
                                        onChange={(event) => {
                                            setFieldValue('foto', event.currentTarget.files[0]);
                                        }}
                                    />
                                    {values.foto ? (
                                        <img src={URL.createObjectURL(values.foto)}  width='250' height='175'/>
                                    ):('Belum ada foto')}
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='namaCafe'>Nama Cafe</td>
                                <td>:</td>
                                <td>
                                    <Field type='text'name='namaCafe'/>
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='lokasiCafe'>Lokasi Cafe</td>
                                <td>:</td>
                                <td>
                                    <Field type='textarea'name='lokasiCafe'/>
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='deskripsiCafe'>Deskripsi Cafe</td>
                                <td>:</td>
                                <td>
                                    <Field type='textarea'name='deskripsiCafe'/>
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='facebook'>Akun Facebook Cafe</td>
                                <td>:</td>
                                <td>
                                    <Field type='text'name='facebook'/>
                                </td>
                            </tr>
                            <tr>
                                <td htmlFor='instagram'>Akun Instagram Cafe</td>
                                <td>:</td>
                                <td>
                                    <Field type='text'name='instagram'/>
                                </td>
                            </tr>
                        </table>
                        <br />
                        <center>
                            <button type='submit' disabled={isSubmitting}>
                                Tambah
                            </button>
                        </center>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
    