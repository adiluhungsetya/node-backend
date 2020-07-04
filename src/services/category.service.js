const connection  = require('../../dbConn');

class CategoryService {
    async getCategoryList(){
        const categoryList = new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM category',
                (err,rows,fields)=>{
                if(err){
                    reject(err);
                } else {
                    resolve(rows)
                }
                })
        })
        let result;
        try {
            result = await categoryList;
        } catch (e) {
            logEvent.emit(ERROR, {
                logTitle:'REQUEST_FAILED',
                logMessage: e
            })
        }
        return result;
    }
    async getCategoryById(id){
        const category = new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM category WHERE id=?`,id,
                (err,rows,fields)=>{
                    if(err){
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                })
        })
        let result
        try {
            result = await category;
        } catch (e) {
            logEvent.emit(ERROR, {
                logTitle:'REQUEST_FAILED',
                logMessage: e
            })
        }
        return result;
    }
    async getCategoryByName(name){
        const category = new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM category WHERE name LIKE "%${name}%"`,
                (err,rows,fields)=>{
                    if(err){
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                })
        })
        let result
        try {
            result = await category;
        } catch (e) {
            logEvent.emit(ERROR, {
                logTitle:'REQUEST_FAILED',
                logMessage: e
            })
        }
        return result;
    }
    async saveCategory(body){
        const category = new Promise((resolve, reject) =>{
            const categoryBody = {
                name: body.name
            }
            connection.query(`INSERT INTO category set ?`,categoryBody,(err,rows,fields)=>{
                if(err){
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
        let result
        try {
            result = await category;
        } catch (e) {
            logEvent.emit(ERROR, {
                logTitle:'REQUEST_FAILED',
                logMessage: e
            })
        }
        return result;
    }
}

module.exports = CategoryService