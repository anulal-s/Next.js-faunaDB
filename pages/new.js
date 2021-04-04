import Head from 'next/head';
import MedicineForm from '../components/MedicineForm';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next Medicine</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-lg mx-auto">
                <h1 className="text-red-100 text-2xl mb-4">New Medicine</h1>
                <MedicineForm />
            </main>
        </div>
    );
}
