var database = require('../lib/database');
var db = database.db;
db.tx(transaction => {
    var queries = [ 
        transaction.none('CREATE EXTENSION IF NOT EXISTS pgcrypto'),
        transaction.none('DROP TABLE IF EXISTS users'),
        transaction.none(`CREATE TABLE users(id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                                             username varchar unique, role integer, fullname varchar, weight real,
                                             client_secret varchar, client_id varchar, access_token varchar)`),
        transaction.none('DROP TABLE IF EXISTS jobs'),
        transaction.none(`CREATE TABLE jobs(id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
                                            title varchar, description text, img_path varchar, userref uuid)`),

        transaction.none('DROP TABLE IF EXISTS userratings'),
        transaction.none(`CREATE TABLE userratings(id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
                                             jobref uuid, ratingscale jsonb)`),
        transaction.none('DROP TABLE IF EXISTS userrankings'),
        transaction.none(`CREATE TABLE userrankings(id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
                                             user_ref uuid, weight float)`),
        
                                             
        transaction.none('DROP TABLE IF EXISTS evaluations'),
        transaction.none(`CREATE TABLE evaluations(id UUID PRIMARY KEY DEFAULT gen_random_uuid(), 
                                             jobref uuid, ratingscale jsonb)`),                                            
    ];    
    return transaction.batch(queries);
}).then(() => {
    console.log('done');
}).catch((error) => {
   console.log(error); 
});