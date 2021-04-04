import Head from 'next/head';
import MedicineForm from '../../components/MedicineForm';
import useSWR from 'swr';

export default function Home() {

    const {data: dealers} = useSWR("/api/dealers");

    return (
        <div>
            <Head>
                <title>Create Medicine</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-lg mx-auto">
                <h1 className="text-red-100 text-2xl mb-4">New Medicine</h1>
                <MedicineForm dealers={dealers}/>
            </main>
        </div>
    );
}
