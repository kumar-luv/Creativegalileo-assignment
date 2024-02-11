import React from "react";
import { CiSearch } from "react-icons/ci";
import { VscRefresh } from "react-icons/vsc";
const Input = (props) => {
  const { formData, setFormData, fetchData, setPage } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <input
          type="number"
          id="cgId"
          name="cgId"
          className="rounded-md p-2 text-center w-24"
          placeholder="CG ID"
          value={formData.cgId}
          onChange={handleChange}
        />

        <input
          type="text"
          id="name"
          name="name"
          className="rounded-md p-2 text-center w-32"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          id="dialCode"
          name="dialCode"
          className="rounded-md p-2 text-center w-28"
          placeholder="Dial Code"
          value={formData.dialCode}
          onChange={handleChange}
        />

        <input
          type="number"
          id="mobile"
          name="mobile"
          className="rounded-md p-2 text-center w-40"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />

        <input
          type="email"
          id="email"
          name="email"
          className="rounded-md p-2 text-center w-40"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <select
          id="status"
          name="status"
          className="rounded-md p-2 text-center w-24"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Status</option>
          <option value="success">Success</option>
          <option value="failure">Failure</option>
        </select>
      </div>
      <div className="flex justify-center gap-2 mt-3">
        <CiSearch
          onClick={() => {
            setPage(1);
            fetchData()}
            }
          className="text-center text-2xl font-bold cursor-pointer "
        />
        <VscRefresh
          onClick={() => {
            setFormData({
              cgId: "",
              name: "",
              dialCode: "",
              mobile: "",
              email: "",
              recordStatus: "",
            });
            fetchData(true);
          }}
          className="text-center text-2xl font-medium cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Input;
