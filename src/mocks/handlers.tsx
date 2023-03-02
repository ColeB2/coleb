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