import useSWR from "swr";
import FotoCafe from "./admin/fotocafe";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DetailData = ({id}) =>{
    const { data,error } = useSWR(`/api/detail/${id}`,fetcher);

    if(error)
        return <p>Ada masalah saat feetching data cafe {id}</p>;
    if(!data) return <p>Loading</p>;
    if(data.length == 0) return <p>Tidak ditemukan data cafe {id}</p>

    return(
        <div className="container">

            <div className="my-4 py-4">
                <center>
                    <h3>{data.nama}</h3>

                    <FotoCafe foto={data.detail.fotoCafe}/>
                </center>
                <br />
                <div className="col">
                    <div className="card-text">
                    {data.detail.lokasiCafe}
                    </div>
                    <div className="card-text">
                        {data.detail.deskripsiCafe}
                    </div>
                    <p>
                        <>
                            {data.sosialMedia.map((sosmed) => (
                                // eslint-disable-next-line react/jsx-key
                                <li>
                                    {sosmed.namaSosmed} : {sosmed.username}
                                </li>
                            ))}
                        </>
                    </p>
                </div>
            </div>
        </div>
    )

}

export default DetailData;