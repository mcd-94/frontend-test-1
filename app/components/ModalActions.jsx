import React from "react";
import Link from "next/link";

const ModalActions = () => {
  return (
    <div className="modalActions">
      <div className="buttonContainer">
        <Link href={"/"} className="volver">
          Volver
        </Link>
        <Link href={"/Camera"} className="siguiente">
          Siguiente
        </Link>
      </div>
    </div>
  );
};

export default ModalActions;
