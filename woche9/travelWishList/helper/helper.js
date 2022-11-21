export function filterCountry(code, countries) {
    const filteredCountry = countries.find(country => country.alpha2Code.toLowerCase() === code.toLowerCase() || country.alpha3Code.toLowerCase() === code.toLowerCase())
    return filteredCountry;
}
