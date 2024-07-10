import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import TextField from "@mui/material/TextField";
import AlertComponent from "../AlertComponent/index";
import { BasePath } from "../BasePath/Index";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone is required"),
});

const EnquiryForm = () => {
  const [alertProps, setAlertProps] = useState(null);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        `${BasePath}/contact_submit.php`,
        values,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("response from the api", response.data);

      if (response.status === 200) {
        setAlertProps({
          status: "success",
          message: "Your enquiry has been submitted successfully!",
        });
        resetForm();
      } else {
        setAlertProps({
          status: "error",
          message:
            response.data.message || "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setAlertProps({
        status: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      {alertProps && (
        <AlertComponent {...alertProps} onClose={() => setAlertProps(null)} />
      )}
        <div className="col-lg-9 col-12 m-auto">
          <Formik
            initialValues={{ name: "", email: "", phone: "" }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting, status }) => (
              <Form>
                <div className="row">
                  <div className="col-lg-4 ">
                    <Field name="name">
                      {({ field }) => (
                        <TextField
                          {...field}
                          label="Name"
                          className="modifiedinput"
                          fullWidth
                          required
                          error={touched.name && errors.name}
                          helperText={touched.name && errors.name}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="col-lg-4 ">
                    <Field name="email">
                      {({ field }) => (
                        <TextField
                          {...field}
                          label="Email"
                          className="modifiedinput"
                          fullWidth
                          required
                          error={touched.email && errors.email}
                          helperText={touched.email && errors.email}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="col-lg-4 ">
                    <Field name="phone">
                      {({ field }) => (
                        <TextField
                          {...field}
                          label="Phone"
                          className="modifiedinput"
                          fullWidth
                          required
                          error={touched.phone && errors.phone}
                          helperText={touched.phone && errors.phone}
                        />
                      )}
                    </Field>
                  </div>
                  <div className="col-12 flex-center mt-5 text-center">
                    <div className="col-lg-3 col-12 flex-center">
                    <button _class={"secondarybtn"}
                        isSubmit={true}
                        _disable={isSubmitting}>Sumit</button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
    </>
  );
};

export default React.memo(EnquiryForm);
