import instance from ".";

export default class APIGroups {
    static async getGroups() {
        return await instance.get('/getGroups')
            .then((response) => {
                console.log(response.data.message);
                return response.data.groups
            })
            .catch((error) => {
                console.error(error.message);
            })
    }
    static async createGroup(newGroup) {
      await  instance.post('/createGroup', newGroup)
            .then((response) => {
                console.log(response.data.message);
            })
            .catch( (error)=> {
                console.error(error.message);
            })
    }
    static async deleteGroup(id) {
      await instance.post('/deleteGroup', { id })
            .then((response) => {
                console.log(response.data.message);
            })
            .catch( (error)=> {
                console.error(error.message);
            })
    }
}