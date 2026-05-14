# Changelog

## [Unreleased]

## [2026-05-14]

### Ajouté
- Sélecteur de langue (FR/EN/DE/IT/ES/PT/JA/KO) au moment du scan, avant de chercher la carte
- Les sets se chargent selon la langue sélectionnée — les images FR utilisent les vrais IDs de sets FR de l'API
- Autocomplete sets : dropdown custom avec filtre substring sur nom, code API et ptcgoCode (PAL, SVI, OBF…)
- Footer affichant le titre du dernier commit déployé, avec lien vers le commit GitHub
- Build step (build.js + vercel.json) injectant le SHA et message de commit au déploiement
- Badge langue (FR, EN…) en bas à gauche des cartes dans la collection
- Langue enregistrée en base dans la colonne `notes`

### Corrigé
- Recherche cassée : le numéro de carte était paddé avec des zéros (`025`) alors que l'API attend le numéro brut (`25`)
- Dropdown sets n'apparaissait plus : `initSetInput` était appelé dans le fetch async des sets au lieu du `load` initial
- Autocomplete natif `<datalist>` remplacé par un dropdown custom (filtre préfixe seulement sur certains navigateurs, noms en anglais uniquement)
