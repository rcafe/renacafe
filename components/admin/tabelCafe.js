import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TabelCafe(){
    const { data,error } = useSWR('/api/data-cafe', fetcher);

    if(error) return <p>Ada masalah saat fetching data</p>;
    if(!data) return <p>Loading</p>;
    if(data.length == 0) return <p>Belum ada data cafe</p>;

    return(
        <div className="container">
            <div className="container my-5 py-5">
                <table align="center">
                    <thead>
                        <tr align='center'>
                            <th>No</th>
                            <th>Nama Cafe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cafe, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <tr>
                                <td align="center">{index + 1}</td>
                                <td>{cafe.nama}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}