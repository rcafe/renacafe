import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Data(){
    const { data,error } = useSWR('/api/data-cafe', fetcher);

    if(error) return <p>Ada masalah saat fetching data</p>;
    if(!data) return <p>Loading</p>;
    if(data.length == 0) return <p>Belum ada data cafe</p>;

    return(
        <div className="container">
            <h1 className="display-5 fw-bold text-black text-opacity-80 justify-content-center d-flex my-5">
                Cafe di Banyuwangi
            </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {data.map((cafe,x) => (
                    <>
                        <div className="col text-center">
                            <div className="card">
                                <div className="card-body">
                                    <h3 key={x}>{cafe.nama}</h3>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div>
                                            <   Link href={`/detail-cafe/${cafe.id}`}>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>    
                ))}
           </div>
        </div>
    )
}