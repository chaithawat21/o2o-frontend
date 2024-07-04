import React from "react";
import provinces from "../utils/provinces";
import geographies from "../utils/geographies";

function SelectPage() {
  return (
    <div className="py-5">
      <div className="flex items-center justify-center gap-3">
        <div className="flex flex-col items-center">
          <button className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1>Menu 1</h1>
        </div>
        <div className="flex flex-col items-center">
          <button className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1>Menu 2</h1>
        </div>
        <div className="flex flex-col items-center">
          <button className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1>Menu 3</h1>
        </div>
      </div>
      <div className="flex flex-colume items-end justify-center gap-2">
        <label className="form-control w-full max-w-96">
          <div className="label">
            <span className="label-text text-xl">Search</span>
            <span className="label-text-alt"></span>
          </div>
          <input
            type="text"
            placeholder="Value here"
            className="input input-bordered w-full max-w-xl h-11"
          />
        </label>
        <div>
          <ul className="menu menu-horizontal px-1 gap-4 py-0">
            <li>
              <details>
                <summary className="border w-48">ภูมิภาค</summary>
                <ul className="bg-base-100 rounded-t-none p-2 w-full">
                  {geographies.map((items) => (
                    <li key={items.id}>
                      <a>{items.name}</a>
                    </li>
                  ))}
        
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="border w-48 h-10">จังหวัด</summary>
                <ul className="bg-base-100 rounded-t-none p-2 w-full">
                  {provinces.map((items) => (
                    <li key={items.id}>
                      <a>{items.name_th}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectPage;
