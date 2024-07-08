using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using Microsoft.Identity.Client;

namespace GuineaPigCare.Server.Service
{
    public class GuineaPigService : IGuineaPigService
    {
        public List<ProductDto> GetBadProductsInformation()
        {
            List<ProductDto> badProducts = new List<ProductDto>(){
                         new ProductDto()
        {
        Name = "Cebula",
        Description = "Cebula jest szkodliwa dla świnek morskich i nie powinna być podawana w ich diecie. Zawiera substancje chemiczne, które mogą powodować uszkodzenie czerwonych krwinek oraz prowadzić do anemii. Spożycie cebuli może także drażnić przewód pokarmowy i prowadzić do problemów zdrowotnych, co stanowi poważne zagrożenie dla zdrowia świnek morskich.",
        ImageUrl = "/assets/images/onion.jpg"
         },
            new ProductDto()
            {
                Name = "Czosnek",
                Description = "Czosnek jest szkodliwy dla świnek morskich i dlatego jest całkowicie zakazany w ich diecie. Jego ostre właściwości mogą powodować drażnienie przewodu pokarmowego oraz zakłócenia w naturalnym trawieniu. Spożycie czosnku może prowadzić do poważnych problemów zdrowotnych, a nawet śmierci świnek morskich.",
                ImageUrl = "/assets/images/garlic.jpg"
            },
            new ProductDto()
            {
                Name = "Mokra trawa",
                Description = "Mokra trawa nie jest odpowiednia dla świnek morskich ze względu na wysokie ryzyko wystąpienia problemów zdrowotnych. Spożycie mokrej trawy może prowadzić do zaburzeń trawiennych oraz poważnych problemów żołądkowych, co jest szczególnie niebezpieczne dla delikatnego układu pokarmowego świnek morskich.",
                ImageUrl = "/assets/images/wet_grass.jpg"
            } };
            return badProducts;
        }

        public GuineaPigInformationDto GetInformationGuineaPig()
        {
            var information = new GuineaPigInformationDto();

            string title = "Dla kogo świnka morska?";

            string description = "Świnki morskie, znane również jako świnki morskie, są uroczymi i przyjaznymi stworzeniami, które szybko mogą stać się integralną częścią każdego domu. Choć nie są to duże zwierzęta, ich osobowość i łatwość w pielęgnacji czynią je idealnymi towarzyszami dla rodzin, par oraz osób samotnych. Świnki morskie wyróżniają się swoją ciekawością i łagodnym charakterem. Są to zwierzęta, które lubią towarzystwo ludzi i szybko nawiązują więź z swoimi opiekunami. Ich radosne piski i zabawne zachowania mogą przynosić codzienną radość i uśmiech na twarzach ich właścicieli. Jedną z największych zalet posiadania świnki morskiej jest ich łatwość w pielęgnacji. Potrzebują one regularnego karmienia, dostępu do świeżej wody oraz czystej klatki. Dzięki temu są doskonałym wyborem dla osób, które chcą cieszyć się obecnością zwierzęcia domowego, ale nie mają dużo czasu na jego codzienną opiekę. Oprócz tego należy regularnie zapewniać śwince morskiej dostęp do świeżego siana oraz dbać o odpowiednie przycinanie jej pazurków, co jest istotne dla jej zdrowia i komfortu. Świnki morskie mogą również przynosić liczne korzyści emocjonalne swoim opiekunom. Ich towarzystwo może pomóc w redukcji stresu oraz poczucia samotności, szczególnie dla osób starszych czy tych mieszkających samotnie. Dodatkowo, interakcja z świnką morską może uczyć dzieci odpowiedzialności i troski o inne istoty.\r\n\r\nŚwinka morska to nie tylko urocze zwierzę domowe, ale także wierny towarzysz, który może wnieść do każdego domu radość i ciepło. Decyzja o przyjęciu świnki morskiej do rodziny może okazać się nie tylko odpowiedzialną, ale również bardzo satysfakcjonującą.";

            List<string> responsibilities = new List<string>()
            {
                "Codzienne karmienie i świeża woda",
                "Dostęp do siana, na którym świnka ściera zęby",
                "Regularne sprzątanie klatki",
                "Zapewnienie odpowiedniej opieki weterynaryjnej",
                "Codzienne chwile uwagi i interakcji",
                "Delikatne obchodzenie się ze zwierzęciem"
            };

            List<string> benefits = new List<string>
            {
             "Świnki morskie są bardzo towarzyskie i mogą zapewnić wiele radości",
             "Są stosunkowo łatwe w pielęgnacji w porównaniu do innych zwierząt domowych",
             "Nie wymagają dużej przestrzeni do życia",
             "Pomagają dzieciom nauczyć się odpowiedzialności (pod nadzorem dorosłych)"
            };

            List<string> dangers = new List<string>
            {
           "Psy o silnym instynkcie łowieckim",
           "Koty, które mogą polować na małe zwierzęta",
           "Węże oraz inne niebezpieczne zwierzęta egzotyczne",
           "Fretki"
            };

            information.Title = title;
            information.Description = description;
            information.Benefits = benefits;
            information.Responsibilities = responsibilities;
            information.Dangers = dangers;

            return information;
        }
    }
}
