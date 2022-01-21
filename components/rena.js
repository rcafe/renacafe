export default function About(props){
    return(
        <div className='container'>
            <h1 className="display-5 fw-bold text-black text-opacity-80 justify-content-center d-flex my-4">
                {props.Judul}
            </h1>
            <p></p>
            <div className="row align-item-start">
                <div className="col">
                    <p className="display-7">
                        {props.Deskripsi}
                    </p>
                </div>
            </div>
            
        </div>
    )
}