class ApiClient {
  constructor() {
    this.baseUrl = "http://localhost:5173/api/v1";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      "Accept": "application.json",
    };
  }

  //custom fetch method
  async customFetch(endpoint, options = {}) {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...options.headers };

      const config = {
        ...options,
        headers,
        credentials: "includes"
      };
      console.log(`Fetching ${url}`);
      const response = await fetch(url, config);

      //CHECK IF RESPONSE.OK == 200
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Api Error", error);
      throw error;
    }
  }

  //Auth endpoints

  async signup(name, email, password) {
    return this.customFetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  }

  async login(email, password) {
    return this.customFetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async getProfile() {
    return this.customFetch("/users/me");
  }
}

const apiClient = new ApiClient();
export default apiClient;

//example for header is when we use iphone some other price compare to android
//when open something then download owr ios or andrioid app
