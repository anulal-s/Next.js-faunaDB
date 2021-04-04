import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function DealerForm({ dealer }) {
    
    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            details: dealer? dealer.data.details: '',
            description: dealer? dealer.data.description: '',
            name: dealer? dealer.data.name: ''
        }
    });
    const router = useRouter();

    const createDealer = async (data) => {
        const { name, description, details } = data;
        try {
            await fetch('/api/dealer/create', {
                method: 'POST',
                body: JSON.stringify({name, description, details}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const updateDealer = async (data) => {
        const { name, description, details } = data;
        const id = dealer.id;
        try {
            await fetch('/api/dealer/update', {
                method: 'PUT',
                body: JSON.stringify({name, description, details, id}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };
    
    return (
        <form onSubmit={handleSubmit(dealer ? updateDealer : createDealer)}>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                />
                {errors.name && (
                    <p className="font-bold text-red-900">Name is required</p>  
                )}
            </div>
           
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="description"
                >
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows="3"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="More info "
                    ref={register({ required: true })}
                ></textarea>
                {errors.description && (
                    <p className="font-bold text-red-900">Description is required</p>  
                )}
            </div>
            <div className="mb-4">
                <label
                    className="block text-red-100 text-sm font-bold mb-1"
                    htmlFor="details"
                >
                    Details
                </label>
                <textarea
                    name="details"
                    id="details"
                    rows="10"
                    className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="contact details, link, phone etc"
                    ref={register({ required: true })}

                ></textarea>
                {errors.details && (
                    <p className="font-bold text-red-900">Details is required</p>  
                )}
            </div>
            <button
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                type="submit"
            >
                Save
            </button>
            <Link href="/">
                <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Cancel
                </a>
            </Link>
        </form>
    );
}


