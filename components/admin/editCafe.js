import { Formik, Form, Field } from 'formik';

const initFormValues = {
    nama: '',
}

const handleOnSubmit = async (values) => {
    const respon = await fetch('/api/tambah-cafe', {
        method: 'POST',
        body: JSON.stringify(values),
    });
    
    let status = await respon.json();
    
    if (status != null) {
        location.reload();
    }
};

export default function EditCafe(){
    return(
        <div className='container my-5 py-5'>
            <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <table align='center'>
                            <tr>
                                <td htmlFor='nama'>Nama Cafe</td>
                                <td>:</td>
                                <td>
                                    <Field type='text'name='nama'/>
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
    );

}