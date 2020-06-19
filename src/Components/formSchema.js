import * as Yup from "yup";

const formSchema = Yup.object().shape({
    
    name: Yup
    .string()
    .min(2, "Name must be at least 2 characters long.")
    .required("Required"),
    size: Yup
    .string()
    .oneOf(["Small", "medium", "Large"], "Please select a size"),
});

export default formSchema;