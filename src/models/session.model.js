import mongoose, { Schema } from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "user is required"],
    },
    refreshTokenHash: {
      type: String,
      required: [true, "refresh token ha is required"],
    },
    ip: {
      type: String,
      required: [true, "IP address is required"],
    },
    userAgent: {
      type: String,
      required: [true, "user agent is required"],
    },
    revoke: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const sessionModel = mongoose.model("session", sessionSchema);

export default sessionModel;
