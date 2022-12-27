const express = require('express')
const router = express.Router()

let operations = require('../src/operations')


router.post('/',(req,res)=>{
    operations.createUserDetails(req,res)
})

router.get('/:employeeID',(req,res)=>{
    operations.getOneUserDetails(req,res)

})

router.delete('/:employeeID',(req,res)=>{
    operations.removeUserDetails(req,res)

})

router.put('/:employeeID',(req,res)=>{
    operations.updateUserDetails(req,res)
})


module.exports = router