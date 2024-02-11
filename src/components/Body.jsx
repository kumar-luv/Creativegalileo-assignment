import React, { useState, useEffect } from "react";
import Input from "./Input";
import User from "./User";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PAGE_SIZE } from "../utils/constants";
import { TOKEN } from "../utils/constants";

const Body = () => {
  const [formData, setFormData] = useState({
    cgId: "",
    name: "",
    dialCode: "",
    mobile: "",
    email: "",
    recordStatus: "",
  });
  const [customers, setCustomers] = useState([]);
  const [displayCustomers, setDisplayCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(false);
  const leftClickHandler = () => {
    setPage((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const rightClickHandler = () => {
    setPage(page + 1);
  };

  const getParamsFromFormData = (isFiltersFlag = false) => {
    let result = "";
    if (isFiltersFlag === true) return result;
    Object.keys(formData)?.forEach((key) => {
      if (formData?.[key] !== "") {
        result = result + `${key}=${formData?.[key]}&`;
      }
    });

    return result;
  };
  const getApiUrl = (isFiltersApplied) => {
    let url = `https://cgv2.creativegalileo.com/api/V1/customer/filter?${getParamsFromFormData()}paginated=true&pageNo=${page}&pageSize=${PAGE_SIZE}`;

    if (isFiltersApplied) {
      url = `https://cgv2.creativegalileo.com/api/V1/customer/filter?${getParamsFromFormData(
        true
      )}paginated=true&pageNo=${page}&pageSize=${PAGE_SIZE}`;
    }

    return url;
  };
  getParamsFromFormData();
  const fetchData = async (isFiltersApplied = false) => {
    setLoader(true);
    try {
      const response = await fetch(getApiUrl(isFiltersApplied), {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setCustomers(data?.data?.customers ?? []);
      setDisplayCustomers(data?.data?.customers ?? []);
      setCount(data?.data?.count ?? 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="w-full ">
      <div className="flex w-10/12 justify-between m-auto">
        <h1 className="text-2xl font-medium">Customer</h1>
        <button className="border bg-yellow-500 text-black p-2 rounded-md cursor-pointer">
          + Create
        </button>
      </div>
      <div className="w-10/12 m-auto">
        <Input
          formData={formData}
          setFormData={setFormData}
          fetchData={fetchData}
          setPage={setPage}
        />
      </div>
      <div className="flex justify-between w-10/12 m-auto mt-2 text-1xl font-medium">
        <h2 className="ml-10">CGID</h2>
        <h2 className="ml-0">Name</h2>
        <h2 className="ml-12">Dial Code</h2>
        <h2 className="ml-0">Mobile</h2>
        <h2>Email</h2>
        <h2>Status</h2>
      </div>
      <div className="w-10/12 m-auto rounded-lg h-[550px] overflow-y-scroll">
        {displayCustomers?.map((customer) => {
          return <User key={customer?.id} customer={customer} />;
        })}
      </div>

      {count > 0 && (
        <div className="flex justify-between items-center p-2 bg-white w-10/12 m-auto">
          <div className="text-right w-full">
            {` ${(page - 1) * PAGE_SIZE + 1}-${Math.min(
              count,
              page * PAGE_SIZE
            )} of ${count} `}
          </div>

          <div className="flex gap-4 ml-2">
            {page > 1 && !loader && (
              <button onClick={leftClickHandler} className="cursor-pointer">
                <FaAngleLeft />
              </button>
            )}

            {page * PAGE_SIZE <= count && !loader && (
              <button onClick={rightClickHandler} className="cursor-pointer">
                <FaAngleRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
