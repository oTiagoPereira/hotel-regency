import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@shared";
import { Input } from "@shared";
import { Select } from "@shared";
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
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const tabs = [
    {
      id: "general",
      label: t("dashboard.settings.tabs.general"),
      icon: <SettingsIcon fontSize="small" />,
    },
    {
      id: "checkin",
      label: t("dashboard.settings.tabs.checkin"),
      icon: <MeetingRoom fontSize="small" />,
    },
    {
      id: "policies",
      label: t("dashboard.settings.tabs.policies"),
      icon: <Gavel fontSize="small" />,
    },
    {
      id: "payments",
      label: t("dashboard.settings.tabs.payments"),
      icon: <CreditCard fontSize="small" />,
    },
    {
      id: "notifications",
      label: t("dashboard.settings.tabs.notifications"),
      icon: <Notifications fontSize="small" />,
    },
    {
      id: "integrations",
      label: t("dashboard.settings.tabs.integrations"),
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
      <h3 className={styles.sectionHeader}>
        {t("dashboard.settings.sections.general.title")}
      </h3>

      <div className={styles.grid}>
        <div>
          <Input
            label={t("dashboard.settings.sections.general.hotelName")}
            defaultValue="Hotel Paradise"
          />
        </div>
        <div>
          <label className={styles.label}>
            {t("dashboard.settings.sections.general.hotelLogo")}
          </label>
          <div className={styles.logoContainer}>
            <div className={styles.logoPreview}>
              <ImageIcon />
            </div>
            <Button
              label={t("dashboard.settings.sections.general.changeLogo")}
              size="small"
              variant="primary"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <Select
            label={t("dashboard.settings.sections.general.systemLanguage")}
            defaultValue="pt-BR"
          >
            <option value="pt-BR">Português (BR)</option>
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español (ES)</option>
          </Select>
        </div>
        <div>
          <Select
            label={t("dashboard.settings.sections.general.timezone")}
            defaultValue="America/Sao_Paulo"
          >
            <option value="America/Sao_Paulo">America/Sao_Paulo (UTC-3)</option>
            <option value="UTC">UTC (GMT+0)</option>
          </Select>
        </div>
      </div>

      <div className={styles.grid}>
        <div>
          <Input
            label={t("dashboard.settings.sections.general.phone")}
            placeholder="(11) 3456-7890"
          />
        </div>
        <div>
          <Input
            label={t("dashboard.settings.sections.general.whatsapp")}
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className={styles.label}>
          {t("dashboard.settings.sections.general.address")}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Input
            placeholder={t(
              "dashboard.settings.sections.general.addressFields.zip",
            )}
          />
          <Input
            placeholder={t(
              "dashboard.settings.sections.general.addressFields.city",
            )}
          />
          <Input
            placeholder={t(
              "dashboard.settings.sections.general.addressFields.state",
            )}
          />
        </div>
        <Input
          placeholder={t(
            "dashboard.settings.sections.general.addressFields.street",
          )}
        />
      </div>

      <div className="mb-6">
        <label className={styles.label}>
          {t("dashboard.settings.sections.general.privacyPolicy")}
        </label>
        <textarea
          className={styles.textarea}
          placeholder={t(
            "dashboard.settings.sections.general.privacyPlaceholder",
          )}
          defaultValue={t("dashboard.settings.sections.general.privacyDefault")}
        ></textarea>
      </div>
    </div>
  );

  const renderCheckInSettings = () => (
    <div className="animate-fadeIn">
      <h3 className={styles.sectionHeader}>
        {t("dashboard.settings.sections.checkin.title")}
      </h3>
      <div className={styles.grid}>
        <div>
          <Input
            type="time"
            label={t("dashboard.settings.sections.checkin.checkinTime")}
            defaultValue="14:00"
          />
        </div>
        <div>
          <Input
            type="time"
            label={t("dashboard.settings.sections.checkin.checkoutTime")}
            defaultValue="11:00"
          />
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <Input
            type="number"
            label={t("dashboard.settings.sections.checkin.earlyCheckinFee")}
            defaultValue="50"
            placeholder={t(
              "dashboard.settings.sections.checkin.feePlaceholder",
            )}
            helperText={t("dashboard.settings.sections.checkin.feeHelper")}
          />
        </div>
        <div>
          <Input
            type="number"
            label={t("dashboard.settings.sections.checkin.lateCheckoutFee")}
            defaultValue="50"
            placeholder={t(
              "dashboard.settings.sections.checkin.feePlaceholder",
            )}
            helperText={t("dashboard.settings.sections.checkin.feeHelper")}
          />
        </div>
      </div>
    </div>
  );

  const renderPoliciesSettings = () => (
    <div className="animate-fadeIn">
      <h3 className={styles.sectionHeader}>
        {t("dashboard.settings.sections.policies.title")}
      </h3>
      <div className={styles.gridFull}>
        <div>
          <label className={styles.label}>
            {t("dashboard.settings.sections.policies.cancellation")}
          </label>
          <textarea
            className={styles.textarea}
            defaultValue={t(
              "dashboard.settings.sections.policies.cancellationDefault",
            )}
          ></textarea>
        </div>
        <div>
          <label className={styles.label}>
            {t("dashboard.settings.sections.policies.children")}
          </label>
          <textarea
            className={styles.textarea}
            defaultValue={t(
              "dashboard.settings.sections.policies.childrenDefault",
            )}
          ></textarea>
        </div>
        <div>
          <label className={styles.label}>
            {t("dashboard.settings.sections.policies.pets")}
          </label>
          <textarea
            className={styles.textarea}
            defaultValue={t("dashboard.settings.sections.policies.petsDefault")}
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
      <h3 className={styles.sectionHeader}>
        {t("dashboard.settings.sections.payments.title")}
      </h3>
      <div className={styles.grid}>
        <div>
          <Select
            label={t("dashboard.settings.sections.payments.currency")}
            defaultValue="BRL"
          >
            <option value="BRL">Real Brasileiro (BRL)</option>
            <option value="USD">Dólar Americano (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </Select>
        </div>
        <div>
          <Input
            type="number"
            label={t("dashboard.settings.sections.payments.taxes")}
            defaultValue="15"
            placeholder={t(
              "dashboard.settings.sections.payments.taxesPlaceholder",
            )}
          />
        </div>
      </div>

      <h4 className="font-medium text-text-color mb-4">
        {t("dashboard.settings.sections.payments.acceptedMethods")}
      </h4>
      <div className={styles.paymentGrid}>
        {[
          {
            id: "credit",
            label: t("dashboard.settings.sections.payments.methods.credit"),
            icon: <CreditCard fontSize="large" />,
          },
          {
            id: "debit",
            label: t("dashboard.settings.sections.payments.methods.debit"),
            icon: <AccountBalance fontSize="large" />,
          },
          {
            id: "pix",
            label: t("dashboard.settings.sections.payments.methods.pix"),
            icon: <QrCode fontSize="large" />,
          },
          {
            id: "cash",
            label: t("dashboard.settings.sections.payments.methods.cash"),
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
      <h3 className={styles.sectionHeader}>
        {t("dashboard.settings.sections.notifications.title")}
      </h3>
      <div className="space-y-6">
        {[
          {
            id: "new_res",
            label: t(
              "dashboard.settings.sections.notifications.items.new_res.label",
            ),
            desc: t(
              "dashboard.settings.sections.notifications.items.new_res.desc",
            ),
          },
          {
            id: "cancel",
            label: t(
              "dashboard.settings.sections.notifications.items.cancel.label",
            ),
            desc: t(
              "dashboard.settings.sections.notifications.items.cancel.desc",
            ),
          },
          {
            id: "checkin_alert",
            label: t(
              "dashboard.settings.sections.notifications.items.checkin_alert.label",
            ),
            desc: t(
              "dashboard.settings.sections.notifications.items.checkin_alert.desc",
            ),
          },
          {
            id: "stock",
            label: t(
              "dashboard.settings.sections.notifications.items.stock.label",
            ),
            desc: t(
              "dashboard.settings.sections.notifications.items.stock.desc",
            ),
          },
        ].map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-color">{item.label}</p>
              <p className="text-sm text-text-muted">{item.desc}</p>
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
      <h3 className={styles.sectionHeader}>
        {t("dashboard.settings.sections.integrations.title")}
      </h3>
      <div className="space-y-4">
        {[
          {
            name: "Stripe",
            status: t("dashboard.settings.sections.integrations.connected"),
            icon: "S",
          },
          {
            name: "Google Analytics",
            status: t("dashboard.settings.sections.integrations.connected"),
            icon: "G",
          },
          {
            name: "Mailchimp",
            status: t("dashboard.settings.sections.integrations.disconnected"),
            icon: "M",
          },
          {
            name: "WhatsApp Business",
            status: t("dashboard.settings.sections.integrations.connected"),
            icon: "W",
          },
        ].map((item, i) => (
          <div key={i} className={styles.integrationItem}>
            <div className={styles.integrationInfo}>
              <div className={styles.integrationIcon}>{item.icon}</div>
              <div>
                <p className={styles.integrationName}>{item.name}</p>
                {item.status ===
                t("dashboard.settings.sections.integrations.connected") ? (
                  <span className={styles.integrationStatus}>
                    {t("dashboard.settings.sections.integrations.connected")}
                  </span>
                ) : (
                  <span className="text-xs text-text-muted">
                    {t(
                      "dashboard.settings.sections.integrations.notConfigured",
                    )}
                  </span>
                )}
              </div>
            </div>
            <Button
              label={
                item.status ===
                t("dashboard.settings.sections.integrations.connected")
                  ? t("dashboard.settings.sections.integrations.configure")
                  : t("dashboard.settings.sections.integrations.connect")
              }
              variant={
                item.status ===
                t("dashboard.settings.sections.integrations.connected")
                  ? "minimal"
                  : "primary"
              }
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
              <CheckCircle fontSize="small" />{" "}
              {t("dashboard.settings.saveSuccess")}
            </span>
          )}
          <Button
            label={
              isSaving
                ? t("dashboard.settings.saving")
                : t("dashboard.actions.save")
            }
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
