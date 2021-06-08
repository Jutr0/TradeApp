import mongoose, { Schema, Document } from "mongoose";

export type UserDocument = Document & {
  name: string;
};

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required:true,
  },
  avatar:{
    type: String,
    default:'https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Iron-Man-icon.png',
  }
});

const User = mongoose.model<UserDocument>("User", UserSchema);
export default User;