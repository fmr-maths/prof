/*
  ============================================================
  DATA.JS — le seul fichier à modifier pour ajouter un chapitre
  ============================================================

  Pour AJOUTER UN CHAPITRE :
  1. Dépose tes PDF dans le dossier du niveau concerné :
     pdfs/6e/  ou  pdfs/5e/  ou  pdfs/4e/
  2. Copie-colle un bloc { ... } ci-dessous (dans le bon niveau)
     et modifie titre + noms de fichiers.
  3. N'oublie pas la virgule à la fin de chaque bloc sauf le dernier.

  Pour un lien externe (Genially, site d'exercices...) au lieu d'un PDF,
  mets directement l'URL complète (https://...) à la place du nom de fichier.

  Si une ressource n'existe pas encore pour un chapitre, laisse "" (vide) :
  le bouton correspondant sera automatiquement grisé sur le site.
*/

// Mot de passe unique demandé à l'ouverture du site (à changer librement).
// ATTENTION : visible dans le code source, ce n'est qu'un filtre simple,
// pas une vraie protection.
const SITE_PASSWORD = "maths2026";

const SITE_DATA = {
  "6e": [
    {
      titre: "Chapitre 1 — Nombres entiers 1",
      lecon: "pdfs/6e/01/6e_01_lecon.html",
      corrections: "pdfs/6e/01/6e_01_corr.pdf",
      flash: "pdfs/6e/01/6e_01_Flash.pdf"
    },
    {
      titre: "Chapitre 2 — Distance 1",
      lecon: "pdfs/6e/02/6e_02_lecon.html",
      corrections: "pdfs/6e/02/6e_02_corr.pdf",
      flash: "pdfs/6e/02/6e_02_Flash.pdf"
    },
    {
      titre: "Chapitre 3 — Nombres entiers 2",
      lecon: "pdfs/6e/03/6e_03_lecon.html",
      corrections: "pdfs/6e/03/6e_03_corr.pdf",
      flash: "pdfs/6e/03/6e_03_Flash.pdf"
    },
    {
      titre: "Chapitre 4 — Fractions 1",
      lecon: "pdfs/6e/04/6e_04_lecon.html",
      corrections: "pdfs/6e/04/6e_04_corr.pdf",
      flash: "pdfs/6e/04/6e_04_Flash.pdf"
    },
    {
      titre: "Chapitre 5 — Distance 2",
      lecon: "pdfs/6e/05/6e_05_lecon.html",
      corrections: "pdfs/6e/05/6e_05_corr.pdf",
      flash: "pdfs/6e/05/6e_05_Flash.pdf"
    },
    {
      titre: "Chapitre 6 — Fractions 2",
      lecon: "pdfs/6e/06/6e_06_lecon.html",
      corrections: "pdfs/6e/06/6e_06_corr.pdf",
      flash: "pdfs/6e/06/6e_06_Flash.pdf"
    },
    {
      titre: "Chapitre 7 — Angles 1",
      lecon: "pdfs/6e/07/6e_07_lecon.html",
      corrections: "pdfs/6e/07/6e_07_corr.pdf",
      flash: "pdfs/6e/07/6e_07_Flash.pdf"
    },
    {
      titre: "Chapitre 8 — Nombres décimaux 1",
      lecon: "pdfs/6e/08/6e_08_lecon.html",
      corrections: "pdfs/6e/08/6e_08_corr.pdf",
      flash: "pdfs/6e/08/6e_08_Flash.pdf"
    },
    {
      titre: "Chapitre 9 — Angles 2",
      lecon: "pdfs/6e/09/6e_09_lecon.html",
      corrections: "pdfs/6e/09/6e_09_corr.pdf",
      flash: "pdfs/6e/09/6e_09_Flash.pdf"
    },
    {
      titre: "Chapitre 10 — Nombres décimaux 2",
      lecon: "pdfs/6e/10/6e_10_lecon.html",
      corrections: "pdfs/6e/10/6e_10_corr.pdf",
      flash: "pdfs/6e/10/6e_10_Flash.pdf"
    },
    {
      titre: "Chapitre 11 — Triangles 1",
      lecon: "pdfs/6e/11/6e_11_lecon.html",
      corrections: "pdfs/6e/11/6e_11_corr.pdf",
      flash: "pdfs/6e/11/6e_11_Flash.pdf"
    },
    {
      titre: "Chapitre 12 — Nombres décimaux 3",
      lecon: "pdfs/6e/12/6e_12_lecon.html",
      corrections: "pdfs/6e/12/6e_12_corr.pdf",
      flash: "pdfs/6e/12/6e_12_Flash.pdf"
    },
    {
      titre: "Chapitre 13 — Triangles 2",
      lecon: "pdfs/6e/13/6e_13_lecon.html",
      corrections: "pdfs/6e/13/6e_13_corr.pdf",
      flash: "pdfs/6e/13/6e_13_Flash.pdf"
    },
    {
      titre: "Chapitre 14 — Nombres décimaux 4",
      lecon: "pdfs/6e/14/6e_14_lecon.html",
      corrections: "pdfs/6e/14/6e_14_corr.pdf",
      flash: "pdfs/6e/14/6e_14_Flash.pdf"
    },
    {
      titre: "Chapitre 15 — Aires et Périmètres 1",
      lecon: "pdfs/6e/15/6e_15_lecon.html",
      corrections: "pdfs/6e/15/6e_15_corr.pdf",
      flash: "pdfs/6e/15/6e_15_Flash.pdf"
    },
    {
      titre: "Chapitre 16 — Fractions 3",
      lecon: "pdfs/6e/16/6e_16_lecon.html",
      corrections: "pdfs/6e/16/6e_16_corr.pdf",
      flash: "pdfs/6e/16/6e_16_Flash.pdf"
    },
    {
      titre: "Chapitre 17 — Proportionnalité 1",
      lecon: "pdfs/6e/17/6e_17_lecon.html",
      corrections: "pdfs/6e/17/6e_17_corr.pdf",
      flash: "pdfs/6e/17/6e_17_Flash.pdf"
    },
    {
      titre: "Chapitre 18 — Symétrie axiale 1",
      lecon: "pdfs/6e/18/6e_18_lecon.html",
      corrections: "pdfs/6e/18/6e_18_corr.pdf",
      flash: "pdfs/6e/18/6e_18_Flash.pdf"
    },
    {
      titre: "Chapitre 19 — Fractions 4",
      lecon: "pdfs/6e/19/6e_19_lecon.html",
      corrections: "pdfs/6e/19/6e_19_corr.pdf",
      flash: "pdfs/6e/19/6e_19_Flash.pdf"
    },
    {
      titre: "Chapitre 20 — Aires et Périmètres 2",
      lecon: "pdfs/6e/20/6e_20_lecon.html",
      corrections: "pdfs/6e/20/6e_20_corr.pdf",
      flash: "pdfs/6e/20/6e_20_Flash.pdf"
    },
    {
      titre: "Chapitre 21 — Symétrie axiale 2",
      lecon: "pdfs/6e/21/6e_21_lecon.html",
      corrections: "pdfs/6e/21/6e_21_corr.pdf",
      flash: "pdfs/6e/21/6e_21_Flash.pdf"
    },
    {
      titre: "Chapitre 22 — Proportionnalité 2",
      lecon: "pdfs/6e/22/6e_22_lecon.html",
      corrections: "pdfs/6e/22/6e_22_corr.pdf",
      flash: "pdfs/6e/22/6e_22_Flash.pdf"
    },
    {
      titre: "Chapitre 23 — Solides et Volumes",
      lecon: "pdfs/6e/23/6e_23_lecon.html",
      corrections: "pdfs/6e/23/6e_23_corr.pdf",
      flash: "pdfs/6e/23/6e_23_Flash.pdf"
    }
  ],
  "5e": [
    {
      titre: "Chapitre 1 — Expression Numérique 1",
      lecon: "pdfs/5e/01/5e_01_Lecon.html",
      corrections: "pdfs/5e/01/5e_01_corr.pdf",
      flash: "pdfs/5e/01/5e_01_Flash.pdf"
    },
    {
      titre: "Chapitre 2 — Triangles",
      lecon: "pdfs/5e/02/5e_02_Lecon.html",
      corrections: "pdfs/5e/02/5e_02_corr.pdf",
      flash: "pdfs/5e/02/5e_02_Flash.pdf"
    },
    {
      titre: "Chapitre 3 — Quotient et Fraction 1",
      lecon: "pdfs/5e/03/5e_03_Lecon.html",
      corrections: "pdfs/5e/03/5e_03_corr.pdf",
      flash: "pdfs/5e/03/5e_03_Flash.pdf"
    },
    {
      titre: "Chapitre 4 — Symétrie centrale",
      lecon: "pdfs/5e/04/5e_04_Lecon.html",
      corrections: "pdfs/5e/04/5e_04_corr.pdf",
      flash: "pdfs/5e/04/5e_04_Flash.pdf"
    },
    {
      titre: "Chapitre 5 — Expression Numérique 2",
      lecon: "pdfs/5e/05/5e_05_Lecon.html",
      corrections: "pdfs/5e/05/5e_05_corr.pdf",
      flash: "pdfs/5e/05/5e_05_Flash.pdf"
    },
    {
      titre: "Chapitre 6 — Angles et droites 1",
      lecon: "pdfs/5e/06/5e_06_Lecon.html",
      corrections: "pdfs/5e/06/5e_06_corr.pdf",
      flash: "pdfs/5e/06/5e_06_Flash.pdf"
    },
    {
      titre: "Chapitre 7 — Nombres relatifs 1",
      lecon: "pdfs/5e/07/5e_07_Lecon.html",
      corrections: "pdfs/5e/07/5e_07_corr.pdf",
      flash: "pdfs/5e/07/5e_07_Flash.pdf"
    },
    {
      titre: "Chapitre 8 — Triangles et cercles 1",
      lecon: "pdfs/5e/08/5e_08_Lecon.html",
      corrections: "pdfs/5e/08/5e_08_corr.pdf",
      flash: "pdfs/5e/08/5e_08_Flash.pdf"
    },
    {
      titre: "Chapitre 9 — Division",
      lecon: "pdfs/5e/09/5e_09_Lecon.html",
      corrections: "pdfs/5e/09/5e_09_corr.pdf",
      flash: "pdfs/5e/09/5e_09_Flash.pdf"
    },
    {
      titre: "Chapitre 10 — Angles et droites 2",
      lecon: "pdfs/5e/10/5e_10_Lecon.html",
      corrections: "pdfs/5e/10/5e_10_corr.pdf",
      flash: "pdfs/5e/10/5e_10_Flash.pdf"
    },
    {
      titre: "Chapitre 11 — Quotient et Fraction 2",
      lecon: "pdfs/5e/11/5e_11_Lecon.html",
      corrections: "pdfs/5e/11/5e_11_corr.pdf",
      flash: "pdfs/5e/11/5e_11_Flash.pdf"
    },
    {
      titre: "Chapitre 12 — Proportionnalité 1",
      lecon: "pdfs/5e/12/5e_12_Lecon.html",
      corrections: "pdfs/5e/12/5e_12_corr.pdf",
      flash: "pdfs/5e/12/5e_12_Flash.pdf"
    },
    {
      titre: "Chapitre 13 — Parallélogrammes 1",
      lecon: "pdfs/5e/13/5e_13_Lecon.html",
      corrections: "pdfs/5e/13/5e_13_corr.pdf",
      flash: "pdfs/5e/13/5e_13_Flash.pdf"
    },
    {
      titre: "Chapitre 14 — Nombres relatifs 2",
      lecon: "pdfs/5e/14/5e_14_Lecon.html",
      corrections: "pdfs/5e/14/5e_14_corr.pdf",
      flash: "pdfs/5e/14/5e_14_Flash.pdf"
    },
    {
      titre: "Chapitre 15 — Triangles et cercles 2",
      lecon: "pdfs/5e/15/5e_15_Lecon.html",
      corrections: "pdfs/5e/15/5e_15_corr.pdf",
      flash: "pdfs/5e/15/5e_15_Flash.pdf"
    },
    {
      titre: "Chapitre 16 — Calcul littéral 1",
      lecon: "pdfs/5e/16/5e_16_Lecon.html",
      corrections: "pdfs/5e/16/5e_16_corr.pdf",
      flash: "pdfs/5e/16/5e_16_Flash.pdf"
    },
    {
      titre: "Chapitre 17 — Statistiques 1",
      lecon: "pdfs/5e/17/5e_17_Lecon.html",
      corrections: "pdfs/5e/17/5e_17_corr.pdf",
      flash: "pdfs/5e/17/5e_17_Flash.pdf"
    },
    {
      titre: "Chapitre 18 — Parallélogrammes 2",
      lecon: "pdfs/5e/18/5e_18_Lecon.html",
      corrections: "pdfs/5e/18/5e_18_corr.pdf",
      flash: "pdfs/5e/18/5e_18_Flash.pdf"
    },
    {
      titre: "Chapitre 19 — Proportionnalité 2",
      lecon: "pdfs/5e/19/5e_19_Lecon.html",
      corrections: "pdfs/5e/19/5e_19_corr.pdf",
      flash: "pdfs/5e/19/5e_19_Flash.pdf"
    },
    {
      titre: "Chapitre 20 — Calcul littéral 2",
      lecon: "pdfs/5e/20/5e_20_Lecon.html",
      corrections: "pdfs/5e/20/5e_20_corr.pdf",
      flash: "pdfs/5e/20/5e_20_Flash.pdf"
    },
    {
      titre: "Chapitre 21 — Statistiques 2",
      lecon: "pdfs/5e/21/5e_21_Lecon.html",
      corrections: "pdfs/5e/21/5e_21_corr.pdf",
      flash: "pdfs/5e/21/5e_21_Flash.pdf"
    },
    {
      titre: "Chapitre 22 — Probabilité",
      lecon: "pdfs/5e/22/5e_22_Lecon.html",
      corrections: "pdfs/5e/22/5e_22_corr.pdf",
      flash: "pdfs/5e/22/5e_22_Flash.pdf"
    }
  ],
  "4e": [
    {
      titre: "Chapitre 1 — Nombres relatifs 1",
      lecon: "pdfs/4e/01/4e_01_Lecon.pdf",
      corrections: "pdfs/4e/01/4e_01_corr.pdf",
      flash: "pdfs/4e/01/4e_01_Flash.pdf"
    },
    {
      titre: "Chapitre 2 — Statistiques 1",
      lecon: "pdfs/4e/02/4e_02_Lecon.pdf",
      corrections: "pdfs/4e/02/4e_02_corr.pdf",
      flash: "pdfs/4e/02/4e_02_Flash.pdf"
    },
    {
      titre: "Chapitre 3 — Nombres relatifs 2",
      lecon: "pdfs/4e/03/4e_03_Lecon.pdf",
      corrections: "pdfs/4e/03/4e_03_corr.pdf",
      flash: "pdfs/4e/03/4e_03_Flash.pdf"
    },
    {
      titre: "Chapitre 4 — Calcul littéral 1",
      lecon: "pdfs/4e/04/4e_04_Lecon.pdf",
      corrections: "pdfs/4e/04/4e_04_corr.pdf",
      flash: "pdfs/4e/04/4e_04_Flash.pdf"
    },
    {
      titre: "Chapitre 5 — Racine carrée",
      lecon: "pdfs/4e/05/4e_05_Lecon.pdf",
      corrections: "pdfs/4e/05/4e_05_corr.pdf",
      flash: "pdfs/4e/05/4e_05_Flash.pdf"
    },
    {
      titre: "Chapitre 6 — Statistiques 2",
      lecon: "pdfs/4e/06/4e_06_Lecon.pdf",
      corrections: "pdfs/4e/06/4e_06_corr.pdf",
      flash: "pdfs/4e/06/4e_06_Flash.pdf"
    },
    {
      titre: "Chapitre 7 — Théorème de Pythagore 1",
      lecon: "pdfs/4e/07/4e_07_Lecon.pdf",
      corrections: "pdfs/4e/07/4e_07_corr.pdf",
      flash: "pdfs/4e/07/4e_07_Flash.pdf"
    },
    {
      titre: "Chapitre 8 — Calcul avec les fractions 1",
      lecon: "pdfs/4e/08/4e_08_Lecon.pdf",
      corrections: "pdfs/4e/08/4e_08_corr.pdf",
      flash: "pdfs/4e/08/4e_08_Flash.pdf"
    },
    {
      titre: "Chapitre 9 — Géométrie dans l'Espace 1",
      lecon: "pdfs/4e/09/4e_09_Lecon.pdf",
      corrections: "pdfs/4e/09/4e_09_corr.pdf",
      flash: "pdfs/4e/09/4e_09_Flash.pdf"
    },
    {
      titre: "Chapitre 10 — Calcul avec les fractions 2",
      lecon: "pdfs/4e/10/4e_10_Lecon.pdf",
      corrections: "pdfs/4e/10/4e_10_corr.pdf",
      flash: "pdfs/4e/10/4e_10_Flash.pdf"
    },
    {
      titre: "Chapitre 11 — Proportionnalité 1",
      lecon: "pdfs/4e/11/4e_11_Lecon.pdf",
      corrections: "pdfs/4e/11/4e_11_corr.pdf",
      flash: "pdfs/4e/11/4e_11_Flash.pdf"
    },
    {
      titre: "Chapitre 12 — Théorème de Pythagore 2",
      lecon: "pdfs/4e/12/4e_12_Lecon.pdf",
      corrections: "pdfs/4e/12/4e_12_corr.pdf",
      flash: "pdfs/4e/12/4e_12_Flash.pdf"
    },
    {
      titre: "Chapitre 13 — Proportionnalité 2",
      lecon: "pdfs/4e/13/4e_13_Lecon.pdf",
      corrections: "pdfs/4e/13/4e_13_corr.pdf",
      flash: "pdfs/4e/13/4e_13_Flash.pdf"
    },
    {
      titre: "Chapitre 14 — Thalès",
      lecon: "pdfs/4e/14/4e_14_Lecon.pdf",
      corrections: "pdfs/4e/14/4e_14_corr.pdf",
      flash: "pdfs/4e/14/4e_14_Flash.pdf"
    },
    {
      titre: "Chapitre 15 — Calcul littéral 3",
      lecon: "pdfs/4e/15/4e_15_Lecon.pdf",
      corrections: "pdfs/4e/15/4e_15_corr.pdf",
      flash: "pdfs/4e/15/4e_15_Flash.pdf"
    },
    {
      titre: "Chapitre 16 — Géométrie dans l'Espace 2",
      lecon: "pdfs/4e/16/4e_16_Lecon.pdf",
      corrections: "pdfs/4e/16/4e_16_corr.pdf",
      flash: "pdfs/4e/16/4e_16_Flash.pdf"
    },
    {
      titre: "Chapitre 17 — Proportionnalité 3",
      lecon: "pdfs/4e/17/4e_17_Lecon.pdf",
      corrections: "pdfs/4e/17/4e_17_corr.pdf",
      flash: "pdfs/4e/17/4e_17_Flash.pdf"
    },
    {
      titre: "Chapitre 18 — Proportionnalité 4",
      lecon: "pdfs/4e/18/4e_18_Lecon.pdf",
      corrections: "pdfs/4e/18/4e_18_corr.pdf",
      flash: "pdfs/4e/18/4e_18_Flash.pdf"
    },
    {
      titre: "Chapitre 19 — Puissances",
      lecon: "pdfs/4e/19/4e_19_Lecon.pdf",
      corrections: "pdfs/4e/19/4e_19_corr.pdf",
      flash: "pdfs/4e/19/4e_19_Flash.pdf"
    }
  ]
};

/*
  AUTOMATISMES_DATA — notions d'automatismes par niveau.
  Uniquement pour 6e et 5e (le 4e n'a pas cette rubrique : sa page niveau
  affiche directement les chapitres, comme avant).

  Pour AJOUTER UNE NOTION :
  1. Dépose tes fichiers dans pdfs/[niveau]/automatismes/ (ou où tu veux)
  2. Copie-colle un bloc { ... } ci-dessous et modifie titre + fichiers.
  3. "image", "video", "entrainement" peuvent être un PDF, une image,
     ou un lien complet (https://...). Laisse "" si la ressource n'existe
     pas encore : le bouton sera grisé automatiquement.
*/
const AUTOMATISMES_DATA = {
  "6e": [
    {
      titre: "N1",
      image: "pdfs/6e/automatismes/6e_N1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N2",
      image: "pdfs/6e/automatismes/6e_N2_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N3",
      image: "pdfs/6e/automatismes/6e_N3_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N4",
      image: "pdfs/6e/automatismes/6e_N4_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N5",
      image: "pdfs/6e/automatismes/6e_N5_image.pdf",
      video: "https://www.youtube.com/shorts/j6YB4G9PXME",
      entrainement: "https://coopmaths.fr/alea/?uuid=5ec3c&id=auto5N1E-1&n=8&d=10&s=4&s2=3&s3=3&s4=true&cd=0&tip=0&uuid=7fa0e&id=auto5N1E-2&n=4&d=10&s=1-2&s2=false&s3=true&cd=1&tip=0&v=eleve&es=211100000"
    },
    {
      titre: "N6",
      image: "pdfs/6e/automatismes/6e_N6_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N7",
      image: "pdfs/6e/automatismes/6e_N7_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N8",
      image: "pdfs/6e/automatismes/6e_N8_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N9",
      image: "pdfs/6e/automatismes/6e_N9_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M1",
      image: "pdfs/6e/automatismes/6e_M1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M2",
      image: "pdfs/6e/automatismes/6e_M2_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M3",
      image: "pdfs/6e/automatismes/6e_M3_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M4",
      image: "pdfs/6e/automatismes/6e_M4_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M5",
      image: "pdfs/6e/automatismes/6e_M5_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M6",
      image: "pdfs/6e/automatismes/6e_M6_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M7",
      image: "pdfs/6e/automatismes/6e_M7_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M8",
      image: "pdfs/6e/automatismes/6e_M8_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M9",
      image: "pdfs/6e/automatismes/6e_M9_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M10",
      image: "pdfs/6e/automatismes/6e_M10_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M11",
      image: "pdfs/6e/automatismes/6e_M11_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M12",
      image: "pdfs/6e/automatismes/6e_M12_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M13",
      image: "pdfs/6e/automatismes/6e_M13_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M14",
      image: "pdfs/6e/automatismes/6e_M14_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M15",
      image: "pdfs/6e/automatismes/6e_M15_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "M16",
      image: "pdfs/6e/automatismes/6e_M16_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G1",
      image: "pdfs/6e/automatismes/6e_G1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G2",
      image: "pdfs/6e/automatismes/6e_G2_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G3",
      image: "pdfs/6e/automatismes/6e_G3_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G4",
      image: "pdfs/6e/automatismes/6e_G4_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G5",
      image: "pdfs/6e/automatismes/6e_G5_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "D1",
      image: "pdfs/6e/automatismes/6e_D1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "P1",
      image: "pdfs/6e/automatismes/6e_P1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "P2",
      image: "pdfs/6e/automatismes/6e_P2_image.pdf",
      video: "",
      entrainement: ""
    }
  ],
  "5e": [
    {
      titre: "N1",
      image: "pdfs/5e/automatismes/5e_N1_image.pdf",
      video: "https://youtube.com/shorts/STSpfU7Fjzw?is=ovorpP_a5Apfh32-",
      entrainement: "https://coopmaths.fr/alea/?uuid=d5a6d&id=2N20-2&alea=8GFD&v=eleve&es=211100000"
    },
    {
      titre: "N2",
      image: "pdfs/5e/automatismes/5e_N2_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N3",
      image: "pdfs/5e/automatismes/5e_N3_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N4",
      image: "pdfs/5e/automatismes/5e_N4_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N5",
      image: "pdfs/5e/automatismes/5e_N5_image.pdf",
      video: "https://www.youtube.com/shorts/j6YB4G9PXME",
      entrainement: "https://coopmaths.fr/alea/?uuid=c5e16&id=6AutoN4-5&uuid=4ce49&id=canc3C22&n=3&d=10&qcm=0&cd=1&tip=0&uuid=fc635&id=CM2N3H-2&n=6&d=10&cd=1&tip=0&v=eleve&es=221100000"
    },
    {
      titre: "N6",
      image: "pdfs/5e/automatismes/5e_N6_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N7",
      image: "pdfs/5e/automatismes/5e_N7_image.pdf",
      video: "https://youtu.be/7nafaeXSc2A?is=JCWx9uX0RzN5UjI0",
      entrainement: "https://coopmaths.fr/alea/?uuid=1293c&id=auto5N1F-flash1&n=2&d=10&qcm=0&cd=1&tip=0&uuid=c3e17&id=auto5N1F-flash2&n=2&d=10&qcm=0&cd=1&tip=0&uuid=a5c5a&id=auto5N1D&n=2&d=10&s=2-3-4-5-6-7-8-9&cd=1&tip=0&uuid=f8095&id=can5C37&n=2&d=10&qcm=0&cd=1&tip=0&v=eleve&es=221100000"
    },
    {
      titre: "N8",
      image: "pdfs/5e/automatismes/5e_N8_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N9",
      image: "pdfs/5e/automatismes/5e_N9_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N10",
      image: "pdfs/5e/automatismes/5e_N10_image.pdf",
      video: "https://youtube.com/shorts/Y6r6WkUO_SY?is=JOP8wdt37Mgebtcw",
      entrainement: "https://coopmaths.fr/alea/?uuid=91d72&id=auto5N3B&v=eleve&es=211100000"
    },
    {
      titre: "N11",
      image: "pdfs/5e/automatismes/5e_N11_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N12",
      image: "pdfs/5e/automatismes/5e_N12_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N13",
      image: "pdfs/5e/automatismes/5e_N13_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N14",
      image: "pdfs/5e/automatismes/5e_N14_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N15",
      image: "pdfs/5e/automatismes/5e_N15_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N16",
      image: "pdfs/5e/automatismes/5e_N16_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N17",
      image: "pdfs/5e/automatismes/5e_N17_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N18",
      image: "pdfs/5e/automatismes/5e_N18_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N19",
      image: "pdfs/5e/automatismes/5e_N19_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N20",
      image: "pdfs/5e/automatismes/5e_N20_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N21",
      image: "pdfs/5e/automatismes/5e_N21_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N22",
      image: "pdfs/5e/automatismes/5e_N22_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N23",
      image: "pdfs/5e/automatismes/5e_N23_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N24",
      image: "pdfs/5e/automatismes/5e_N24_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "N25",
      image: "pdfs/5e/automatismes/5e_N25_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G1",
      image: "pdfs/5e/automatismes/5e_G1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G2",
      image: "pdfs/5e/automatismes/5e_G2_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G3",
      image: "pdfs/5e/automatismes/5e_G3_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G4",
      image: "pdfs/5e/automatismes/5e_G4_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G5",
      image: "pdfs/5e/automatismes/5e_G5_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G6",
      image: "pdfs/5e/automatismes/5e_G6_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G7",
      image: "pdfs/5e/automatismes/5e_G7_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G8",
      image: "pdfs/5e/automatismes/5e_G8_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G9 et G10",
      image: "pdfs/5e/automatismes/5e_G9_image.pdf",
      video: "https://youtube.com/shorts/xYbqwdEYgV8?is=Htq_C58aRpSkuCYn",
      entrainement: "https://coopmaths.fr/alea/?uuid=cded3&id=6G4B-2&uuid=e8d33&id=6AutoG1-5&n=1&d=10&s=5&cd=1&tip=0&v=eleve&es=221100000"
    },
    {
      titre: "G11",
      image: "pdfs/5e/automatismes/5e_G11_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G12",
      image: "pdfs/5e/automatismes/5e_G12_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G13",
      image: "pdfs/5e/automatismes/5e_G13_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G14",
      image: "pdfs/5e/automatismes/5e_G14_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G15",
      image: "pdfs/5e/automatismes/5e_G15_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G16",
      image: "pdfs/5e/automatismes/5e_G16_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "G17",
      image: "pdfs/5e/automatismes/5e_G17_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "D1",
      image: "pdfs/5e/automatismes/5e_D1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "D2",
      image: "pdfs/5e/automatismes/5e_D2_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "D3",
      image: "pdfs/5e/automatismes/5e_D3_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "P1",
      image: "pdfs/5e/automatismes/5e_P1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "P2",
      image: "pdfs/5e/automatismes/5e_P2_image.pdf",
      video: "",
      entrainement: ""
    }
  ],
    "4e": [
    {
      titre: "A1",
      image: "pdfs/4e/automatismes/4e_A1_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A2",
      image: "pdfs/4e/automatismes/4e_A2_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A3",
      image: "pdfs/4e/automatismes/4e_A3_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A4",
      image: "pdfs/4e/automatismes/4e_A4_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A5",
      image: "pdfs/4e/automatismes/4e_A5_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A6",
      image: "pdfs/4e/automatismes/4e_A6_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A7",
      image: "pdfs/4e/automatismes/4e_A7_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A8",
      image: "pdfs/4e/automatismes/4e_A8_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A9",
      image: "pdfs/4e/automatismes/4e_A9_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A10",
      image: "pdfs/4e/automatismes/4e_A10_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A11",
      image: "pdfs/4e/automatismes/4e_A11_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A12",
      image: "pdfs/4e/automatismes/4e_A12_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A13",
      image: "pdfs/4e/automatismes/4e_A13_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A14",
      image: "pdfs/4e/automatismes/4e_A14_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A15",
      image: "pdfs/4e/automatismes/4e_A15_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A16",
      image: "pdfs/4e/automatismes/4e_A16_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A17",
      image: "pdfs/4e/automatismes/4e_A17_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A18",
      image: "pdfs/4e/automatismes/4e_A18_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A19",
      image: "pdfs/4e/automatismes/4e_A19_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A20",
      image: "pdfs/4e/automatismes/4e_A20_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A21",
      image: "pdfs/4e/automatismes/4e_A21_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A22",
      image: "pdfs/4e/automatismes/4e_A22_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A23",
      image: "pdfs/4e/automatismes/4e_A23_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A24",
      image: "pdfs/4e/automatismes/4e_A24_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A25",
      image: "pdfs/4e/automatismes/4e_A25_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A26",
      image: "pdfs/4e/automatismes/4e_A26_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A27",
      image: "pdfs/4e/automatismes/4e_A27_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A28",
      image: "pdfs/4e/automatismes/4e_A28_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A29",
      image: "pdfs/4e/automatismes/4e_A29_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A30",
      image: "pdfs/4e/automatismes/4e_A30_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A31",
      image: "pdfs/4e/automatismes/4e_A31_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A32",
      image: "pdfs/4e/automatismes/4e_A32_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A33",
      image: "pdfs/4e/automatismes/4e_A33_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A34",
      image: "pdfs/4e/automatismes/4e_A34_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A35",
      image: "pdfs/4e/automatismes/4e_A35_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A36",
      image: "pdfs/4e/automatismes/4e_A36_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A37",
      image: "pdfs/4e/automatismes/4e_A37_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A38",
      image: "pdfs/4e/automatismes/4e_A38_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A39",
      image: "pdfs/4e/automatismes/4e_A39_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A40",
      image: "pdfs/4e/automatismes/4e_A40_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A41",
      image: "pdfs/4e/automatismes/4e_A41_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A42",
      image: "pdfs/4e/automatismes/4e_A42_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A43",
      image: "pdfs/4e/automatismes/4e_A43_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A44",
      image: "pdfs/4e/automatismes/4e_A44_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A45",
      image: "pdfs/4e/automatismes/4e_A45_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A46",
      image: "pdfs/4e/automatismes/4e_A46_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A47",
      image: "pdfs/4e/automatismes/4e_A47_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A48",
      image: "pdfs/4e/automatismes/4e_A48_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A49",
      image: "pdfs/4e/automatismes/4e_A49_image.pdf",
      video: "",
      entrainement: ""
    },
    {
      titre: "A50",
      image: "pdfs/4e/automatismes/4e_A50_image.pdf",
      video: "",
      entrainement: ""
    }
  ]
};

/*
  MATERIEL_LINKS — un lien "Matériel" par niveau, affiché en haut de la page
  du niveau, au-dessus du premier chapitre.
*/
const MATERIEL_LINKS = {
  "6e": "pdfs/6e/6e_materiel.html",
  "5e": "pdfs/5e/5e_materiel.html",
  "4e": "pdfs/4e/4e_materiel.html"
};

/*
  EXTRA_LINKS — fichiers/liens affichés sur la page d'accueil,
  au même endroit que 6e / 5e / 4e (ex: formulaire, planning, ressource commune).
  Ajoute ou retire un bloc { ... } selon besoin, même logique que les chapitres :
  - "fichier" peut être un PDF (pdfs/...) ou un lien complet (https://...)
*/
const EXTRA_LINKS = [
  {
    titre: "Bracelets d'autonomie",
    fichier: "pdfs/bracelets-autonomie.pdf"
  },
    {
    titre: "Je n'arrive pas à faire un exercice",
    fichier: "pdfs/affiche_recherche.pdf"
  }
];
