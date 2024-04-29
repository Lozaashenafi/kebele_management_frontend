import React from "react";
import logo from "../../../public/resource/images/icons/ethiopia.png";
import html2canvas from "html2canvas";
import styles from "../../assets/style/certificateGenerator.module.scss";
const Generator = (data) => {
  const downloadCertificate = () => {
    const certificateElement = document.getElementById("certificate");

    html2canvas(certificateElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "certificate.jpeg";
      link.click();
    });
  };
  console.log(data);
  console.log(
    data.data.fullName,
    data.data.gender,
    data.data.id,
    data.data.nationality,
    data.data.birthDate
  );
  return (
    <section className={styles.container}>
      <div className={styles.wrapper} id="certificate">
        <div className={styles.certificateWrapper}>
          <div className={styles.certificateContainer}>
            <img src={logo} alt="flage" className={styles.image} />
          </div>
          <span className={styles.title}>Government of Ethiopia</span>
          <div className={styles.pwrapper}>
            <p className={styles.personal}>Personal</p>
            <p className={styles.Resident}>Resident Card</p>
          </div>
        </div>
        <div className={styles.imgcon}>
          <div className={styles.imgcon2}>
            <div className={styles.imgcon3}></div>
            <p className={styles.nationalit}>Ethiopian</p>
          </div>
          <div className={styles.infowrapper}>
            <label htmlFor="">Name: </label>
            <span>{data.data.fullName}</span>
            <br />
            <label htmlFor="">ID Number: </label>
            <span>{`${data.data.id}565`}</span>
            <br />
            <label htmlFor="">Sex: </label>
            <span>{data.data.gender}</span>
            <br />
            <label htmlFor="">Nationality: </label>
            <span>{data.data.nationality}</span>
            <br />
            <label htmlFor="">Date of Birth: </label>
            <span>{data.data.birthDate}</span>
          </div>
          <div className={styles.expired}>
            <div className={styles.flex}>
              <p>ISSUED DATE:</p>
              <span>30/04/2024</span>
            </div>
            <div className={styles.flex}>
              <p>expiered date</p>
              <span>1/04/2029</span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button} onClick={downloadCertificate}>
        Download PDF
      </button>
    </section>
  );
};

export default Generator;
