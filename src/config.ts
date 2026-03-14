export function getBaseUrl(): string {
  return Cypress.env("BASE_URL") || Cypress.config("baseUrl") || "https://www.amazon.com";
}

export const testCredentials = {
  user: {
    email: "test@example.com",
    password: "Password123",
  },
};
