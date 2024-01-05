import { useNavigate } from "react-router-dom";
import Button from "./button";

const WelcomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-center font-bold py-4">
        SELAMAT DATANG DI HALAMAN SKRINING DECUBITUS
      </h1>
      <h2 className="text-center">
        Silahkan klik tombol dibawah untuk mulai skrining
      </h2>
      <div className="mt-4">
        <Button onClick={() => navigate("/kondisi-fisik")}>Mulai</Button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
