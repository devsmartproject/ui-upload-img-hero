import { IoCloudUploadOutline } from "react-icons/io5";

export const HeroForm = () => {
  return (
    <div className="mx-4 mt-6">
      {/* Primera parte */}
      <h3 className="text-sm font-semibold">Upload hero image</h3>
      <div className="h-[140px] bg-slate-100 rounded-md mt-2 flex flex-col items-center justify-center border">
        <div className="w-12 h-12 rounded-full bg-green-700 items-center flex justify-center mb-2 cursor-pointer hover:bg-green-600">
          <IoCloudUploadOutline className="text-white cursor-pointer" />
        </div>
        <span className="text-xs">
          <a href="#" className="text-green-600 hover:text-green-700">
            Click to upload
          </a>{" "}
          or drag drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
      {/* Segunda parte */}
      <h3 className="text-sm font-semibold mt-4">Caption</h3>
      <input
        type="text"
        name="caption"
        id="caption"
        placeholder="Enter capion here"
        autoComplete="off"
        className="w-full h-10 px-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
      />
      <span className="text-xs font-normal">Max 24 words</span>
      {/* Tercera parte */}
      <h3 className="text-sm font-semibold mt-4">Description</h3>
      <textarea
        name="descripcion"
        id=""
        cols="30"
        rows="10"
        placeholder="Enter description to here"
        className="w-full h-24 px-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
      ></textarea>
      <span className="text-xs font-normal">Max 24 words</span>
      {/* Cuarta parte */}
      <h3 className="text-sm font-semibold mt-4">Call to action</h3>
      <h4 className="text-sm font-semibold mt-4">Label</h4>
      <input
        type="text"
        name="caption"
        id="caption"
        placeholder="Enter CTA text here"
        autoComplete="off"
        className="w-full h-10 px-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
      />
      <span className="text-xs font-normal">Max 24 words</span>
    </div>
  );
};
