import { LoginDTO, UserType } from "./types";

export const apiUsersService = {
  login: ({ email, password }: LoginDTO) => {
    const user: UserType = {
      name: "Anael Jonas",
      email: "test@user.com",
      password: "qwe123qwe",
    };

    if (email == user.email && password == user.password) {
      return {
        token: "1234567890",
        name: user.name,
        email: user.email,
      };
    }

    return {
      error: "Login error",
    };
  },
};
