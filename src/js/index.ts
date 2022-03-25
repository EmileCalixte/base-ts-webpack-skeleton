import "../css/index.css";

/**
 * Represents a user with a firstname and a lastname
 */
type User = {
    firstname: string,
    lastname: string,
}

/**
 * Generates a new {@see User}
 * @param {string} firstname The user's firstname
 * @param {string} lastname The user's lastname
 */
export function getNewUser(firstname: string, lastname: string): User {
    return {
        firstname,
        lastname
    };
}
