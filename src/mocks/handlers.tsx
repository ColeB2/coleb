import { rest } from 'msw'
import { MOCK_API_DATA } from '../tests/testData'


export const restHandlers = [
    rest.get('https://portfolio-1-m7436351.deta.app/projects', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(MOCK_API_DATA)
        )
    })
]

// export const handlers = [
//   rest.post('/login', (req, res, ctx) => {
//     const { username } = req.body

//     return res(
//       ctx.json({
//         id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
//         username,
//         firstName: 'John',
//         lastName: 'Maverick',
//       })
//     )
//   }),
// ]