import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import {
  Settings as SettingsIcon,
  Notifications,
  Save,
  CheckCircle,
  MeetingRoom,
  Gavel,
  CreditCard,
  Extension,
  Image as ImageIcon,
  AccountBalance,
  AttachMoney,
  QrCode,
} from "@mui/icons-material";
import { SettingsStyles as styles } from "./Settings.style";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const tabs = [
    { id: "general", label: "Gerais", icon: <SettingsIcon fontSize="small" /> },
    {
      id: "checkin",
      label: "Check-in/out",
      icon: <MeetingRoom fontSize="small" />,
    },
    { id: "policies", label: "Políticas", icon: <Gavel fontSize="small" /> },
    {
      id: "payments",
      label: "Pagamentos",
      icon: <CreditCard fontSize="small" />,
    },
    {
      id: "notifications",
      label: "Notificações",
      icon: <Notifications fontSize="small" />,
    },
    {
      id: "integrations",
      label: "Integrações",
      icon: <Extension fontSize="small" />,
    },
  ];

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const renderGeneralSettings = () => (
    <div className="animate-fadeIn">
      <h3 className={styles.sectionHeader}>Configurações Gerais</h3>

      <div className={styles.grid}>
        <div>
          <Input label="Nome do Hotel" defaultValue="Hotel Paradise" />
        </div>
        <div>
          <label className={styles.label}>Logo do Hotel</label>
          <div className={styles.logoContainer}>
            <div className={styles.logoPreview}>
              <ImageIcon />
            </div>
            <Button
              label="Alterar Logo"
              size="small"
              variant="primary"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <Select label="Idioma do Sistema" defaultValue="pt-BR">
            <option value="pt-BR">Português (BR)</option>
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español (ES)</option>
          </Select>
        </div>
        <div>
          <Select label="Fuso Horário" defaultValue="America/Sao_Paulo">
            <option value="America/Sao_Paulo">America/Sao_Paulo (UTC-3)</option>
            <option value="UTC">UTC (GMT+0)</option>
          </Select>
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <Input label="Telefone Fixo" placeholder="(11) 3456-7890" />
        </div>
        <div>
          <Input label="WhatsApp" placeholder="(11) 99999-9999" />
        </div>
      </div>

      <div className="mb-6">
        <label className={styles.label}>Endereço Completo</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input placeholder="CEP" />
          <Input placeholder="Cidade" />
          <Input placeholder="Estado" />
        </div>
        <Input placeholder="Rua e número" />
      </div>

      <div className="mb-6">
        <label className={styles.label}>Política de Privacidade</label>
        <textarea
          className={styles.textarea}
          placeholder="Digite a política de privacidade do hotel..."
          defaultValue="O Hotel Paradise respeita sua privacidade e protege seus dados pessoais..."
        ></textarea>
      </div>
    </div>
  );

  const renderCheckInSettings = () => (
    <div className="animate-fadeIn">
      <h3 className={styles.sectionHeader}>Horários e Taxas</h3>
      <div className={styles.grid}>
        <div>
          <Input type="time" label="Horário de Check-in" defaultValue="14:00" />
        </div>
        <div>
          <Input
            type="time"
            label="Horário de Check-out"
            defaultValue="11:00"
          />
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <Input
            type="number"
            label="Taxa de Early Check-in (%)"
            defaultValue="50"
            placeholder="Ex: 50"
            helperText="Porcentagem sobre a diária"
          />
        </div>
        <div>
          <Input
            type="number"
            label="Taxa de Late Check-out (%)"
            defaultValue="50"
            placeholder="Ex: 50"
            helperText="Porcentagem sobre a diária"
          />
        </div>
      </div>
    </div>
  );

  const renderPoliciesSettings = () => (
    <div className="animate-fadeIn">
      <h3 className={styles.sectionHeader}>Regras da Propriedade</h3>
      <div className={styles.gridFull}>
        <div>
          <label className={styles.label}>Política de Cancelamento</label>
          <textarea
            className={styles.textarea}
            defaultValue="Cancelamento gratuito até 48 horas antes do check-in. Após este prazo, será cobrada a primeira diária."
          ></textarea>
        </div>
        <div>
          <label className={styles.label}>Política para Crianças</label>
          <textarea
            className={styles.textarea}
            defaultValue="Crianças até 5 anos não pagam se ocuparem as camas existentes."
          ></textarea>
        </div>
        <div>
          <label className={styles.label}>Política para Pets</label>
          <textarea
            className={styles.textarea}
            defaultValue="Aceitamos pets de pequeno porte mediante taxa adicional de R$ 50,00 por dia."
          ></textarea>
        </div>
      </div>
    </div>
  );

  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([
    "credit",
    "debit",
    "pix",
    "cash",
  ]);

  const togglePaymentMethod = (id: string) => {
    setSelectedPaymentMethods((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const renderPaymentsSettings = () => (
    <div className="animate-fadeIn">
      <h3 className={styles.sectionHeader}>Configurações Financeiras</h3>
      <div className={styles.grid}>
        <div>
          <Select label="Moeda Padrão" defaultValue="BRL">
            <option value="BRL">Real Brasileiro (BRL)</option>
            <option value="USD">Dólar Americano (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </Select>
        </div>
        <div>
          <Input
            type="number"
            label="Impostos e Taxas (%)"
            defaultValue="15"
            placeholder="Ex: 15"
          />
        </div>
      </div>

      <h4 className="font-medium text-gray-900 mb-4">
        Métodos de Pagamento Aceitos
      </h4>
      <div className={styles.paymentGrid}>
        {[
          {
            id: "credit",
            label: "Cartão de Crédito",
            icon: <CreditCard fontSize="large" />,
          },
          {
            id: "debit",
            label: "Cartão de Débito",
            icon: <AccountBalance fontSize="large" />,
          },
          { id: "pix", label: "Pix", icon: <QrCode fontSize="large" /> },
          {
            id: "cash",
            label: "Dinheiro",
            icon: <AttachMoney fontSize="large" />,
          },
        ].map((method) => {
          const isActive = selectedPaymentMethods.includes(method.id);
          return (
            <div
              key={method.id}
              onClick={() => togglePaymentMethod(method.id)}
              className={`${styles.paymentCard} ${
                isActive ? styles.paymentCardActive : styles.paymentCardInactive
              }`}
            >
              {isActive && (
                <div className={styles.checkIcon}>
                  <CheckCircle fontSize="inherit" />
                </div>
              )}
              <div className={styles.paymentIcon}>{method.icon}</div>
              <span className={styles.paymentLabel}>{method.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderNotificationsSettings = () => (
    <div className="animate-fadeIn">
      <h3 className={styles.sectionHeader}>Preferências de Notificação</h3>
      <div className="space-y-6">
        {[
          {
            id: "new_res",
            label: "Novas Reservas",
            desc: "Receber alerta quando uma nova reserva for criada.",
          },
          {
            id: "cancel",
            label: "Cancelamentos",
            desc: "Receber alerta quando uma reserva for cancelada.",
          },
          {
            id: "checkin_alert",
            label: "Alerta de Check-in",
            desc: "Notificar 1 hora antes do check-in previsto.",
          },
          {
            id: "stock",
            label: "Estoque Baixo",
            desc: "Alertar quando itens do estoque estiverem acabando.",
          },
        ].map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
            <label className={styles.switchLabel}>
              <input
                type="checkbox"
                className={styles.switchInput}
                defaultChecked
              />
              <div className={styles.switchSlider}></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderIntegrationsSettings = () => (
    <div className="animate-fadeIn">
      <h3 className={styles.sectionHeader}>Integrações Externas</h3>
      <div className="space-y-4">
        {[
          { name: "Stripe", status: "Conectado", icon: "S" },
          { name: "Google Analytics", status: "Conectado", icon: "G" },
          { name: "Mailchimp", status: "Desconectado", icon: "M" },
          { name: "WhatsApp Business", status: "Conectado", icon: "W" },
        ].map((item, i) => (
          <div key={i} className={styles.integrationItem}>
            <div className={styles.integrationInfo}>
              <div className={styles.integrationIcon}>{item.icon}</div>
              <div>
                <p className={styles.integrationName}>{item.name}</p>
                {item.status === "Conectado" ? (
                  <span className={styles.integrationStatus}>Conectado</span>
                ) : (
                  <span className="text-xs text-gray-400">Não configurado</span>
                )}
              </div>
            </div>
            <Button
              label={item.status === "Conectado" ? "Configurar" : "Conectar"}
              variant={item.status === "Conectado" ? "minimal" : "primary"}
              size="small"
              onClick={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <nav className={styles.tabsNav} aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButtonBase} ${
                activeTab === tab.id
                  ? styles.tabButtonActive
                  : styles.tabButtonInactive
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className={styles.contentContainer}>
        {activeTab === "general" && renderGeneralSettings()}
        {activeTab === "checkin" && renderCheckInSettings()}
        {activeTab === "policies" && renderPoliciesSettings()}
        {activeTab === "payments" && renderPaymentsSettings()}
        {activeTab === "notifications" && renderNotificationsSettings()}
        {activeTab === "integrations" && renderIntegrationsSettings()}

        <div className="mt-8 flex justify-end items-center gap-4">
          {showSuccess && (
            <span className={styles.successMessage}>
              <CheckCircle fontSize="small" /> Salvo com sucesso!
            </span>
          )}
          <Button
            label={isSaving ? "Salvando..." : "Salvar"}
            onClick={handleSave}
            disabled={isSaving}
            Icon={!isSaving ? Save : undefined}
            variant="primary"
            size="small"
            className="w-full md:w-auto min-w-[120px]"
          />
        </div>
      </div>
    </div>
  );
}
