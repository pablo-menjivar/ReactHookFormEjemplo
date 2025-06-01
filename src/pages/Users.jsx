import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import useManageImage from "../hooks/useImageChange";

const Users = () => {
  const { imagePreviews, handleImageChange, removeImageAtIndex } =
    useManageImage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/home"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors"
      >
        Back To Dashboard
      </Link>
      <form className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4 ">
        <Titulo titulo="User Information" />

        <p className="mt-1 text-sm/6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* First Name */}
          <div className="sm:col-span-3 m:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="sm:col-span-3 m:col-span-6">
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-3 m:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          {/* Country */}
          <div className="sm:col-span-3 m:col-span-6">
            <label
              htmlFor="country"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Country
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium text-gray-900"
            >
              User photo
            </label>

            <div className="mt-2 flex flex-col items-center gap-4 rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              {/* Input de archivo */}
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
              >
                <span>Upload a image</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="sr-only"
                />
              </label>
              <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>

              {/* Previsualizaciones */}
              {imagePreviews.length > 0 && (
                <div className="flex gap-4 flex-wrap justify-center mt-4">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`preview-${index}`}
                        className="w-32 h-32 object-cover rounded-lg shadow"
                      />
                      <button
                        type="button"
                        onClick={() => removeImageAtIndex(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs hover:bg-red-600"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Users;
