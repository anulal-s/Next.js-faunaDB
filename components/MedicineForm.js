import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function MedicineForm({ medicine, dealers }) {
    
    const {register, handleSubmit, errors} = useForm({
        defaultValues: {
            details: medicine? medicine.data.details: '',
            dealer: medicine? medicine.data.dealer: '',
            description: medicine? medicine.data.description: '',
            name: medicine? medicine.data.name: ''
        }
    });
    const router = useRouter();

    const createMedicine = async (data) => {
        const { details, dealer, description, name } = data;
        try {
            await fetch('/api/medicine/create', {
                method: 'POST',
                body: JSON.stringify({details, dealer, description, name}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const updateMedicine = async (data) => {
        const { details, dealer, description, name } = data;
        const id = medicine.id;
        try {
            await fetch('/api/medicine/update', {
                method: 'PUT',
                body: JSON.stringify({details, dealer, description, name, id}),
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
        <form onSubmit={handleSubmit(medicine ? updateMedicine : createMedicine)}>
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
                    htmlFor="dealer"
                >
                    Dealer
                </label>
                <select
                    id="dealer"
                    name="dealer"
                    className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
                    ref={register({ required: true })}
                >

                    { dealers &&
                    dealers.map((dealer) => (
                        <option className="py-1" key={dealer.id} value={dealer.id}>{dealer.name}</option>
                    ))}

                </select>
                {errors.dealer && (
                    <p className="font-bold text-red-900">Dealer is required</p>  
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
                    placeholder="What does the medicine for?"
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
                    placeholder="ex. purpose or usage"
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
                <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                    Cancel
                </a>
            </Link>
            <Link href="/new/dealer">
                <a className="mt-3 inline-block bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    New Dealer
                </a>
            </Link>
        </form>
    );
}


