import Head from 'next/head';
import DealerForm from '../../components/DealerForm';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Dealer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-lg mx-auto">
                <h1 className="text-red-100 text-2xl mb-4">New Dealer</h1>
                <DealerForm />
            </main>
        </div>
    );
}
