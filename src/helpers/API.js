class API {
  constructor() {
    this.baseURL = "https://flowrspot-api.herokuapp.com";
    this.flowersListURL = "/api/v1/flowers";
  }

  async call(method = "GET", page = 1) {
    const res = await fetch(
      this.baseURL + this.flowersListURL + "?page=" + page,
      {
        method,
      }
    );
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      const body = await res.json();
      return body;
    }
  }
}

export default new API();
