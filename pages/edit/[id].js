import Head from 'next/head';
import { getSnippetById, getDealers } from '../../utils/Fauna';
import MedicineForm from '../../components/MedicineForm';

export default function Home({ medicine, dealers }) {
    return (
        <div>
            <Head>
                <title>Update Next Snippet</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-lg mx-auto">
                <h1 className="text-red-100 text-2xl mb-4">Update Snippet</h1>
                <MedicineForm medicine={medicine} dealers={dealers} />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        
        const medicine = await getSnippetById(context.params.id);
        const dealers = await getDealers()
        return {
            props: {medicine, dealers},
        };
    } catch (error) {
        console.error(error);
        context.res.statusCode = 302;
        context.res.setHeader('Location', `/`);
        return { props: {} };
    }
}
