﻿using GuineaPigCare.Server.Database.Entities;
using GuineaPigCare.Server.Exceptions;
using GuineaPigCare.Server.Interfaces;
using GuineaPigCare.Server.Models;
using GuineaPigCare.Server.Reposirories;
using GuineaPigCare.Server.Repositories;

namespace GuineaPigCare.Server.Service
{
    public class GuineaPigService : IGuineaPigService
    {
        private readonly IUserRepository _userRepository;
        private readonly IGuineaPigRepository _guineaPigRepository;

        public GuineaPigService(IUserRepository userRepository, IGuineaPigRepository guineaPigRepository)
        {
            _userRepository = userRepository;
            _guineaPigRepository = guineaPigRepository;
        }
        public List<GuineaPigWeightsDto> GetWeights(string email, string name)
        {
            var guineaPig = _guineaPigRepository.GetGuineaPig(email, name);

            if (guineaPig == null)
            {
                throw new NotFoundException("Świnka morska nie istnieje lub nie należy do tego użytkownika!");
            }

            var weightsDto = guineaPig.GuineaPigWeights.Select(weight => new GuineaPigWeightsDto
            {
                Weight = weight.Weight,
                Date = weight.Date.ToString("yyyy-MM-dd")
            }).ToList();

            return weightsDto;
        }

        public void AddNewWeight(string email, GuineaPigDto dto)
        {
            var user = _userRepository.GetUser(email);

            if (user == null)
            {
                throw new NotFoundException("Taki użytkownik nie istnieje w bazie danych!");
            }

            var guineaPig = _guineaPigRepository.GetGuineaPig(email, dto.Name);

            if (guineaPig == null)
            {
                throw new NotFoundException("Taka świnka nie istnieje w bazie danych!");
            }

            if (guineaPig.UserId != user.Id)
            {
                throw new ForbiddenException("Świnka morska nie należy do tego użytkownika!");
            }

            var guineaPigWeight = new GuineaPigWeight();

            guineaPigWeight.GuineaPigId = guineaPig.Id;
            guineaPigWeight.Weight = dto.Weight;
            guineaPigWeight.Date = DateTime.Now;

            _guineaPigRepository.AddGuineaPigWeight(guineaPigWeight);
        }
        public void RemoveGuineaPig(RemoveGuineaPigDto dto)
        {
            var user = _userRepository.GetUser(dto.Email);

            if (user == null)
            {
                throw new NotFoundException("Taki użytkownik nie istnieje w bazie danych!");
            }

            var guineaPig = _guineaPigRepository.GetGuineaPig(dto.Name, dto.Email);

            if (guineaPig == null)
            {
                throw new NotFoundException("Taka świnka nie istnieje w bazie danych!");
            }

            if (guineaPig.UserId != user.Id)
            {
                throw new ForbiddenException("Świnka morska nie należy do tego użytkownika!");
            }

            _guineaPigRepository.RemoveGuineaPig(guineaPig);
        }
        public GuineaPigDto GetGuineaPig(string email, string name)
        {
            var user = _userRepository.GetUser(email);

            if (user == null)
            {
                throw new NotFoundException("Taki użytkownik nie istnieje w bazie danych!");
            }

            var guineaPig = _guineaPigRepository.GetGuineaPig(name, email);


            if (guineaPig == null)
            {
                throw new NotFoundException("Nie posiadasz profilu takiej świnki morskiej!");
            }

            if (guineaPig.UserId != user.Id)
            {
                throw new ForbiddenException("Świnka morska nie należy do tego użytkownika!");
            }

            var guineaPigDto = new GuineaPigDto();

            guineaPigDto.Name = guineaPig.Name;
            guineaPigDto.Weight = guineaPig.Weight;

            return guineaPigDto;
        }
        public List<GuineaPigDto> GetGuineaPigs(string email)
        {
            var user = _userRepository.GetUserWithGuineaPigs(email);

            if (user == null)
            {
                throw new NotFoundException("Taki użytkownik nie istnieje w bazie danych!");
            }

            List<GuineaPigDto> guineaPigs = new List<GuineaPigDto>();


            foreach (var pig in user.GuineaPig)
            {
                GuineaPigDto guineaPig = new GuineaPigDto
                {

                    Name = pig.Name,
                    Weight = pig.Weight
                };

                guineaPigs.Add(guineaPig);

            }
            return guineaPigs;
        }

        public void UpdateGuineaPigWeight(string email, GuineaPigDto dto)
        {
            var user = _userRepository.GetUser(email);

            if (user == null)
            {
                throw new NotFoundException("Taki użytkownik nie istnieje w bazie danych!");
            }

            var guineaPig = _guineaPigRepository.GetGuineaPig(dto.Name, email);

            if (guineaPig == null)
            {
                throw new NotFoundException("Taka świnka nie istnieje w bazie danych!");
            }

            if (guineaPig.UserId != user.Id)
            {
                throw new ForbiddenException("Świnka morska nie należy do tego użytkownika!");
            }
            guineaPig.Weight = dto.Weight;

            _guineaPigRepository.UpdateGuineaPig(guineaPig);
        }

        public void AddGuineaPigToUser(string email, GuineaPigDto dto)
        {
            var user = _userRepository.GetUserWithGuineaPigs(email);

            if (user == null)
            {
                throw new NotFoundException("Taki użytkownik nie istnieje!");
            }

            var existingGuineaPig = user.GuineaPig
                .FirstOrDefault(x => x.Name == dto.Name);

            if (existingGuineaPig != null)
            {
                throw new ConflictException("Dodano już świnkę o takim imieniu!");
            }

            var newGuineaPig = new GuineaPig();

            newGuineaPig.Name = dto.Name;
            newGuineaPig.Weight = dto.Weight;
            newGuineaPig.UserId = user.Id;

            _guineaPigRepository.AddGuineaPig(newGuineaPig);
        }
        public List<ProductDto> GetGoodProductsInformation()
        {
            List<ProductDto> products = new List<ProductDto>()
    {
        new ProductDto()
        {
            Name = "Buraki",
            Description = "Buraki są bogate w witaminy i minerały, które są korzystne dla świnek morskich. Zawierają witaminę C, która jest niezbędna dla zdrowia tych zwierząt.",
            ImageUrl = "/assets/images/goodProducts/beetroot.jpg"
        },
        new ProductDto()
        {
            Name = "Marchew",
            Description = "Marchew jest doskonałym źródłem witaminy A i innych składników odżywczych. Świnki morskie uwielbiają jej smak, ale należy podawać ją w umiarkowanych ilościach ze względu na zawartość cukru.",
            ImageUrl = "/assets/images/goodProducts/carrot.jpg"
        },
        new ProductDto()
        {
            Name = "Pietruszka",
            Description = "Pietruszka jest bogata w witaminę C i inne składniki odżywcze. Jest to doskonała przekąska dla świnek morskich, która wspomaga ich zdrowie.",
            ImageUrl = "/assets/images/goodProducts/parsley_root.jpg"
        },
        new ProductDto()
        {
            Name = "Sałata rzymska",
            Description = "Sałata rzymska jest niskokaloryczna i zawiera dużo błonnika, co jest korzystne dla układu trawiennego świnek morskich. Zawiera również witaminy A i C.",
            ImageUrl = "/assets/images/goodProducts/romaine_lettuce.jpg"
        },
        new ProductDto()
        {
            Name = "Seler",
            Description = "Seler jest niskokaloryczny i zawiera witaminy oraz minerały, które są korzystne dla zdrowia świnek morskich. Jest również dobry dla ich zębów.",
            ImageUrl = "/assets/images/goodProducts/celery.jpg"
        },
        new ProductDto()
        {
            Name = "Pomidor",
            Description = "Pomidory są źródłem witaminy C i innych składników odżywczych. Świnki morskie mogą jeść pomidory, ale należy ograniczyć ilość z powodu zawartości kwasu.",
            ImageUrl = "/assets/images/goodProducts/tomato.jpg"
        },
        new ProductDto()
        {
            Name = "Jabłko",
            Description = "Jabłka są dobrą przekąską dla świnek morskich, ponieważ są bogate w błonnik i witaminy. Świnki morskie powinny jeść je w umiarkowanych ilościach ze względu na zawartość cukru.",
            ImageUrl = "/assets/images/goodProducts/apple.jpg"
        },
        new ProductDto()
        {
            Name = "Gruszka",
            Description = "Gruszki są niskokaloryczne i zawierają witaminy oraz błonnik, które są korzystne dla świnek morskich. Podawaj je w umiarkowanych ilościach.",
            ImageUrl = "/assets/images/goodProducts/pear.jpg"
        },
        new ProductDto()
        {
            Name = "Karma dla świnek",
            Description = "Karma Versele-Laga jest specjalnie opracowana dla świnek morskich, aby dostarczyć im wszystkich niezbędnych składników odżywczych, w tym witaminy C.",
            ImageUrl = "/assets/images/goodProducts/guinea_pig_food.jpg"
        },
        new ProductDto()
        {
            Name = "Ogórek zielony",
            Description = "Ogórki są niskokaloryczne i bogate w wodę, co jest korzystne dla nawodnienia świnek morskich.",
            ImageUrl = "/assets/images/goodProducts/cucumber.jpg"
        },
        new ProductDto()
        {
            Name = "Koperek",
            Description = "Koperek jest bezpiecznym ziołem dla świnek morskich, które można podawać w niewielkich ilościach. Zawiera witaminę C i dodaje smaku do ich diety.",
            ImageUrl = "/assets/images/goodProducts/dill.jpg"
        },
        new ProductDto()
        {
            Name = "Natka pietruszki",
            Description = "Natka pietruszki jest bogata w witaminę C i inne składniki odżywcze. Jest bezpieczna dla świnek morskich i może być dodatkiem do ich codziennej diety.",
            ImageUrl = "/assets/images/goodProducts/parsley.jpg"
        },
        new ProductDto()
        {
            Name = "Trawa - sucha",
            Description = "Trawa sucha jest istotnym elementem diety świnek morskich z kilku kluczowych powodów. Po pierwsze, jest ona bogatym źródłem błonnika, który wspiera zdrowie ich układu trawiennego poprzez regulację pracy jelit. Dodatkowo, trawa sucha odzwierciedla naturalną dietę świnek morskich, które w naturze spożywają różnorodne rośliny i trawy. Żucie trawy suchej nie tylko dostarcza im odpowiedniej ilości błonnika, ale również pomaga w ścieraniu zębów, co jest istotne dla zdrowia jamy ustnej tych zwierząt. Trawa zawiera również niezbędne witaminy i minerały, takie jak witamina C, która jest kluczowa dla świnek morskich, ponieważ nie mogą jej samodzielnie syntetyzować. Wreszcie, trawa sucha jest bezpiecznym źródłem pożywienia, o ile jest czysta i wolna od zanieczyszczeń. Dlatego regularne dostarczanie trawy suchej jest zalecane jako element zdrowej i zrównoważonej diety dla świnek morskich.",
            ImageUrl = "/assets/images/goodProducts/grass.jpg"
        }
    };

            return products;
        }

        public List<ProductDto> GetBadProductsInformation()
        {
            List<ProductDto> products = new List<ProductDto>(){
                new ProductDto()
                {
                    Name = "Czosnek",
                    Description = "Czosnek jest szkodliwy dla świnek morskich i dlatego jest całkowicie zakazany w ich diecie. Jego ostre właściwości mogą powodować drażnienie przewodu pokarmowego oraz zakłócenia w naturalnym trawieniu. Spożycie czosnku może prowadzić do poważnych problemów zdrowotnych, a nawet śmierci świnek morskich.",
                    ImageUrl = "/assets/images/badProducts/garlic.jpg"
                },
                new ProductDto()
                {
                    Name = "Cebula",
                    Description = "Cebula jest szkodliwa dla świnek morskich i nie powinna być podawana w ich diecie. Zawiera substancje chemiczne, które mogą powodować uszkodzenie czerwonych krwinek oraz prowadzić do anemii. Spożycie cebuli może także drażnić przewód pokarmowy i prowadzić do problemów zdrowotnych, co stanowi poważne zagrożenie dla zdrowia świnek morskich.",
                    ImageUrl = "/assets/images/badProducts/onion.jpg"
                },
                new ProductDto()
                {
                    Name = "Por",
                    Description = "Por, podobnie jak cebula i czosnek, zawiera substancje chemiczne, które są toksyczne dla świnek morskich. Spożycie pora może prowadzić do uszkodzenia czerwonych krwinek, anemii oraz poważnych problemów trawiennych.",
                    ImageUrl = "/assets/images/badProducts/leek.jpg"
                },
                new ProductDto()
                {
                    Name = "Trawa - mokra",
                    Description = "Mokra trawa nie jest odpowiednia dla świnek morskich ze względu na wysokie ryzyko wystąpienia problemów zdrowotnych. Spożycie mokrej trawy może prowadzić do zaburzeń trawiennych oraz poważnych problemów żołądkowych, co jest szczególnie niebezpieczne dla delikatnego układu pokarmowego świnek morskich.",
                    ImageUrl = "/assets/images/badProducts/wet_grass.jpg"
                },
                new ProductDto()
                {
                    Name = "Chleb",
                    Description = "Chleb, zwłaszcza nie całkowicie wysuszony, jest trudny do strawienia dla świnek morskich i może prowadzić do problemów trawiennych oraz wzdęć. Dodatkowo, chleb zawiera dużo węglowodanów, które mogą przyczyniać się do otyłości.",
                    ImageUrl = "/assets/images/badProducts/bread.jpg"
                },
                new ProductDto()
                {
                    Name = "Sałata lodowa",
                    Description = "Sałata lodowa zawiera mało wartości odżywczych i może powodować biegunki u świnek morskich. Spożycie sałaty lodowej nie jest zalecane ze względu na potencjalne problemy zdrowotne.",
                    ImageUrl = "/assets/images/badProducts/iceberg_lettuce.jpg"
                },
                new ProductDto()
                {
                    Name = "Sałata masłowa",
                    Description = "Sałata masłowa może powodować problemy trawienne u świnek morskich, takie jak biegunka. Chociaż zawiera więcej składników odżywczych niż sałata lodowa, nadal nie jest zalecana jako stały element diety świnek morskich.",
                    ImageUrl = "/assets/images/badProducts/butter_lettuce.jpg"
                },
                new ProductDto()
                {
                    Name = "Grzyby",
                    Description = "Grzyby mogą zawierać toksyny, które są szkodliwe dla świnek morskich. Spożycie grzybów może prowadzić do poważnych problemów zdrowotnych, takich jak zaburzenia trawienne, zatrucia i uszkodzenie wątroby.",
                    ImageUrl = "/assets/images/badProducts/mushrooms.jpg"
                },
                new ProductDto()
                {
                    Name = "Fasola",
                    Description = "Fasola zawiera lektiny, które są toksyczne dla świnek morskich. Spożycie fasoli może prowadzić do wzdęć, bólu brzucha i problemów trawiennych. Wszystkie rodzaje fasoli są niebezpieczne dla świnek morskich, szczególnie gdy są surowe.",
                    ImageUrl = "/assets/images/badProducts/beans.jpg"
                },
                new ProductDto()
                {
                    Name = "Groch",
                    Description = "Groch zawiera wysoki poziom białka i skrobi, które mogą być trudne do strawienia przez świnki morskie. Spożycie grochu może prowadzić do wzdęć i problemów trawiennych.",
                    ImageUrl = "/assets/images/badProducts/peas.jpg"
                },
                new ProductDto()
                {
                    Name = "Soja",
                    Description = "Soja zawiera fitoestrogeny i wysoką ilość białka, które mogą zakłócać procesy metaboliczne u świnek morskich. Spożycie soi może prowadzić do problemów trawiennych i hormonalnych.",
                    ImageUrl = "/assets/images/badProducts/soy.jpg"
                },
                new ProductDto()
                {
                    Name = "Kolby dla gryzoni",
                    Description = "Kolby dla gryzoni często zawierają duże ilości cukru i sztucznych dodatków, które są szkodliwe dla świnek morskich. Świnki morskie powinny jeść tylko suchą trawę i siano, wybrane warzywa oraz niektóre owoce. Przetworzona żywność, taka jak kolby, może prowadzić do problemów zdrowotnych, takich jak otyłość i problemy trawienne.",
                    ImageUrl = "/assets/images/badProducts/rodent_treat_sticks.jpg"
                }
            };

            return products;
        }


        public GuineaPigInformationDto GetInformationGuineaPig()
        {
            var information = new GuineaPigInformationDto();

            string title = "Dlaczego Świnka Morska to Doskonały Wybór na Zwierzę Domowe?";

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
