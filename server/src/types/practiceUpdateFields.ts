import { Field, Int, InputType } from "type-graphql";

@InputType()
class PracticeUpdateFields {
  @Field(() => Int, { nullable: true })
  index?: number;

  @Field({ nullable: true })
  errors?: string;

  @Field({ nullable: true })
  is_finished?: boolean;

  @Field(() => Int, { nullable: true })
  time_spent?: number;
}

export default PracticeUpdateFields;
