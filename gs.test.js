const gs = require('./index')

const username = "student\\s1535208"
const password = "03312001"

// test('Invalid username & pass', () => {
//     expect.assertions(1)
//     jest.setTimeout(20000)
//     return gs('INVALIDUSERNAME', 'INVALIDPASSWORD')
//         .catch(err => {
//             expect(err.message).toBe('Invalid username or password.')
//         })
// })

// test('Get back valid array of return objects', () => {
//     expect.assertions(1)
//     jest.setTimeout(20000)
//     return gs(username, password)
//         .then(returnArr => {
//             let isArr = Array.isArray(returnArr)
//             let isValid = isArr && returnArr
//             expect(isValid).toBeTruthy()
//         })
// })

gs(username, password)
    // .then(returnArr => {
    //     console.log(returnArr);
    // });