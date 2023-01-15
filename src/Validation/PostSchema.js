import * as yup from "yup";

let postSchema = yup.object().shape({
  title: yup
    .string("باید از نوع رشته باشد")
    .required("مقدار به صورت الزامی می باشد")
    .min(5, "نباید کمتر از 5 تا کاراکتر باشد")
    .max(50, "نباید بیشتر از 50 تا کاراکتر باشد"),
  body: yup
    .string("از نوع رشته باشد")
    .required("باید به صورت الزامی باشد")
    .min(5, "نباید کمتر از 5 تا کارکتر باشد")
    .max(100, "نباید بیشتر از 100 تا کارکتر باشد"),
});
export default postSchema;
