import { HeroEvents } from "@features/accommodation";
import { useHead } from "@shared";
import { MainLayout } from "@core/layouts/mainLayout";

function Events() {
    useHead({title: "Eventos - Regency Hotel",
        metaTags: [{
            name: "description",
            content: "Descubra o conforto e a elegância do Hotel Regency Heights. Localizado em uma região privilegiada, oferecemos acomodações sofisticadas, café da manhã incluso, Wi-Fi gratuito e atendimento de excelência para uma estadia inesquecível"
        },
        {
            name: "keywords",
            content: "hotel, hospedagem, conforto, elegância, café da manhã, Wi-Fi gratuito, atendimento de excelência"
        },
        ]
    })
    return (
        <MainLayout>
            <HeroEvents/>
        </MainLayout>
    )
}

export default Events;