import request from "supertest";
import {app,server} from "../app.js"

describe ("Test CRUD books",() =>{
    describe ("GET /books",() =>{
        test('should return a response with status 200 and type json', async() => { 
            const response = await request(app).get('/books').send() 
            expect(response.status).toBe(200); 
            expect(response.headers['content-type']).toContain('json');
        })
    })
    afterAll(()=>{
        server.close()
    })
})
