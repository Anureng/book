import { Document, Schema, Model , model , models } from "mongoose";
import bcrypt from "bcrypt";

interface UserDocument extends Document {
    email: string;
    name: string;
    password: string;
    role : "admin" | "user";
}

interface Methods {
    comparePassword (password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument , {} , Methods>({
    email :{ type: "string", required: true , unique: true},
    name :{ type: "string", required: true},
    password :{ type: "string", required: true},
    role :{ type: "string", enum :["admin", "user"], default: "user"}
})

// Hash the password
userSchema.pre("save" , async function (next) {
    if(!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next();
    } catch (error) {
        throw error
    }
})


// Compare the password 
userSchema.methods.comparePassword = async function(password){
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}

const UserModel = models.User || model("User", userSchema)
export default UserModel as Model<UserDocument ,  {} , Methods >
