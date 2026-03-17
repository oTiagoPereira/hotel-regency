import { CreditCard, Person } from "@mui/icons-material";
import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@shared";
import { CheckoutRoomStyles as Styles } from "./CheckoutRoom.style";

// --- Dados da Reserva (Exemplo) ---
const reservationDetails = {
  checkIn: "28 de Ago, 2025 (14:00)",
  checkOut: "31 de Ago, 2025 (12:00)",
  guests: "2 adultos, 1 criança",
  items: [
    { name: "1x Suíte Master Vista Mar", price: 2400 },
    { name: "Serviço de SPA (2x)", price: 500 },
    { name: "Vaga de Garagem (3 dias)", price: 90 },
  ],
  subtotal: 2990,
  taxes: 149.5,
  total: 3139.5,
};

function CheckoutRoom() {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [showPixQr, setShowPixQr] = useState(false);
  const [installments, setInstallments] = useState(1);

  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleaned;
  };

  const formatCPF = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
    if (match) {
      return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    return cleaned;
  };

  const formatCreditCard = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.replace(/(\d{4})/g, "$1 ").trim();
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length > 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(formatPhone(e.target.value));
  const handleCpfChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCpf(formatCPF(e.target.value));
  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCardNumber(formatCreditCard(e.target.value));
  const handleCardExpiryChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCardExpiry(formatExpiryDate(e.target.value));
  const handleInstallmentsChange = (e: ChangeEvent<HTMLSelectElement>) =>
    setInstallments(Number(e.target.value));

  return (
    <section className={Styles.mainSection}>
      <div className={Styles.leftColumn}>
        <div className="space-y-8">
          <section className={Styles.formSection}>
            <h2 className={Styles.formSectionTitle}>
              <Person />
              Informações do Hóspede Principal
            </h2>
            <div className={Styles.inputGroup}>
              <div className={Styles.formGrid}>
                <div>
                  <label htmlFor="fullName" className={Styles.label}>
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Seu nome completo"
                    className={Styles.input}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={Styles.label}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    className={Styles.input}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={Styles.label}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(99) 99999-9999"
                    maxLength={15}
                    className={Styles.input}
                  />
                </div>
                <div>
                  <label htmlFor="cpf" className={Styles.label}>
                    CPF
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={handleCpfChange}
                    placeholder="000.000.000-00"
                    maxLength={14}
                    className={Styles.input}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="requests" className={Styles.label}>
                  Pedidos Especiais (Opcional)
                </label>
                <textarea
                  id="requests"
                  rows={3}
                  placeholder="Ex: Andar alto, preferência por cama de casal, etc."
                  className={Styles.textarea}
                />
              </div>
            </div>
          </section>

          <section className={Styles.formSection}>
            <h2 className={Styles.formSectionTitle}>
              <CreditCard />
              Forma de Pagamento
            </h2>
            <div className={Styles.paymentTabsContainer}>
              <div className={Styles.paymentTabsFlex}>
                <button
                  onClick={() => setPaymentMethod("creditCard")}
                  className={`${Styles.paymentTabButton} ${
                    paymentMethod === "creditCard"
                      ? Styles.paymentTabActive
                      : Styles.paymentTabInactive
                  }`}
                >
                  Cartão de Crédito
                </button>
                <button
                  onClick={() => setPaymentMethod("pix")}
                  className={`${Styles.paymentTabButton} ${
                    paymentMethod === "pix"
                      ? Styles.paymentTabActive
                      : Styles.paymentTabInactive
                  }`}
                >
                  PIX
                </button>
              </div>

              {paymentMethod === "creditCard" && (
                <div className={Styles.paymentContent}>
                  <div className={Styles.formGrid}>
                    <div className="sm:col-span-2">
                      <label htmlFor="cardName" className={Styles.label}>
                        Nome no Cartão
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        placeholder="Como aparece no cartão"
                        className={Styles.input}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="cardNumber" className={Styles.label}>
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="0000 0000 0000 0000"
                        maxLength={19}
                        className={Styles.input}
                      />
                    </div>
                    <div>
                      <label htmlFor="cardExpiry" className={Styles.label}>
                        Validade
                      </label>
                      <input
                        type="text"
                        id="cardExpiry"
                        value={cardExpiry}
                        onChange={handleCardExpiryChange}
                        placeholder="MM/AA"
                        maxLength={5}
                        className={Styles.input}
                      />
                    </div>
                    <div>
                      <label htmlFor="cardCvc" className={Styles.label}>
                        CVV
                      </label>
                      <input
                        type="password"
                        id="cardCvc"
                        placeholder="123"
                        maxLength={4}
                        className={Styles.input}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="installments" className={Styles.label}>
                        Parcelas
                      </label>
                      <select
                        id="installments"
                        value={installments}
                        onChange={handleInstallmentsChange}
                        className={Styles.input}
                      >
                        {[...Array(12)].map((_, i) => {
                          const numInstallments = i + 1;
                          const installmentValue = (
                            reservationDetails.total / numInstallments
                          ).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          });
                          const label = `${numInstallments}x de ${installmentValue}${
                            numInstallments > 1 ? " sem juros" : ""
                          }`;
                          return (
                            <option
                              key={numInstallments}
                              value={numInstallments}
                            >
                              {label}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {paymentMethod === "pix" && (
                <div className={Styles.paymentContent}>
                  {!showPixQr ? (
                    <>
                      <p className="text-text-color/80">
                        Clique no botão para gerar o QR Code para pagamento via
                        PIX. Ele será válido por 15 minutos.
                      </p>
                      <Button
                        label="Gerar QR Code PIX"
                        variant="primary"
                        onClick={() => setShowPixQr(true)}
                      />
                    </>
                  ) : (
                    <div className={Styles.pixQrContainer}>
                      <img
                        src="https://placehold.co/250x250/e2e8f0/4a5568?text=QR+Code+PIX"
                        alt="QR Code PIX"
                        className={Styles.pixQrImage}
                      />
                      <div className="w-full text-center">
                        <label htmlFor="pixCode" className="sr-only">
                          PIX Copia e Cola
                        </label>
                        <input
                          id="pixCode"
                          type="text"
                          readOnly
                          value="00020126580014br.gov.bcb.pix0136... (código de exemplo)"
                          className={Styles.pixCodeInput}
                          aria-label="Código PIX copia e cola"
                        />
                        <button 
                          className={Styles.pixCopyButton}
                          aria-label={t("checkout.copyPix", "Copiar código PIX")}
                          title={t("checkout.copyPix", "Copiar código PIX")}
                        >
                          {t("checkout.copyCode", "Copiar código")}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <div className={Styles.rightColumn}>
        <div className={Styles.summaryCard}>
          <h2 className={Styles.summaryTitle}>Detalhes da Reserva</h2>
          <div className={Styles.summarySection}>
            <div className={Styles.summaryRow}>
              <span>Check-in:</span>
              <p className="font-bold">{reservationDetails.checkIn}</p>
            </div>
            <div className={Styles.summaryRow}>
              <span>Check-out:</span>
              <p className="font-bold">{reservationDetails.checkOut}</p>
            </div>
            <div className={Styles.summaryRow}>
              <span>Hóspedes:</span>
              <p className="font-bold">{reservationDetails.guests}</p>
            </div>
          </div>
          <hr className="border-border-light" />
          <div className="space-y-3">
            <h3 className={Styles.summaryItemLabel}>Itens da reserva</h3>
            {reservationDetails.items.map((item) => (
              <div key={item.name} className={Styles.summaryRow}>
                <span>{item.name}</span>
                <p className="font-bold">
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            ))}
          </div>
          <hr className="border-border-light" />
          <div className={Styles.summarySection}>
            <div className={Styles.summaryRow}>
              <span>Subtotal</span>
              <span className="font-bold">
                {reservationDetails.subtotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className={Styles.summaryRow}>
              <span>Taxas e Impostos</span>
              <span className="font-bold">
                {reservationDetails.taxes.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <div className={Styles.summaryTotalRow}>
              <span>Total</span>
              <span className="font-bold">
                {reservationDetails.total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          </div>
          <div className={Styles.termsContainer}>
            <div className={Styles.termsFlex}>
              <input
                id="terms"
                name="terms"
                type="checkbox"
                style={{
                  width: "20px",
                  height: "20px",
                  accentColor: "#2f4f4f",
                }}
              />
              <label htmlFor="terms" className={Styles.termsLabel}>
                Eu li e aceito os{" "}
                <a href="#" className={Styles.termsLink}>
                  termos e condições
                </a>
                .
              </label>
            </div>
          </div>
          <Button 
            label={t("checkout.finishAndPay", "Finalizar e Pagar")} 
            variant="primary" 
          />
        </div>
      </div>
    </section>
  );
}

export default CheckoutRoom;
