import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export class MenuItem {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  overview: string;

  @Field(() => Int)
  index: number;
}

@ObjectType()
class MenuResponse {
  @Field()
  category: string;

  @Field()
  description: string;

  @Field(() => [MenuItem])
  items: [MenuItem];
}

export default MenuResponse;
