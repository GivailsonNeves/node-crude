const connection = require('../database/connection');
const getLogedUser = require('../utils/getLogedUser');

module.exports = {
    async index (request, response) {

        try {
            const user = await getLogedUser(request);
            // const ong_id = request.headers.authorization;
    
            // const incidents = await connection('products')
            //     .where('ong_id', ong_id)
            //     .select('*');
    
            const products =[
                {
                    id: 1,
                    name: 'flu',
                    create_date: new Date().toISOString()
                },
                {
                    id: 2,
                    name: 'flu2',
                    create_date: new Date().toISOString()
                },
                {
                    id: 3,
                    name: 'flu2s3',
                    create_date: new Date().toISOString()
                },
                {
                    id: 11,
                    name: 'flu2',
                    create_date: new Date().toISOString()
                },
                {
                    id: 21,
                    name: 'fl2u2',
                    create_date: new Date().toISOString()
                },
                {
                    id: 32,
                    name: 'f2lu3',
                    create_date: new Date().toISOString()
                },
            ]
    
            return response.json(products);
        } catch (error) {
            if (error.code) {
                return response.status(error.code).json(error.message);
            }
            return response.status(500).json(error);
        }
    }
};