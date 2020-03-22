const FOREIGN_COUNTRIES = 'FOREIGN_COUNTRIES';
const visitedForeignCountriesPressed = visitedForeignCountries => {
    return {
        type: FOREIGN_COUNTRIES,
        payload: visitedForeignCountries
    }
};

export {
    FOREIGN_COUNTRIES,
    visitedForeignCountriesPressed
}