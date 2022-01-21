import Head from "next/head";
import { useState,useEffect } from "react";
import { supabase } from "../../utils/supabase/supabase-client";
import TabelCafe from "../../components/admin/tabelCafe";
import EditDataCafe from '../../components/admin/editCafeProfile';
import Header from "../../components/header";

export default function Beranda(){
    const [showForm, setShowForm] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => cekUser());
    const cekUser = async () => {
        const session = await supabase.auth.session();
    
        if (session == null) location.replace('/admin/Login');
        else setIsAuth(true);
    };
    if (isAuth) {
        return(
            <>
                <Head>
                    <title>
                        Admin
                    </title>
                </Head>
                <Header/>
                <TabelCafe/>
                <center>
                {showForm ? <EditDataCafe/> : ''}
                {showForm ? (
                    <button onClick={() => setShowForm(false)}>
                        Sembunyikan
                    </button>
                ):(
                    <button onClick={() => setShowForm(true)}>
                        Tampilkan
                    </button>
                )}
                </center>
            </>
        );
    }else{
        return <p>Authentication account...</p>;
    }
}