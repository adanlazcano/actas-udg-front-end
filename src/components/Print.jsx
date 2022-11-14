import React from "react";
import { useContext } from "react";
import MainContext from "../context/MainContext";

// Print PDF template
const Print = (_) => {
  const { student } = useContext(MainContext);

  return (
    <div className="print">
      <div className="printHeader">
        <div className="printHeaderLogo">
          <img src="logoprint.png" alt="" />
        </div>
        <div className="printHeaderTitle">
          <h1>Universidad de Guadalajara</h1>
          <h4>
            CENTRO UNIVERSITARIO DE CIENCIAS ECON&Oacute;MICO ADMINISTRATIVAS
          </h4>
        </div>
      </div>

      <div className="printContainer">
        <div className="printLeft">
          <p>{student.code}</p>

          <b className="printActa"></b>

          <img className="printLeftImg" src="bars.jpg" alt="" />
        </div>

        <div className="printRight">
          En la Ciudad de Zapopan, Jalisco el día <b className="printDate"></b>,
          se reunieron en el Centro Universitario de Ciencias Económico
          Administrativas, los profesores: DR. ALEJANDRO CAMPOS SÁNCHEZ{" "}
          <b>Presidente</b>, MTRA. IRMA JANETT SEPÚLVEDA RÍOS <b>Secretario</b>,
          DR. PEDRO DANIEL CRUZ AGUILAR <b>Vocal</b>, MTRA. BEATRIZ VENEGAS
          SAHAGÚN <b>Vocal</b>, MTRA. MARTHA ROSALÍA SÁNCHEZ LÓPEZ <b>Vocal</b>,
          designados por el Comité de Titulación como integrantes del Jurado de
          la carrera <b>{student.career}</b>, con el objeto de llevar a cabo la
          evaluación solicitada por el pasante <b> C. {student.name}</b>, bajo
          la modalidad <b className="printActa"></b>, a que se refiere en el
          Reglamento General de Titulación de la Universidad de Guadalajara y
          del Reglamento de Titulación de este Centro Universitario, para
          obtener el Título de <b>{student.career}</b>, de acuerdo a la
          normatividad vigente.
          <br />
          <br />A continuación el Presidente del Jurado de Titulación procedió a
          tomar la protesta en los siguientes términos. "¿Protesta Usted ejercer
          la profesión con honradez, consagrar su ejercicio al bien de la
          colectividad, velando siempre por el nombre de la Universidad de
          Guadalajara? A lo que el sustentante contestó: "Si protesto". El
          Presidente del Jurado de Titulación añadió, "Si así lo hiciere, su
          conciencia y la colectividad se lo premien y si no, se lo demanden".
          Con lo que terminó el acto, levantándose la presente para constancia
          que firman los integrantes del Jurado de Titulación y el sustentante.
          <br />
          Se efectuó el pago correspondiente en la Dirección de Finanzas de la
          Universidad de Guadalajara con fecha <b className="printDate"></b>.
        </div>
      </div>

      <div className="printSignatures">
        <div className="printSignaturesCont">
          DR. ALEJANDRO CAMPOS SÁNCHEZ
          <br />
          <b>Presidente</b>
        </div>
        <div className="printSignaturesCont">
          DR. JOS&Eacute; LUIS SANTANA MEDINA
          <br />
          <b>Director de División</b>
        </div>
        <div className="printSignaturesCont">
          MTRO. JOSÉ ANTONIO AGUILAR ZÁRATE
          <br />
          <b>Secretario de División</b>
        </div>
        <div className="printSignaturesCont">
          MTRA. IRMA JANETT SEPÚLVEDA RÍOS
          <br />
          <b>Secretario</b>
        </div>
        <div className="printSignaturesCont">
          DR. PEDRO DANIEL CRUZ AGUILAR
          <br />
          <b>Vocal</b>
        </div>
        <div className="printSignaturesCont">
          MTRA. BEATRIZ VENEGAS SAHAGÚN
          <br />
          <b>Vocal</b>
        </div>
        <div className="printSignaturesCont">
          MTRA. MARTHA ROSALÍA SÁNCHEZ LÓPEZ
          <br />
          <b>Vocal</b>
        </div>
        <div className="printSignaturesCont">
          {student.name}
          <br />
          <b>Sustentante</b>
        </div>
      </div>
    </div>
  );
};

export default Print;
