const oracleDb=require("oracledb");

const dbConf={
    user:'users',
    password:'password',
    connectString:'url',
    poolMax:10,
    poolMin:1,
    poolTimeout:60
}
async function connection(){
    await oracleDb.createPool(dbConf);
}
module.exports.connection=connection;
