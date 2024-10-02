const { test, expect } = require('@playwright/test')

let emailID = `mahesh.aher${Math.floor(Math.random()*444)}@gmail.com`
let id =
test('List User GET Api', async ({ request }) => {
    let req1 = await request.get('https://gorest.co.in/public/v2/users', {
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json",
            "Authorization": "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6" 
        }
    })
    let res1 =  await req1.json()
    console.log(res1)
    console.log(await req1.status())
    await expect(res1.length).toBe(10)
    await expect(req1.status()).toBe(200)
})

test.only('Post API request for create user', async ({ request }) => {
    let req2 = await request.post('https://gorest.co.in/public/v2/users', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
        },
        data: {
            "name": "Mahesh Aher",
            "gender": "male",
            "email": emailID,
            "status": "active"
        }
    })
    let res2 = await req2.json()
    console.log(res2)
    id = res2.id
    await expect(req2.status()).toBe(201)
    await expect(res2.name).toBe('Mahesh Aher')
    await expect(res2.gender).toBe('male')
    await expect(res2.status).toBe('active')
    console.log(id)
})