export function getBaseUrl(): string {
  return Cypress.config("baseUrl") as string;
}

export const testCredentials = {
  user: {
    email: "test@example.com",
    password: "Password123",
  },
};
