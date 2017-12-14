var title = document.getElementById("title");
var image = document.getElementById("image");
var options = document.getElementById("options");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var uitleg = document.getElementById("uitleg");
var sleutel = false;

function level1() {
	image.src="img/eiland.jpg";
	button1.innerHTML="Hamer";
	button2.innerHTML="Kapmes";
	title.innerHTML="Moeilijke keuzes.";
	text.innerHTML="Je wordt wakker op een onbewoond eiland en je hebt niks en jij moet je weg vinden terug naar de bewonen wereld. Je gaat op zoek naar spullen voor een tentje. Je komt op het eiland 2 voorwerpen tegen. Welke pak je op? ";
	button2.style.display = "inline";
	uitleg.style.display = "none";
	button1.setAttribute("onclick","level2()");
	button2.setAttribute("onclick","level2()");
}

function level2() {
	image.src="img/oerwoud.jpg";
	button1.innerHTML="Volgende";
	button2.style.display = "none";
	uitleg.style.display = "none";
	title.innerHTML="Jagen voor voedsel.";
	text.innerHTML="Je gaat opzoek naar eten in het bos.";
	button1.setAttribute("onclick", "level3()");
}

function level3() {
	image.src="img/tent.jpg";
	button1.innerHTML="Slapen";
	button2.innerHTML="Wakker blijven";
	button2.style.display = "inline";
	uitleg.style.display = "none";
	title.innerHTML="De eerste nacht op het eiland.";
	text.innerHTML="Je hebt een tent gemaakt en het wordt nacht. Wat ga je doen?";
	button1.setAttribute("onclick", "level4()");
	button2.setAttribute("onclick","beer()");
}

function level4() {
	image.src="img/hut.jpg";
	button1.innerHTML="Binnenstappen";
	button2.innerHTML="Naar het bos";
	button2.style.display = "inline";
	uitleg.style.display = "none";
	title.innerHTML="Het raadsel achter de gevonden sleutel.";
	text.innerHTML="Je komt aan bij een hut, maar de deur zit op slot. Ga opzoek naar de sleutel om binnen te komen.";
	button1.setAttribute("onclick", "level4d()");
	button2.setAttribute("onclick","level4b()");
}

function level4b() {
	image.src="img/sleutel.jpg";
	button1.innerHTML="Pak de sleutel";
	button2.innerHTML="Naar de hut";
	button2.style.display = "inline";
	uitleg.style.display = "none";
	title.innerHTML="De gevonden sleutel.";
	text.innerHTML="Pak de sleutel op en probeer hem bij de hut";
	button1.setAttribute("onclick", "sleutel = true;");
	button2.setAttribute("onclick", "level4c()")
}

function level4c() {
	image.src="img/hut.jpg";
	button1.innerHTML="Sleutel proberen";
	button2.style.display = "none";
	uitleg.style.display = "none";
	title.innerHTML="De gevonden hut.";
	text.innerHTML="Je komt aan bij de hut. Probeer om binnen te komen.";
	if (sleutel == true) {
    button1.setAttribute("onclick", "level5()")
		} else {
    	button1.setAttribute("onclick", "level4d()")
	}
}

function level4d() {
	image.src="img/warning.jpg";
	button1.innerHTML="Ga terug naar het bos";
	button2.style.display = "none";
	uitleg.style.display = "none";
	title.innerHTML="De sleutel.";
	text.innerHTML="Je hebt een sleutel nodig om binnen te komen. Ga terug en pak de sleutel.";
	button1.setAttribute("onclick", "level4b()");
}

function level5() {
	image.src="img/hut2.jpg";
	button1.innerHTML="Volgende";
	button2.style.display = "none";
	uitleg.style.display = "none";
	title.innerHTML="De tweede nacht op het eiland.";
	text.innerHTML="Je bent binnen in de hut en jij denkt bij jezelf dat je hier kan overnachten. Dus jij doet dat, want je moet goed uitgerust zijn om morgen te kunnen varen. ";
	button1.setAttribute("onclick", alert("Sleutel is gebruikt!"))
	button1.setAttribute("onclick", "level6()");
}

function level6() {
	image.src="img/see.jpg";
	button1.innerHTML="Kapmes";
	button2.innerHTML="Aansteker";
	button2.style.display = "inline";
	uitleg.style.display = "none";
	title.innerHTML="Het ongelukje op het water.";
	text.innerHTML="Uiteindelijk neem je een gok en ga je met de boot de zee op om naar land te varen. Onderweg komen er grote golven en val je uit de boot maar je blijft vastzitten aan een touw met je been. Jij moet jezelf bevrijden maar je moet kiezen tussen 2 voorwerpen die in het water drijven.";
	button1.setAttribute("onclick", "level7()");
	button2.setAttribute("onclick","dead()");
}

function level7() {
	image.src="img/duinen.jpeg";
	button1.innerHTML="Volgende";
	button2.style.display = "none";
	uitleg.style.display = "none";
	title.innerHTML="Aangekomen op het land.";
	text.innerHTML="Je bent aangekomen op het land. Ga opzoek naar mensen.";
	button1.setAttribute("onclick", "level8()");
}

function level8() {
	image.src="img/huis.jpg";
	button1.innerHTML="Brood";
	button2.innerHTML="Water";
	button2.style.display = "inline";
	uitleg.style.display = "none";
	title.innerHTML="De aardige vrouw";
	text.innerHTML="Je komt aan bij een aardige vrouw. Ze biedt jou wat te eten/drinken aan. Wat kies je?";
	button1.setAttribute("onclick", "level9()");
	button2.setAttribute("onclick","level9()");
}

function level9() {
	image.src="img/weiland.jpg";
	button1.innerHTML="Deel met de koeien";
	button2.innerHTML="Loop door";
	button2.style.display = "inline";
	uitleg.style.display = "none";
	title.innerHTML="De hongerige koeien";
	text.innerHTML="Je komt aan bij de koeien. Maar de koeien hebben echt wat nodig om te eten/drinken. Geef jij wat van jezelf aan de koeien of geef je niks?";
	button1.setAttribute("onclick", "level10()");
	button2.setAttribute("onclick","levelkoe()");
}

function level10() {
	image.src="img/politie.jpg";
	button1.innerHTML="Neem de baan aan";
	button2.innerHTML="Maak een melding op TV";
	button2.style.display = "inline";
	uitleg.style.display = "none";
	title.innerHTML="Bij het politiebureau.";
	text.innerHTML="Je vraagt aan de politie of dat je zou willen helpen en jij verteld jou verhaal. Je verteld dat je werkloos ben en niet weet waar je familie is. Ze willen jou helpen maar je moet kiezen tussen 2 dingen. Ga jij voor een baan bij de politie of ga jij opzoek naar je familie?";
	button1.setAttribute("onclick", "levelend()");
	button2.setAttribute("onclick","level11()");
}

function level11() {
	image.src="img/studio.png";
	button1.innerHTML="Volgende";
	button2.style.display = "none";
	uitleg.style.display = "none";
	title.innerHTML="De melding opnemen";
	text.innerHTML="Jij besluit om met de politie een filmpje te maken over jou waar een melding wordt weergeven van wie zijn familie is. En dat wordt de avond gelijk gepubliceerd. Na een paar uur krijgen jullie een telefoontje en dat is jou oom. Hij geeft zijn adres en jij gaat er gelijk langs samen met de politie.";
	button1.setAttribute("onclick", "level12()");
}

function level12() {
	image.src="img/thuis.png";
	button1.innerHTML="Volgende";
	button2.style.display = "none";
	uitleg.style.display = "none";
	title.innerHTML="Je bent eindelijk thuis!";
	text.innerHTML="Je komt bij een huis aan in de stad en daar zie je je hele familie staan voor de deur. Je rent er naar toe en praat veel met elkaar. En je bent weer bij elkaar. Je bedankt de politie voor de hulp.";
	button1.setAttribute("onclick", "levelend()");
}

function levelend() {
	image.src="img/end.jpg";
	title.innerHTML="GAME FININSHED!";
	text.innerHTML="Je hebt de game uitgespeeld!";
	button1.innerHTML="Speel nog een keer";
	button2.style.display = "none";
	uitleg.style.display = "none";
	button1.setAttribute("onclick", "level1()");

}

function levelkoe() {
	image.src="img/weiland.jpg";
	title.innerHTML="Je hebt de verkeerde keuze gemaakt.";
	text.innerHTML="Je bent opgegeten door de koeien.";
	button1.innerHTML="Ga door";
	button2.style.display = "none";
	uitleg.style.display = "none";
	button1.setAttribute("onclick", "dead()");
}

function beer() {
	image.src="img/beer.jpg";
	title.innerHTML="De beer is langsgekomen.";
	text.innerHTML="Je bent opgegeten door een beer.";
	button1.innerHTML="Ga door";
	button2.style.display = "none";
	uitleg.style.display = "none";
	button1.setAttribute("onclick", "dead()");
}

function dead() {
	image.src="img/gameover.jpg";
	title.innerHTML="GAME OVER";
	text.innerHTML= "Probeer nog een keer.";
	button1.innerHTML="Begin opnieuw";
	button2.style.display = "none";
	uitleg.style.display = "none";
	button1.setAttribute("onclick", "level1()");
}
