const { app } = require('../index')
const superTest = require('supertest') //allow testing Node.js HTTP servers. 

describe('Server testing', () => {
  
    test('Test giving an error when having wrong path', (done) => {
      superTest(app)
        .get('/add')
        .then((response) => {
          expect(response.statusCode).toBe(404)
          console.log(response.statusCode)
          done()
        })
    
    })
})
