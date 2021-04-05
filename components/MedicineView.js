import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
export default function MedicineView({ medicine, dealer }) {
    
    
    const router = useRouter();
    
    return (
        <div>
            <div className="bg-gray-100 p-4 rounded-md my-2 shadow-lg">
                
                <p className="text-gray-900 mb-4">{medicine.data.description}</p>

                <p className="text-gray-900">{medicine.data.details}</p>
            </div>
            
            <h3 className="text-red-100 text-1xl mb-4 mt-4">Dealer</h3>
            
            <div className="bg-gray-100 p-4 rounded-md my-2 shadow-lg">
                
                <p className="text-gray-900 mb-4">{dealer.name}</p>

                <p className="text-gray-900 mb-4">{dealer.description}</p>

                <p className="text-gray-900">{dealer.details}</p>

            </div>

            <Link href="/">
                <a className="mt-4 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                    Home
                </a>
            </Link>
            
        
        </div>
    );
}


