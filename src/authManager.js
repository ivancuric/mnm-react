const validEmail = '123';
const validPassword = '123';

export const authManager = {
  isAuthenticated: false,

  isValid(email, password) {
    if (email === validEmail && password === validPassword) {
      return true;
    }
    return false;
  },

  async login(email, password) {
    if (this.isValid(email, password)) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  },

  logout() {
    this.isAuthenticated = false;
  },
};
