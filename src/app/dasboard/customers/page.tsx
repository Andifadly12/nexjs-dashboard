import React from "react";

export default function page() {
  return (
    <div>
      <form action="">
        <label className="text-black block mb-2 text-sm font-medium ">
          Name Customers :
        </label>
        <input
          type="text"
          placeholder="Masukkan name"
          className="border border-gray-700 p-2 rounded-md w-full text-black "
        />
        <label className="text-black block mb-2 text-sm font-medium ">
          Email :
        </label>
        <input
          type="email"
          placeholder="Masukkan name"
          className="border border-gray-700 p-2 rounded-md w-full text-black "
        />
        <label className="text-black block mb-2 text-sm font-medium ">
          Revenue
        </label>
        <input
          type="text"
          placeholder="Masukkan name"
          className="border border-gray-700 p-2 rounded-md w-full text-black "
        />
        <label
          htmlFor="image"
          className="text-black block mb-2 text-sm font-medium"
        >
          Upload Image:
        </label>
        <input
          type="file"
          className="text-black border border-gray-700 text-center p-2 "
        />
      </form>
    </div>
  );
}
