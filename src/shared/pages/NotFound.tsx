import React from "react";
import { Button } from "@shared";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center h-screen bg-primary">
      <div className="absolute top-10 flex items-center justify-center text-center text-text-color">
        <Button
          label="Voltar para a página inicial"
          variant="terciary"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="flex flex-col items-center justify-center absolute top-60 transform -translate-y-1/2 text-center px-4">
        <p className="text-lg text-text-neutral mb-8">
          Desculpe, a página que você está procurando não existe.
        </p>
      </div>

      <h1 className="text-[160px] font-extrabold text-transparent relative">
        404
        <span
          className="absolute inset-0 text-[160px] font-extrabold text-secondary overflow-hidden"
          style={{
            clipPath: "inset(0 0 50% 0)",
            animation: "moveTop 2s ease-in-out infinite alternate",
          }}
        >
          404
        </span>
        <span
          className="absolute inset-0 text-[160px] font-extrabold text-background overflow-hidden"
          style={{
            clipPath: "inset(50% 0 0 0)",
            animation: "moveBottom 2s ease-in-out infinite alternate",
          }}
        >
          404
        </span>
      </h1>

      <style>{`
        @keyframes moveTop {
          to {
            transform: translateY(-10px) rotate(-2deg);
          }
        }

        @keyframes moveBottom {
          to {
            transform: translateY(10px) rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
