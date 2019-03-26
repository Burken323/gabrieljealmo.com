import React from 'react';

export class About extends React.Component{
    render(){
        return (
            <div className="aboutContent">
                <h1 id="aboutLoc">Om Mig</h1>
                <div className="content">
                    <div className="about">
                        <div className="aboutMe">
                            <div className="aboutMeText">
                                <h2>Om Mig</h2>
                                <p>
                                    Som du kanske har märkt så är mitt namn Gabriel Jealmo. Jag är 24 år gammal och studerar just nu på Nackademin.
                                    Jag har ett stort intresse för programmering och har därför börjat studera för att bli webbutvecklare inom .NET
                                    och CMS. Förutom programmering så ägnar jag mycket tid till träning, har varit aktiv inom en mängd sporter men
                                    spenderar nu min träning på gym. Har ett stort datorintresse och har spelat en mängd olika spel som tex Witcher,
                                    Elder scrolls, League of legends..
                                </p>
                            </div>
                        </div>
                        <div className="aboutStudies">
                            <div className="aboutStudiesText">
                                <h2>Mina Studier</h2>
                                <p id="smallText">
                                    Mina studietid har varit väldigt lärorik för mitt lärande inom programmering. Jag studerade Natur på gymnasiet och
                                    efter ett år av jobb så började jag studera Datorvetenskap på Umeå universitet, där jag gick kurser som Komputationellt
                                    tänkande och Matematik för datavetare. Jag kände dock att det inte riktigt var rätt linje för mig och bestämde mig för 
                                    att leta vidare, efter något år med arbete så sökte jag in till Datalogiprogrammet på Stockholms Universitet. På 
                                    Stockholms Universitet var lärandet på topp och jag fick lära mig en mängd olika programmeringsspråk såsom: Java, C++,
                                    Python och Scheme. Med dessa så fick jag utveckla olika typer av program som tex datorgrafik med hjälp av ray-tracing och
                                    rendering, ett krypteringsprogram skrivet i Java, en partikelsimulator också skriven i Java osv. Men då det här programmet
                                    hade ett väldigt fokus på matematik så kände jag att det jag verkligen brann för var utveckling så därför gjorde jag ett till
                                    hopp och började studera Webbutveckling på Nackademin med fokus på .NET CMS. På Nackademin har jag lärt mig både Frontend samt
                                    Backend och det har gjort mig till en mycket bättre kodare.
                                </p>
                            </div>
                        </div>
                        <div className="aboutWork">
                            <div className="aboutWorkText">
                                <h2>Mitt Arbetsliv</h2>
                                <p>
                                    Jag har hela tiden haft jobb. Har i stort sett jobbat på samma arbete under hela min karriär vilket är på
                                    ett lager. Där fick vi i team jobba hårt för att få ut dagens leveranser. Mycket teamwork samt olika 
                                    arbetsuppgifter under dagarna. Jag kan säga att jag blivit mer och mer stresstålig under den tid jag jobbat
                                    på lagret då vi hade allt från dagar med nästan ingenting till hela veckor med massor med leveranser som ska
                                    skickas iväg. Men nu har jag lämnat lagret bakom mig och ser framemot en karriär inom programmering/utveckling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}