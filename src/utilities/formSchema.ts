import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(0).email("Invalid email address").optional(),
  phoneNumber: z.string().min(11, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().min(1, "Zip is required"),
});

export type InputsType = z.infer<typeof formSchema>;
