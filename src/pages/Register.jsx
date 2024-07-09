//rrd import
import { Form, Link, useActionData } from "react-router-dom";
import { useEffect } from "react";

//components
import { FormInput } from "../components";

//Action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  let email = formData.get("email");
  let password = formData.get("password");
  return { displayName, photoURL, email, password };
};

//custom hooks
import { useRegister } from "../hooks/useRegister";

function Register() {
  const brdata = useActionData();

  const { isPanding, registerWithGoogle, registerEmailAndPassword } =
    useRegister();

  useEffect(() => {
    if (brdata) {
      registerEmailAndPassword(
        brdata.email,
        brdata.password,
        brdata.displayName,
        brdata.photoURL,
        brdata.confirmpassword
      );
    }
  }, [brdata]);

  return (
    <div className="auth-container">
      <div className="auth-bg-register auth-right">
        <Form
          method="post"
          className="flex flex-col w-[340px] shadow-2xl p-7 rounded-xl bg-[rgba(255,255,255,0.75)]"
        >
          <h1 className="text-4xl font-black text-sky-400/75 text-center">
            Register
          </h1>
          <FormInput
            label="Your Name :"
            type="text"
            name="displayName"
            placeholder="Your Name"
          />
          <FormInput
            label="photo image URL :"
            type="url"
            name="photoURL"
            placeholder="Photo Image URL"
          />
          <FormInput
            label="Email :"
            type="email"
            name="email"
            placeholder="Email"
          />
          <FormInput
            label="Password :"
            type="password"
            name="password"
            placeholder="Password"
          />
          <FormInput
            label="Confirm Password* :"
            type="password"
            name="confirmpassword"
            placeholder="Password"
          />
          <div className="mt-6">
            {isPanding && (
              <button
                disabled
                className="btn btn-info  border-red-400 btn-block font-bold"
              >
                Loading...
              </button>
            )}
            {!isPanding && (
              <button className="btn btn-info  border-red-400 btn-block mb-2 font-bold">
                Register
              </button>
            )}
          </div>
          <div>
            {isPanding && (
              <button
                disabled
                type="button"
                className="btn bg-green-300 border-red-400 btn-block font-bold"
              >
                Loading...
              </button>
            )}
            {!isPanding && (
              <button
                onClick={registerWithGoogle}
                type="button"
                className="btn bg-green-300 border-red-400 btn-block font-bold"
              >
                Google
              </button>
            )}
          </div>

          <div className="text-center">
            <p className="font-medium text-slate-500">
              If you have account,{" "}
              <Link className="link text-sky-400/75 link-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
