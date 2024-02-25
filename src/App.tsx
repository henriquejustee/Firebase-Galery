import ActionAreaCard from "./components/Card";
import { useState } from "react";
import { ChangeEvent } from "react";


export default function App () {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      console.log(file.name);
    }
  };

  return (
    <>
    <div className="min-h-screen text-center bg-slate-900">
        <h1 className="pt-10 mx-auto text-white font-bold text-4xl">Image Galery</h1>
        <div className="mx-auto flex-col items-center justify-center flex pt-5">
          <h2 className="text-white pb-2 text-sm text-opacity-50">Upload an image below</h2>
          <input onChange={handleImageUpload} className="block w-72 text-sm  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"></input>
        </div>
        <div className="flex pt-10 items-center justify-center mx-auto flex-wrap gap-5">
        <ActionAreaCard title="Imagem fofa"/>
        <ActionAreaCard title="Outra imagem fofa"/>
        <ActionAreaCard title="Outra..."/>
        <ActionAreaCard title="Outra..."/>
        <ActionAreaCard title="Outra..."/>
        </div>
    </div>
    </>
  );
};


