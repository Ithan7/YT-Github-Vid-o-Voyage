function calculerPrix() {
    // Création des variables pour récupérer les valeurs de la page HTML
    var destination = document.getElementById("destination").value;
    var nombrePersonnes = document.getElementById("nombrePersonnes").value;
    var gammeNuit = document.getElementById("gammeNuit").value;
    var nombreNuits = document.getElementById("nombreNuits").value;
    // Initalisation des prix correspondants aux destinations
    var prixDestionation = 0;
    switch(destination) {
        case "islande":
            prixDestionation = 350;
            break;
        case "norvège":
            prixDestionation = 200;
            break;
        case "portugal":
            prixDestionation = 85;
            break;
        case "canada":
            prixDestionation = 400;
            break;
        case "mexique":
            prixDestionation = 600;
            break;
        default:
            prixDestionation = 0;
    }
    // Initalisation des prix correspondants aux nuits
    var prixGammeNuit = 0;
    // Si moins de 4 personnes font le voyage
    if(nombrePersonnes<4)
    {
        switch(gammeNuit) {
            case "basique":
                prixGammeNuit = 80;
                break;
            case "confortable":
                prixGammeNuit = 175;
                break;
            case "prestigieux":
                prixGammeNuit = 400;
                break;
            default:
                prixGammeNuit = 0;
        }
    }
    // Autre que 4 personnes font le voyage
    else {
        switch(gammeNuit) {
            case "basique":
                prixGammeNuit = 120;
                break;
            case "confortable":
                prixGammeNuit = 215;
                break;
            case "prestigieux":
                prixGammeNuit = 600;
                break;
            default:
                prixGammeNuit = 0;
        }
    }
    // Initialisation de la variables de calcul du prix total et calcul
    var prixTotal = (prixDestionation * nombrePersonnes) + (nombreNuits * prixGammeNuit);
    // Modification du paragraphe HTML
    var resultatElement = document.getElementById("resultat");
    resultatElement.innerHTML = "Prix total :" + prixTotal;
}