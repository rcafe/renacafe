import Header from '../components/header'
import About from '../components/rena'

export default function Tentang(){
    let Tentang = {
                    Judul : "Terima Kasih Telah Mengunjungi Website Kami",
                    Deskripsi : "Banyuwangi adalah salah satu kabupaten yang terletak di Provinsi Jawa Timur. Banyuwangi terletak di bagian ujung paling timur Pulau Jawa. Kabupaten ini merupakan kabupaten terluas di Jawa Timur bahkan merupakan kabupaten terluas  di Pulau Jawa. Kabupaten Banyuwangi terkenal dengan wisata alamnya. Bagi wisatawan yang mendatangi Banyuwangi, tentunya kurang pas bila tidak mencoba kuliner khas Banyuwangi. Selain kuliner, tentunya anak muda juga pasti mencari-cari cafe tempat untuk nongkrong."    
                }
    return(
        <div>
            <Header/>
            <About
                Judul = {Tentang.Judul}
                Deskripsi = {Tentang.Deskripsi}
            />
        </div>
    )
}