import client from "./client.http";

const login = async (usernameOrEmail: string, password: string) => {
  try {
    const response = await client.post("/login", {
      usernameOrEmail: usernameOrEmail,
      password: password,
    });

    return response.data;
  } catch (err: any) {
    return (
      err.response?.data?.message || "Something went wrong. Please try again."
    );
  }
};

const register = async (username: string, email: string, password: string) => {
  try {
    const response = await client.post("/register", {
      username: username,
      email: email,
      password: password,
    });

    return response.data;
  } catch (err: any) {
    return (
      err.response?.data?.message || "Something went wrong. Please try again."
    );
  }
};

const logout = async () => {
  try {
    return await client.post("/logout");
  } catch (err: any) {
    return (
      err.response?.data?.message || "Something went wrong. Please try again."
    );
  }
};

export { login, register, logout };
