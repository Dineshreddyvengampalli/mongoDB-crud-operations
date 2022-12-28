const supertest = require('supertest')
const app = require('../app')
const user = require('./testConfig')
const testUser = {
    
}

describe('/POST /employee', function(){
    it('Create Should create the employee in the database',async function(){
        const response = await supertest(app)
            .post('/employee')
            .send(user.postUserConfig)
            testUser.id = response.body.employee._id
            testUser.firstName = response.body.employee.firstName
            testUser.lastName = response.body.employee.lastName
            testUser.aadharNumber = response.body.employee.aadharNumber
            testUser.phoneNumber = response.body.employee.phoneNumber
        expect(response.status).toEqual(200)
        expect(response.body.employee._id).toEqual(testUser.id)
        expect(response.body.employee.firstName).toEqual(testUser.firstName)
        expect(response.body.employee.lastName).toEqual(testUser.lastName)
        expect(response.body.employee.aadharNumber).toEqual(testUser.aadharNumber)
        expect(response.body.employee.phoneNumber).toEqual(testUser.phoneNumber)
        
})})

describe('GET /employee/:id', function() {
it('responds with employee data in json', async function() {
    const response = await supertest(app)
        .get(`/employee/${testUser.id}`)
        console.log(response.body.employee)
    expect(response.status).toEqual(200);
    expect(response.body.employee._id).toEqual(testUser.id)
    expect(response.body.employee.firstName).toEqual(testUser.firstName)
    expect(response.body.employee.lastName).toEqual(testUser.lastName)
    expect(response.body.employee.aadharNumber).toEqual(testUser.aadharNumber)
    expect(response.body.employee.phoneNumber).toEqual(testUser.phoneNumber)
});
});


describe('DELETE /employee/:id', function() {
    it('responds with deleted employee data in json', async function() {
        const response = await supertest(app)
            .delete(`/employee/${testUser.id}`)
            console.log(response.body.employee)
        expect(response.status).toEqual(200);
        expect(response.body.employee.firstName).toEqual(testUser.firstName)
        expect(response.body.employee.lastName).toEqual(testUser.lastName)
        expect(response.body.employee.aadharNumber).toEqual(testUser.aadharNumber)
        expect(response.body.employee.phoneNumber).toEqual(testUser.phoneNumber)
    });
    });
    

