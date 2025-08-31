import { Mail, Map, Phone, Send } from '@mui/icons-material';
import React, { useState } from 'react';
import Button from '../Button';
import { Contactstyles as Style } from './Contact.style';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    console.log('Dados do formulário:', formState);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Obrigado pelo seu contato! Responderemos em breve.');
      setFormState({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  return (
    <div className={Style.container}>
      <div className={Style.content}>

        <header className={Style.header}>
          <h1 className={Style.title}>
            Entre em Contato Conosco
          </h1>
          <p className={Style.subtitle}>
            Estamos ansiosos para ouvir de você. Seja para reservas, perguntas ou feedback, nossa equipe está pronta para ajudar.
          </p>
        </header>

        <main className={Style.main}>
          <div className={Style.infoContainer}>
            <div className={Style.infoCard}>
              <h2 className={Style.infoCardTitle}>Nossas Informações</h2>
              <ul className={Style.infoList}>
                <li className={Style.infoListItem}>
                  <Map />
                  <div className={Style.infoListItemContent}>
                    <h3 className={Style.infoListItemTitle}>Endereço</h3>
                    <p className={Style.infoListItemText}>Av. Regency, 0001, Atalaia</p>
                    <p className={Style.infoListItemText}>Cidade Paradisíaca, CEP 00001-000</p>
                  </div>
                </li>
                <li className={Style.infoListItem}>
                  <Phone />
                  <div className={Style.infoListItemContent}>
                    <h3 className={Style.infoListItemTitle}>Telefone</h3>
                    <p className={Style.infoListItemText}>Reservas: (11) 98765-4321</p>
                    <p className={Style.infoListItemText}>Recepção: (11) 12345-6789</p>
                  </div>
                </li>
                <li className={Style.infoListItem}>
                  <Mail />
                  <div className={Style.infoListItemContent}>
                    <h3 className={Style.infoListItemTitle}>Email</h3>
                    <p className={Style.infoListItemText}>regencyheights@reservas.com</p>
                    <p className={Style.infoListItemText}>regencyheights@contato.com</p>
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
            <h2 className={Style.infoCardTitle}>Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className={Style.form}>
                <div>
                  <label htmlFor="name" className={Style.formLabel}>Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className={Style.formInput}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={Style.formLabel}>E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={Style.formInput}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className={Style.formLabel}>Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className={Style.formInput}
                    placeholder="Ex: Informações sobre reserva"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className={Style.formLabel}>Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className={Style.formTextarea}
                    placeholder="Escreva sua mensagem aqui..."
                    required
                  ></textarea>
                </div>
              </div>
              <div className={Style.buttonContainer}>
                <Button type="submit" variant="primary" size="width_full" label={isSubmitting ? 'Enviando...' : 'Enviar Mensagem'} Icon={Send} />
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
