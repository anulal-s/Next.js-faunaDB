import Head from 'next/head';
import Snippet from '../components/Snippet';
import useSWR from 'swr';
import Link from 'next/link';
export default function Home() {
    
    const {data: snippets, mutate} = useSWR("/api/snippets");
    const {data: dealers} = useSWR("/api/dealers");
    
    const dealersKeyValue = {};
    if(dealers) {
        dealers.forEach((dealer) => {
            dealersKeyValue[dealer.id] = dealer.name;
        });
    }

    return (
        <div>
            <Head>
                <title>MediList</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <div className="my-12">
                    <h1 className="text-red-100 text-2xl">
                        Medicine Snippets
                    </h1>
                    <p className="text-red-200">
                        Create and browse medicine you use every day in Store !
                    </p>
                    <Link href="/new/medicine">
                        <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Create a Medicine !
                        </a>
                    </Link>
                </div>
                {snippets &&
                    snippets.map((snippet) => (
                        <Snippet
                            key={snippet.id}
                            snippet={snippet}
                            snippetDeleted={mutate}
                            dealer={dealersKeyValue[snippet.data.dealer]}
                        />
                    ))}
            </main>
        </div>
    );
}
