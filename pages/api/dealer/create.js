import { createMedicine } from '../../../utils/Fauna';
export default async function handler(req, res) {
    const { details, dealer, description, name } = req.body;
    console.log('body',  req.body, req.method);
    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    if( typeof details === 'undefined' ||
        typeof dealer === 'undefined'  ||
        typeof description === 'undefined'  ||
        typeof name === 'undefined' 
    ) {
        return res.status(405).json({ msg: 'Error in Params' });
    }
    try {
        const createdSinppet = await createMedicine(details, dealer, description, name);
        return res.status(200).json(createdSinppet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}
