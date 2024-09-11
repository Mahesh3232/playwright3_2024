const { test, expect } = require('@playwright/test')

//API ==> Application programing interface

//Create 
//Update 
//Retrive 
//Delete 
//CRUD opretions 

//GET ==> information retrive
//POST ==> Create
//PUT ==> Update
//Delete ==> delete info 


test('Verify API GET request', async ({ request }) => {
    let req = await request.get('https://reqres.in/api/users?page=2')
    console.log(await req.status())
    console.log(await req.json())
    let res = await req.json()
    //console.log(await req)
    console.log(await res.total)
    console.log(res.data[0].first_name)
    console.log(res.data[3].first_name)
    expect(res.per_page).toBe(6)
    expect(res.total_pages).toBe(2)
    expect(req.status()).toBe(200)
})
