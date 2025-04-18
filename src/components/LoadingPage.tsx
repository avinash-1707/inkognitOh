import { LoaderCircle } from "lucide-react";

const LoadingPage = () => {
  return (
    <>
      <div className=" py-auto px-auto flex items-center justify-center min-h-screen bg-white/80">
        <h1 className="text-4xl p-2 m-2 font-bold">
          inkognit
          <LoaderCircle
            size={36}
            strokeWidth={3}
            className="animate-spin inline-block mb-1"
          />
          h...
        </h1>
      </div>
    </>
  );
};

export default LoadingPage;
