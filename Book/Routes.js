const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
} = require('./Handler');

const routes = [
    {
        method: 'POST',
        path: '/Book',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/Book',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/Book/{id}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        path: '/Book/{id}',
        handler: editBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/Book/{id}',
        handler: deleteBookByIdHandler,
    },
];

module.exports = routes;
