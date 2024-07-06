// AuthService.js
class AuthService {
  async login(credentials) {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    return data;
  }

  async logout() {
    const response = await fetch("https://example.com/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.ok;
  }
}

const authService = new AuthService();
export default authService;
