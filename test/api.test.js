const supertest = require('supertest')
const app = require('../app')
const user = require('./testConfig')
const testUserId = {
    id : ''
}


describe('GET /employee/:id', function() {
it('responds with employee data in json', async function() {
    const response = await supertest(app)
        .get(`/employee/${user.userConfig.id}`)
    expect(response.status).toEqual(200);
    expect(response.body.employee._id).toEqual(user.userConfig.id);
    expect(response.body.employee.firstName).toEqual(user.userConfig.firstName)
    expect(response.body.employee.lastName).toEqual(user.userConfig.lastName)
    expect(response.body.employee.aadharNumber).toEqual(user.userConfig.aadharNumber)
    expect(response.body.employee.phoneNumber).toEqual(user.userConfig.phoneNumber)

});
});


describe('/POST /employee', function(){
    it('Create Should create the employee in the database',async function(){
        const response = await supertest(app)
            .post('/employee')
            .send(user.postUserConfig)
            testUserId.id = response.body.employee._id
            console.log(testUserId)
            console.log(response.body.employee._id)
        expect(response.status).toEqual(200)
        

    })
    // it('Create Should create the employee in the database',async function(){
    //             const response = await supertest(app)
    //             console.log(testUserId.id)
    //                 .delete(`/employee/${testUserId.id}`)
    //             expect(response.status).toEqual(200)
    //         })
})

// describe('/DELETE /employee', function(){
//     it('Create Should create the employee in the database',async function(){
//         const response = await supertest(app)
//         console.log(testUserId.id)
//             .delete(`/employee/${testUserId.id}`)
//         expect(response.status).toEqual(200)
//     })
// })
