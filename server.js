// const hapi = require('@hapi/hapi');

// const init = async () => {
//     const server = hapi.server({
//         port: 5000,
//         host: 'localhost',
//     });
    
//     server.route([
//         {
//             method: 'GET',
//             path: '/',
//             handler: (request, h) => {
//                 return 'Homepage';
//             },
//         },
//         {
//             method: 'GET',
//             path: '/about',
//             handler: (request, h) => {
//                 return 'About Page';
//             },
//         },
//     ]);

//     await server.start();
//     console.log(`Server berjalan pada ${server.info.uri}`);
// }
 
// init();

const hapi = require('@hapi/hapi');
const routes = require('./routes')


const init = async () => {
    const server = hapi.server({
        port: 5000,
        host: 'localhost',
    });
    
    server.route(routes)

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
 
init();