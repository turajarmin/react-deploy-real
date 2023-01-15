import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./create.css";

const Create = () => {
  const schema = yup.object().shape({
    title: yup
      .string("str...!")
      .required("required...!")
      .min(5, "min-5-...")
      .max(100, "100-max-....!"),
    body: yup
      .string("str....!")
      .required("required...!")
      .min(5, "5...min")
      .max(100, "max...!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const eventHandler = (data) => {
    fetch("http://localhost:3004/posts", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    document.querySelector("input[type=text]").value = "";
    document.querySelector("textarea").value = "";
  };
  return (
    <>
      <div className="container p-5 mt-2 text-white">
        <form onSubmit={handleSubmit(eventHandler)}>
          <div className="d-block col-6 offset-3 mb-2">
            <label htmlFor="title" className="text-capitalize mb-2">
              title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="title....!"
              style={{ border: "1px inset lightgrey" }}
              {...register("title")}
            />
            <p className="text-warning">{errors.title?.message}</p>
          </div>
          <div className="d-block col-6 offset-3 mb-2">
            <label htmlFor="body" className="text-capitalize mb-2">
              body
            </label>
            <textarea
              type="text"
              className="form-control"
              placeholder="body....!"
              style={{
                border: "1px inset lightgrey",
                height: "150px",
                resize: "none",
              }}
              {...register("body")}
            ></textarea>
            <p className="text-warning">{errors.body?.message}</p>
          </div>
          <div className="d-block col-6 offset-3 mb-2">
            <input type="submit" className="btn btn-dark" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
