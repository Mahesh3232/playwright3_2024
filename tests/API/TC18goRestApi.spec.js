const { test, expect, request } = require("@playwright/test");
let id = undefined
let emailId = `mahesh.aher${Math.floor(Math.random() * 868)}@gmail.com`

test("GET api request", async ({ request }) => {
  let req = await request.get("https://gorest.co.in/public/v2/users", {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6",
    },
  });
  let res = await req.json();
  console.log(res);
  expect(res.length).toBe(10)
});


test('Post API request for create User', async ({ request }) => {
  console.log(emailId)
  let req2 = await request.post('https://gorest.co.in/public/v2/users', {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6",
    },
    data: {
      "name": "Mahesh Aher",
      "gender": "male",
      "email": emailId,
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
})

test('PUT API request for create User', async ({ request }) => {
  console.log(id)
  let req3 = await request.put(`https://gorest.co.in/public/v2/users/${id}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6",
    },
    data: {
      "name": "Akshay Aher",
      "gender": "male",
      "email": emailId,
      "status": "inactive"
    }
  })
  let res3 = await req3.json()
  console.log(res3)
  await expect(req3.status()).toBe(200)
  await expect(res3.name).toBe('Akshay Aher')
  await expect(res3.gender).toBe('male')
  await expect(res3.status).toBe('inactive')
})

test('DELETE API request for create User', async ({ request }) => {
  let req4 = await request.delete(`https://gorest.co.in/public/v2/users/${id}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":
        "Bearer d94c4cc808661fa96c75b56d4f63cb80084a4324ac1f85d8761e6d59e7af8fd6",
    }
  })
  await expect(req4.status()).toBe(204)
})