const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

const getSnippets = async () => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('snippets'))),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    );
    const snippets = data.map(snippet => {
        snippet.id = snippet.ref.id;
        delete snippet.ref;
        return snippet
    })
    return snippets;
};

const getSnippetById = async (id) => {
    const snippet =  await faunaClient.query(q.Get(q.Ref(q.Collection('snippets'), id)));
    snippet.id = snippet.ref.id;
    delete snippet.ref;
    return snippet
};

const createMedicine = async (details, dealer, description, name) => {
    return await faunaClient.query(q.Create(q.Collection('snippets'), {
        data: {details, dealer, description, name }
    }))
};

const updateMedicine = async (id, details, dealer, description, name) => {
    return await faunaClient.query(q.Update(q.Ref(q.Collection('snippets'), id), {
        data: { details, dealer, name, description}    
    }))
};

const deleteMedicine = async (id) => {
    return await faunaClient.query(q.Delete(q.Ref(q.Collection('snippets'), id)))
};

const createDealer = async (details, dealer, description, name) => {
    return await faunaClient.query(q.Create(q.Collection('dealers'), {
        data: {details, dealer, description, name }
    }))
};

const updateDealer = async (id, details, dealer, description, name) => {
    return await faunaClient.query(q.Update(q.Ref(q.Collection('dealers'), id), {
        data: { details, dealer, name, description}    
    }))
};

const deleteDealer = async (id) => {
    return await faunaClient.query(q.Delete(q.Ref(q.Collection('dealers'), id)))
};

const getDealers = async () => {
    const { data } = await faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('dealers'))),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    );
    const snippets = data.map(snippet => {
        snippet.id = snippet.ref.id;
        delete snippet.ref;
        return snippet
    })
    return snippets;
};


module.exports = {
    createMedicine,
    getSnippets,
    getSnippetById,
    updateMedicine,
    deleteMedicine,
    createDealer,
    updateDealer,
    deleteDealer,
    getDealers
};
