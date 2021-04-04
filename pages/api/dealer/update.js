import { updateMedicine } from '../../../utils/Fauna';
export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }
    const { id, details, dealer, description, name } = req.body;

    if( typeof details === 'undefined' ||
        typeof dealer === 'undefined'  ||
        typeof description === 'undefined'  ||
        typeof name === 'undefined' 
    ) {
        return res.status(405).json({ msg: 'Error in Params' });
    }

    try {
        const update = await updateMedicine(id, details, dealer, description, name);
        return res.status(200).json(update);

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}
