import puppeteer from 'puppeteer'

const isDebugging = () => {
    const debugging_mode = {
        headless: false,
        slowMo: 250,
        devtools: true
    }

    return process.env.NODE_ENV === 'test' ? debugging_mode : {}
}

let browser: puppeteer.Browser
let page: puppeteer.Page

beforeAll(async () => {
    browser = await puppeteer.launch(isDebugging())
    page = await browser.newPage()
    await page.goto('http://localhost:3000/post')
    page.setViewport({ width: 500, height: 2400 })
}, 30000)

describe('Posts', () => {
    test('should load up the page properly', async () => {
        await page.waitForSelector('[data-testid="posts"]')

        const html = await page.$eval('[data-testid="posts"]', (e) => e.innerHTML)

        console.log(html)

        expect(html).toBeTruthy()
    }, 16000)

    test('should press next and see 5 or less posts', async () => {
        await page.waitForSelector('[data-testid="posts"]')
        await page.click('[data-testid="nextBtn"]')
        await page.click('[data-testid="nextBtn"]')


        // TODO: Assert 

    }, 16000)
})

afterAll(() => {
    if (isDebugging()) {
        browser.close()
    }
})
