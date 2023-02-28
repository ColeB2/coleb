import matchers from '@testing-library/jest-dom/matchers';
import { expect, afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { graphql, rest } from 'msw';
import { PROJECT_DATA } from './tests/testData';

expect.extend(matchers);


const data = {
    _count: 15, _last: null, _items: PROJECT_DATA
}

export const restHandlers = [
    rest.get('https://portfolio-1-m7436351.deta.app/projects', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(data))
    })
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())