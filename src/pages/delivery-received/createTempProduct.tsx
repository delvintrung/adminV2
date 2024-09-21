import type { FC } from "react";
import { Button } from "flowbite-react";
import NavbarSidebarLayout from "../../layouts/navbar-sidebar";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface Values {
  name: string;
  author: string;
}

const CreateTempProduct: FC = () => {
  const initialValues: Values = { name: "", author: "" };

  const validateSchema = Yup.object({
    name: Yup.string()
      .max(255, "Must be 255 characters or less")
      .required("Required"),
    author: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
  });
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex"></div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow p-10 bg-white h-full">
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Create Temporary Product
                </h3>

                <div className="flex gap-5">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validateSchema}
                    onSubmit={(values, actions) => {
                      console.log({ values, actions });
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                    }}
                  >
                    <Form>
                      <label htmlFor="name">Name Product</label>
                      <Field id="name" name="name" placeholder="Name" />
                      <label htmlFor="author">Author</label>
                      <Field id="author" name="author" placeholder="author" />
                      <button type="submit">Submit</button>
                    </Form>
                  </Formik>
                </div>
              </div>

              <div className="w-full flex justify-between">
                <Button color="light">Hủy</Button>
                <div></div>
                <Button>Gửi yêu cầu</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

export default CreateTempProduct;
