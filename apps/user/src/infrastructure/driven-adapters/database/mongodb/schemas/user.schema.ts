import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


@Schema({ collection: 'users', versionKey: false })
export class UserModel {

    @Prop({
        type: String,
        index: true,
        required: true,
    })
    name: string;


    @Prop({
        type: String,
        index: true,
        required: true,
    })
    surname: string;


    @Prop({
        type: String,
        index: true,
        required: true,
        unique: true,
    })
    email: string;


    @Prop({
        type: String,
        index: true,
        required: true,
    })
    password: string;

    @Prop({
        type: String,
        index: true,
        required: true,
    })
    gender: string;


    @Prop({
        type: Number,
        index: true,
        required: true,
    })
    weight: number;


    @Prop({
        type: Number,
        index: true,
        required: true,
    })
    height: number;
}

export type UserDocument = HydratedDocument<UserModel>

export const UserSchema = SchemaFactory.createForClass(UserModel)
