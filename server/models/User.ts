import mongoose, { Schema, Document } from "mongoose";

export type UserDocument = Document & {
  name: string;
  avatar: string;
  cards: [Schema.Types.ObjectId];
};

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
      unique: true,
    },
    email:{
      type:String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password:{
      type:String,
      required:"Password is required"
    },
    avatar: {
      type: String,
      default:
        "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Iron-Man-icon.png",
    },
    cards: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "character",
    },
  },
  { timestamps: true, skipVersioning: { dontVersionMe: true } }
);

const User = mongoose.model<UserDocument>("User", UserSchema);
export default User;
