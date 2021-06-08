import mongoose, { Schema, Document, mongo } from "mongoose";

export interface IStats {
  strength: number;
  agility: number;
  magic: number;
  resistance: number;
}

export interface CharacterDocument extends Document {
  name: string;
  characterId: number;
  thumbnail: string;
  description?: string;
  stats: IStats;
  race?: string;
}

const CharacterShema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  characterId: {
    type: Number,
    required: true,
    unique: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  stats: {
    strength: { type: Number, required: true },
    agility: { type: Number, required: true },
    magic: { type: Number, required: true },
    resistance: { type: Number, required: true },
  },
  race: { type: String },
},{timestamps:true});

const Character = mongoose.model<CharacterDocument>(
  "Character",
  CharacterShema
);
export default Character;
