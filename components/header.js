import Link from 'next/link'
import InfoAkun from './admin/account'

export default function Header(){
    return(
        <header className="p-1 bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <h4 className='float-md-start mb-0 text-white'>RENA</h4>        
                    <ul className="nav me-lg-auto mb-0 justify-content-center ">
                        <Link href="/">
                            <li>
                                <a className="btn btn text-white">Home</a>
                            </li>
                        </Link>
                        <Link href="/daftarCafe">
                            <li>
                                <a className="btn btn text-white">Cafe</a>
                            </li>
                        </Link><Link href="/about">
                            <li>
                                <a className="btn btn text-white">About</a>
                            </li>
                        </Link>
                    </ul>
                    <div className="text-end md-mb-0">
                        <InfoAkun/>
                    </div>
                </div>
            </div>
        </header>
    )
}
{/* <nav className="nav nav-masthead">
<a className="nav-link active" aria-current="page" href="/">Home</a>
<a className="nav-link" href="/daftarCafe">Cafe</a>
<a className="nav-link  nav nav-masthead justify-content-center float-md-end" href="/about">About RENA</a>
</nav> */}