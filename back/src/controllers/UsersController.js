const connection = require('../database/connection');
const generateID = require('../utils/generateUniqueID');
const generatePassword = require('../utils/generatePassword');
const { where } = require('../database/connection');

module.exports = {
    async create(request, response) {
        
        const { name, email, password } = request.body;

        const userInDB = await connection('users')
            .where('email', email)
            .select('id')
            .first();

        if (userInDB) {
            return response.status(400).json({ error: 'user already exists' });
        }

        await connection('users').insert({
            name,
            email,
            password: generatePassword(password),
            email_code: generateID(),
            deleted: false
        });

        return response.json();
    },
    async login(request, response) {
        
        const { email, password } = request.body;

        const userInDB = await connection('users')
            .where('email', email)
            .select('id', 'name', 'password')
            .first();

        if (userInDB && userInDB.password === generatePassword(password)) {

            const token = generatePassword(Date.now() + '');

            await connection('users')
            .where('id', userInDB.id)
            .update({
                token
            });

            return response.json({
                name: userInDB.name,
                email,
                token
            });
        }

        return response.status(401).json({ error: 'credentials are invalid' });
    },
    async validateEmail(request, response) {
        
        const { code } = request.params;

        const userInDB = await connection('users')
            .where('email_code', code)
            .select('id', 'email_confirmed')
            .first();

        if (!userInDB) {
            return response.status(400).json({ error: 'code is invalid' });
        }
        if (userInDB && userInDB.email_confirmed) {
            return response.status(400).json({ error: 'code already used' });
        }

        await connection('users')
        .where('id', userInDB.id)
        .update({
            email_confirmed: new Date().toISOString(),
        });

        return response.json();
    }
};