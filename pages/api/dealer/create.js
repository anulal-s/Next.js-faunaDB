import { createDealer } from '../../../utils/Fauna';
export default async function handler(req, res) {
    const { name, description, details } = req.body;
    console.log('body',  req.body, req.method);
    if (req.method !== 'POST') {
        return res.status(405).json({ msg: 'Method not allowed' });
    }

    if( typeof details === 'undefined' ||
        typeof description === 'undefined'  ||
        typeof name === 'undefined' 
    ) {
        return res.status(405).json({ msg: 'Error in Params' });
    }
    try {
        const created = await createDealer(name, description, details);
        return res.status(200).json(created);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
}
