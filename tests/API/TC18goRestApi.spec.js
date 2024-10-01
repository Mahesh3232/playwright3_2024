const { test, expect } = require('@playwright/test')

test('List User GET Api', async ({ request }) => {
    let req1 = await request.get('https://gorest.co.in/public/v2/users', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6"
        }
    })
    let res1 = await req1.json()
    console.log(res1)
    expect(res1.length).toBe(10)
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
            "email": "mahesh.aher11@gmail.com",
            "status": "active"
        }
    })
    let res2 = await req2.json()
    console.log(res2)
})