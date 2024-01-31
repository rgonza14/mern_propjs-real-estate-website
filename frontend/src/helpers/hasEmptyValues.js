export function hasEmptyValues(object) {
    return Object.values(object).some(value => {
        if (value === null || value === undefined || value === "") {
            return true;
        }
        return false;
    });
}
