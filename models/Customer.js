import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
  email: {
   type: String,
   required: true,
  },
  password: {
   type: String,
   required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;