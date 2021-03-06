import { Users } from "../../entities";
import { RegisterInput } from "../../types/";
import { generateResponse, validateRegister } from "../../utilities/";
import { getConnection } from "typeorm";
import argon2 from "argon2";

const register = async (credentials: RegisterInput) => {
  const hashedPassword = await argon2.hash(credentials.password);

  const error = await validateRegister(credentials);

  if (error) {
    return error;
  }

  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Users)
    .values({
      email: credentials.email,
      username: credentials.username.toLowerCase(),
      password: hashedPassword,
    })
    .execute();
  return generateResponse(true, "register_account_registered");
};

export default register;
