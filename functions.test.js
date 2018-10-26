const func = require('./functions')

beforeAll(() => console.log('before all'))
// beforeEach(()=> console.log('before each'))
// afterEach(()=> console.log('after each'))
afterAll(() => console.log('after all'))

test('adds 2 + 2 = 4', () => {
    expect(func.add(2, 2)).toBe(4)
})

test('adds 2 + 2 != 5', () => {
    expect(func.add(2, 2)).not.toBe(5)
})

test('user name and family should be soley pasban', () => {
    expect(func.getUser('soley', 'pasban')).toEqual({ name: 'soley', family: 'pasban' })
})

test('fetch user using axios', () => {
    expect.assertions(1)
    return func
        .fetchUser()
        .then(data => {
            expect(data.id).toBe(1)
        })
})

test('fetch user using awaits', async () => {
    const data = await func.fetchUser()
    expect(data.id).toBe(1)
})

describe('name check', () => {
    beforeEach(() => console.log('------ number check'))
    test('2', () => expect(2).toBe(2))
    test('3', () => expect(3).toBe(3))
    test('4', () => expect(4).toBe(4))
})