import Head from 'next/head';
import { getSnippetById, getDealerById } from '../../utils/Fauna';
import MedicineView from '../../components/MedicineView';

export default function Home({ medicine, dealer }) {
    return (
        <div>
            <Head>
                <title>{medicine.data.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-lg mx-auto">
                <h1 className="text-red-100 text-2xl mb-4">{medicine.data.name}</h1>
                <MedicineView medicine={medicine} dealer={dealer} />
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        
        const medicine = await getSnippetById(context.params.id);
        const dealer = await getDealerById(medicine.data.dealer);

        return {
            props: {medicine, dealer},
        };
        
    } catch (error) {
        console.error(error);
        context.res.statusCode = 302;
        context.res.setHeader('Location', `/`);
        return { props: {} };
    }
}
