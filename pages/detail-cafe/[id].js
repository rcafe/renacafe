import Head from "next/head";
import DetailData from "../../components/detailData";
import Header from "../../components/header";

export async function getServerSideProps(context) {
    return { props: { id: context.params.id } };
}
    const Detail = (props) => {
        return (
            <>
                <Head>
                    <title>{props.id}</title>
                </Head>
                <Header/>
                <DetailData id={props.id} />
            </>
    );
};
export default Detail;
    