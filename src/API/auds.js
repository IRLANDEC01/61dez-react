import instance from ".";
export default class APIAuds {
    
    static async getAuds() {
        return await instance.get('/getAuds')
            .then((response) => {
                console.log(response.data.message);
                return response.data.auds
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async createAud(newAud) {
        await instance.post('/createAud', newAud)
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async deleteAud(id) {
        await instance.post('/deleteAud', { id })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
   
}