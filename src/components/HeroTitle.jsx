import { IoCloseCircleOutline } from "react-icons/io5";

export const HeroTitle = () => {
  return (
    <div className="flex justify-between items-center mx-4 h-full">
      <h1 className="text-lg font-semibold">Edit: Hero Image</h1>
      <IoCloseCircleOutline className="cursor-pointer" />
    </div>
  )
}