const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon') 
const rewire = require('rewire')
const operations = rewire ('../src/operations')



const reqbody = {
    firstName : 'dinesh',
    lastName : 'reddy',
    aadharNumber : 123,
    phoneNumber : 2353387583
}


let saveStub  = sinon.stub().returns({reqbody})
let employee = sinon.stub().returns({save : saveStub})


operations.__set__('Employee',employee)


describe('testing crud operations with full mocking ',function(){
    it('it should create one user',function(done){
        let request = sinon.spy()
        let response = sinon.spy()
        response = {
            json: sinon.spy()
        }
        request = {
            'body' : reqbody
        }
        let res = operations.createUserDetails(request,response)
        console.log(res)
        done()
    })
})