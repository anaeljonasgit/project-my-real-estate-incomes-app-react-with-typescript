export type UserType = {
  name: string;
  email: string;
  password?: string;
};

export type LoginDTO = {
  email: string;
  password: string;
};
