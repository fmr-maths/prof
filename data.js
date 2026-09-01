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
      titre: "Chapitre 1 — Nombres entiers",
      lecon: "pdfs/6e/01/6e_01_lecon.html",
      corrections: "pdfs/6e/01/6e_01_corr.pdf",
      flash: "pdfs/6e/01/6e_01_Flash.pdf"
    }
  ],
  "5e": [
    {
      titre: "Chapitre 1 — Nombres relatifs",
      lecon: "pdfs/5e/01/5e_01_Lecon.html",
      corrections: "pdfs/5e/01/5e_01_corr.pdf",
      flash: "pdfs/5e/5e_01_Flash.pdf"
    }
  ],
  "4e": [
    {
      titre: "Chapitre 1 — Puissances",
      lecon: "pdfs/4e/ch1-lecon.pdf",
      corrections: "pdfs/4e/ch1-corrections.pdf",
      flash: "pdfs/4e/ch1-flash.pdf"
    }
  ]
};

/*
  EXTRA_LINKS — fichiers/liens affichés sur la page d'accueil,
  au même endroit que 6e / 5e / 4e (ex: formulaire, planning, ressource commune).
  Ajoute ou retire un bloc { ... } selon besoin, même logique que les chapitres :
  - "fichier" peut être un PDF (pdfs/...) ou un lien complet (https://...)
*/
const EXTRA_LINKS = [
  {
    titre: "Formulaire de calcul",
    fichier: "pdfs/formulaire.pdf"
  }
];
