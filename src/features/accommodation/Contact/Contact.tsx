import { Mail, Map, Phone, Send } from "@mui/icons-material";
import React, { useState } from "react";
import { Button } from "@shared";
import { Contactstyles as Style } from "./Contact.style";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    console.log("Dados do formulário:", formState);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(t("contact.form.success"));
      setFormState({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitMessage(""), 5000);
    }, 2000);
  };

  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <header className={Style.header}>
          <h1 className={Style.title}>{t("contact.title")}</h1>
          <p className={Style.subtitle}>{t("contact.subtitle")}</p>
        </header>

        <main className={Style.main}>
          <div className={Style.infoContainer}>
            <div className={Style.infoCard}>
              <h2 className={Style.infoCardTitle}>{t("contact.info.title")}</h2>
              <ul className={Style.infoList}>
                <li className={Style.infoListItem}>
                  <Map />
                  <div className={Style.infoListItemContent}>
                    <h3 className={Style.infoListItemTitle}>
                      {t("contact.info.address.title")}
                    </h3>
                    <p className={Style.infoListItemText}>
                      {t("contact.info.address.line1")}
                    </p>
                    <p className={Style.infoListItemText}>
                      {t("contact.info.address.line2")}
                    </p>
                  </div>
                </li>
                <li className={Style.infoListItem}>
                  <Phone />
                  <div className={Style.infoListItemContent}>
                    <h3 className={Style.infoListItemTitle}>
                      {t("contact.info.phone.title")}
                    </h3>
                    <p className={Style.infoListItemText}>
                      {t("contact.info.phone.reservations")}: (11) 98765-4321
                    </p>
                    <p className={Style.infoListItemText}>
                      {t("contact.info.phone.reception")}: (11) 12345-6789
                    </p>
                  </div>
                </li>
                <li className={Style.infoListItem}>
                  <Mail />
                  <div className={Style.infoListItemContent}>
                    <h3 className={Style.infoListItemTitle}>
                      {t("contact.info.email.title")}
                    </h3>
                    <p className={Style.infoListItemText}>
                      regencyheights@reservas.com
                    </p>
                    <p className={Style.infoListItemText}>
                      regencyheights@contato.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={Style.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d426.76644041784346!2d-37.04781983941417!3d-10.987414957556656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1756668978653!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Hotel"
              ></iframe>
            </div>
          </div>

          <div className={Style.formContainer}>
            <h2 className={Style.infoCardTitle}>{t("contact.form.title")}</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className={Style.form}>
                <div>
                  <label htmlFor="name" className={Style.formLabel}>
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className={Style.formInput}
                    placeholder={t("contact.form.placeholder.name")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={Style.formLabel}>
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={Style.formInput}
                    placeholder={t("contact.form.placeholder.email")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className={Style.formLabel}>
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className={Style.formInput}
                    placeholder={t("contact.form.placeholder.subject")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className={Style.formLabel}>
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className={Style.formTextarea}
                    placeholder={t("contact.form.placeholder.message")}
                    required
                  ></textarea>
                </div>
              </div>
              <div className={Style.buttonContainer}>
                <Button
                  type="submit"
                  variant="primary"
                  size="width_full"
                  label={
                    isSubmitting
                      ? t("contact.form.sending")
                      : t("contact.form.submit")
                  }
                  Icon={Send}
                />
              </div>
              {submitMessage && (
                <p className={Style.submitMessage}>{submitMessage}</p>
              )}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
