import { validateURL } from "../js/urlChecker.js";


describe('Testing user URL input', () => {

    test('validateURL return false for invalid url', () => {
        const falseInput = "notURL"
        expect(validateURL(falseInput)).toBeFalsy()
    })

    test('validateURL return true for valid url', () => {
        const trueInput = 'http://example.com'
        expect(validateURL(trueInput)).toBeTruthy()
    })
})
