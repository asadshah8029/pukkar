import mongoose from "mongoose";

const studentSchema = mongoose.model(
  "Student",
  new mongoose.Schema({
    rollNo: String,
    date: String,
    purchasedThings: String,
    plan: String,
    totalPrice: String,
    advance: String,
    remaining: String,
    monthlyPay: String,
    name: String,
    parents: String,
    CNIC: String,
    saken: String,
    mobileNumber: String,
    address: String,
    name2: String,
    parents2: String,
    CNIC2: String,
    saken2: String,
    mobileNumber2: String,
    address2: String,
    signature: String,
    signature2: String,
    extra: String,
  })
);

export default studentSchema;
