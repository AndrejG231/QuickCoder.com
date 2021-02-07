import PassTokens from "../types/entities/PassTokens";
import {
  Arg,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import Users from "../types/entities/Users";

@ObjectType()
class DevUserInfo {
  @Field()
  user: Users;
  @Field()
  secret: String;
}

@Resolver(Users)
export class DevelopmentUserResolver {
  @Query(() => Boolean)
  async usersList() {
    const users = await Users.find();
    console.log("/// USERS LIST ///\n", users);
    return true;
  }

  @Query(() => Boolean)
  async userInfo(@Arg("id", () => Int) id: number) {
    const user = await Users.findOne(id);

    console.log("/// USER INFO ///\n", user);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id", () => Int) id: number) {
    try {
      Users.delete(id);
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }

  @Query(() => Boolean)
  async passTokenList() {
    const tokens = await PassTokens.find();
    console.log(tokens);

    return true;
  }
}