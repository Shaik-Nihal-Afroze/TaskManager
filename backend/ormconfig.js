module.exports = {
    type:"postgre",
    host:"localhost",
    port:5432,
    username:"postgre",
    password:"npiohsatlg@45",
    database:"task_manager",
    synchronize:true,
    logging:false,
    entities:["src/entity/**/*/.js"],
}