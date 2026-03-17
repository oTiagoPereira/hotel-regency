import { useTranslation } from "react-i18next";
import { DashboardStatsCard } from "../index";
import { CalendarToday, Hotel, AttachMoney, Star } from "@mui/icons-material";
import { DashboardHomeStyles as styles } from "./DashboardHome.style";
import OccupancyChart from "./OccupancyChart";
import RevenueChart from "./RevenueChart";
import { Select } from "@shared";
import { useState } from "react";
import { useDashboardData } from "@features/admin/hooks/useDashboardData";
import { GuestList } from "../GuestList/GuestList";

export default function DashboardHome() {
  const { t } = useTranslation();

  const [occupancyPeriod, setOccupancyPeriod] = useState("7days");
  const [revenuePeriod, setRevenuePeriod] = useState("30days");

  const { isLoading, checkins, checkouts, reviews } = useDashboardData();

  return (
    <>
      <div className={styles.statsGrid}>
        <DashboardStatsCard
          title={t("dashboard.stats.totalReservations")}
          value="248"
          subtext={`+12% ${t("dashboard.stats.thisMonth")}`}
          subtextClass="text-success"
          icon={<CalendarToday />}
          iconBgClass="bg-info-light"
          iconColorClass="text-info"
        />
        <DashboardStatsCard
          title={t("dashboard.stats.occupiedRooms")}
          value="156/200"
          subtext={`78% ${t("dashboard.stats.occupancy")}`}
          subtextClass="text-info"
          icon={<Hotel />}
          iconBgClass="bg-success-light"
          iconColorClass="text-success"
        />
        <DashboardStatsCard
          title={t("dashboard.stats.monthlyRevenue")}
          value="R$ 485K"
          subtext={`+8% ${t("dashboard.stats.vsLastMonth")}`}
          subtextClass="text-success"
          icon={<AttachMoney />}
          iconBgClass="bg-warning-light"
          iconColorClass="text-warning"
        />
        <DashboardStatsCard
          title={t("dashboard.stats.averageRating")}
          value="4.8"
          subtext={`+0.2 ${t("dashboard.stats.thisMonth")}`}
          subtextClass="text-success"
          icon={<Star />}
          iconBgClass="bg-accent-light"
          iconColorClass="text-accent"
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
              aria-label={t("dashboard.cards.occupancy")}
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
              aria-label={t("dashboard.cards.revenue")}
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
            <GuestList guests={checkins} isLoading={isLoading} />
          </div>
        </div>

        <div className={styles.cardContainer}>
          <h3 className={styles.cardTitle}>
            {t("dashboard.cards.todaysCheckouts")}
          </h3>
          <div className={styles.listContainer}>
            <GuestList guests={checkouts} isLoading={isLoading} />
          </div>
        </div>

        <div className={styles.cardContainer}>
          <h3 className={styles.cardTitle}>
            {t("dashboard.cards.recentReviews")}
          </h3>
          <div className={styles.listContainer}>
            {isLoading ? (
              <div className="flex flex-col gap-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="p-3 bg-surface rounded-lg animate-pulse min-h-[100px]"
                  >
                    <div className="flex mb-2 gap-1">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <div
                          key={j}
                          className="w-4 h-4 rounded-full bg-border-light"
                        ></div>
                      ))}
                    </div>
                    <div className="h-3 bg-border-light rounded w-full mb-2"></div>
                    <div className="h-3 bg-border-light rounded w-2/3 mb-2"></div>
                    <div className="h-2 bg-border-light rounded w-1/4 mt-4"></div>
                  </div>
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <div className="p-4 text-center text-sm text-text-muted bg-surface rounded-lg">
                {t(
                  "dashboard.general.noData",
                  "Nenhum dado disponível no momento.",
                )}
              </div>
            ) : (
              reviews.map((review, i) => (
                <div
                  key={i}
                  className={
                    i % 2 === 0 ? styles.reviewItem : styles.reviewItemGray
                  }
                >
                  <div
                    className={styles.reviewStars}
                    aria-label={`Avaliação: ${review.rating} de 5 estrelas`}
                  >
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        fontSize="small"
                        className={
                          index >= review.rating ? styles.starGray : ""
                        }
                        aria-hidden="true"
                      />
                    ))}
                    <span
                      className={
                        i % 2 === 0
                          ? styles.reviewRating
                          : styles.reviewRatingGray
                      }
                    >
                      {review.rating >= 4
                        ? "Excelente"
                        : review.rating === 3
                          ? "Bom"
                          : "Regular"}
                    </span>
                  </div>
                  <p className={styles.reviewText}>"{review.text}"</p>
                  <p className={styles.reviewAuthor}>- {review.author}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
