import { useTranslation } from "react-i18next";
import { DashboardStatsCard } from "../index";
import { CalendarToday, Hotel, AttachMoney, Star } from "@mui/icons-material";
import { DashboardHomeStyles as styles } from "./DashboardHome.style";
import OccupancyChart from "./OccupancyChart";
import RevenueChart from "./RevenueChart";
import { Select } from "../Select/Select";

import { useState } from "react";
export default function DashboardHome() {
  const { t } = useTranslation();

  const [occupancyPeriod, setOccupancyPeriod] = useState("7days");
  const [revenuePeriod, setRevenuePeriod] = useState("30days");

  return (
    <>
      <div className={styles.statsGrid}>
        <DashboardStatsCard
          title={t("dashboard.stats.totalReservations")}
          value="248"
          subtext={`+12% ${t("dashboard.stats.thisMonth")}`}
          subtextClass="text-green-600"
          icon={<CalendarToday />}
          iconBgClass="bg-blue-50"
          iconColorClass="text-blue-600"
        />
        <DashboardStatsCard
          title={t("dashboard.stats.occupiedRooms")}
          value="156/200"
          subtext={`78% ${t("dashboard.stats.occupancy")}`}
          subtextClass="text-blue-600"
          icon={<Hotel />}
          iconBgClass="bg-green-50"
          iconColorClass="text-green-600"
        />
        <DashboardStatsCard
          title={t("dashboard.stats.monthlyRevenue")}
          value="R$ 485K"
          subtext={`+8% ${t("dashboard.stats.vsLastMonth")}`}
          subtextClass="text-green-600"
          icon={<AttachMoney />}
          iconBgClass="bg-yellow-50"
          iconColorClass="text-yellow-600"
        />
        <DashboardStatsCard
          title={t("dashboard.stats.averageRating")}
          value="4.8"
          subtext={`+0.2 ${t("dashboard.stats.thisMonth")}`}
          subtextClass="text-green-600"
          icon={<Star />}
          iconBgClass="bg-purple-50"
          iconColorClass="text-purple-600"
        />
      </div>

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>
              {t("dashboard.cards.occupancy")}
            </h3>
            <Select
              value={occupancyPeriod}
              onChange={(e) => setOccupancyPeriod(e.target.value)}
              className="py-1 px-3 text-xs"
              containerClassName="max-w-[fit-content]"
            >
              <option value="7days">{t("dashboard.filters.7days")}</option>
              <option value="30days">{t("dashboard.filters.30days")}</option>
            </Select>
          </div>
          <OccupancyChart period={occupancyPeriod} />
        </div>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>
              {t("dashboard.cards.revenue")}
            </h3>
            <Select
              value={revenuePeriod}
              onChange={(e) => setRevenuePeriod(e.target.value)}
              className="py-1 px-3 text-xs"
              containerClassName="max-w-[fit-content]"
            >
              <option value="30days">{t("dashboard.filters.30days")}</option>
              <option value="6months">{t("dashboard.filters.6months")}</option>
              <option value="12months">
                {t("dashboard.filters.12months")}
              </option>
            </Select>
          </div>
          <RevenueChart period={revenuePeriod} />
        </div>
      </div>

      <div className={styles.columnsGrid}>
        <div className={styles.cardContainer}>
          <h3 className={styles.cardTitle}>
            {t("dashboard.cards.recentCheckins")}
          </h3>
          <div className={styles.listContainer}>
            {/* TODO: Implementar fetch de dados */}
            {[
              {
                name: "Maria Santos",
                room: "205",
                time: "14:00",
                img: "https://ui-avatars.com/api/?name=Maria+Santos",
              },
              {
                name: "Carlos Lima",
                room: "312",
                time: "15:30",
                img: "https://ui-avatars.com/api/?name=Carlos+Lima",
              },
              {
                name: "Ana Costa",
                room: "108",
                time: "16:00",
                img: "https://ui-avatars.com/api/?name=Ana+Costa",
              },
            ].map((guest, i) => (
              <div key={i} className={styles.listItem}>
                <img
                  src={guest.img}
                  alt={guest.name}
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.itemName}>{guest.name}</p>
                  <p className={styles.itemDetail}>
                    {t("dashboard.menu.rooms")} {guest.room} - {guest.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cardContainer}>
          <h3 className={styles.cardTitle}>
            {t("dashboard.cards.todaysCheckouts")}
          </h3>
          <div className={styles.listContainer}>
            {/* TODO: Implementar fetch de dados */}
            {[
              {
                name: "Pedro Silva",
                room: "401",
                time: "11:00",
                img: "https://ui-avatars.com/api/?name=Pedro+Silva",
              },
              {
                name: "Julia Mendes",
                room: "203",
                time: "12:00",
                img: "https://ui-avatars.com/api/?name=Julia+Mendes",
              },
              {
                name: "Roberto Alves",
                room: "506",
                time: "10:30",
                img: "https://ui-avatars.com/api/?name=Roberto+Alves",
              },
            ].map((guest, i) => (
              <div key={i} className={styles.listItem}>
                <img
                  src={guest.img}
                  alt={guest.name}
                  className={styles.avatar}
                />
                <div>
                  <p className={styles.itemName}>{guest.name}</p>
                  <p className={styles.itemDetail}>
                    {t("dashboard.menu.rooms")} {guest.room} - {guest.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cardContainer}>
          <h3 className={styles.cardTitle}>
            {t("dashboard.cards.recentReviews")}
          </h3>
          <div className={styles.listContainer}>
            <div className={styles.reviewItem}>
              <div className={styles.reviewStars}>
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" />
                <span className={styles.reviewRating}>Excelente</span>
              </div>
              <p className={styles.reviewText}>
                "Serviço impecável e quartos muito confortáveis!"
              </p>
              <p className={styles.reviewAuthor}>- Laura Oliveira</p>
            </div>
            <div className={styles.reviewItemGray}>
              <div className={styles.reviewStars}>
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" />
                <Star fontSize="small" className={styles.starGray} />
                <span className={styles.reviewRatingGray}>Muito Bom</span>
              </div>
              <p className={styles.reviewText}>
                "Localização perfeita e café da manhã delicioso."
              </p>
              <p className={styles.reviewAuthor}>- Marcos Pereira</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
