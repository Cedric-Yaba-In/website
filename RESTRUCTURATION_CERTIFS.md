# 📁 Restructuration du répertoire certifications

## Structure actuelle (problématique)
```
certifs/
├── AWS/ (5 PDFs avec noms techniques)
├── GCP/ (vide)
├── Google/ (mélange PDFs/PNGs)
├── Gestion de projet/ (1 PDF)
├── Yali/ (2 PDFs)
└── 3 PNGs à la racine
```

## Structure proposée (optimisée)
```
certifs/
├── badges/
│   ├── gcp-professional-architect.png
│   ├── aws-cloud-practitioner.png
│   ├── project-management-foundations.png
│   └── yali-digital-marketing.png
├── certificates/
│   ├── gcp/
│   │   └── professional-cloud-architect.pdf
│   ├── aws/
│   │   ├── cloud-practitioner.pdf
│   │   ├── cloud-acquisition.pdf
│   │   └── professional-roles.pdf
│   ├── management/
│   │   └── project-foundations.pdf
│   └── marketing/
│       └── yali-digital-marketing.pdf
└── learning-paths/
    ├── aws-certification-paths.pdf
    ├── gcp-learning-path.pdf
    └── decision-maker-guide.pdf
```

## Actions à effectuer

### 1. Renommage des fichiers
- `Professional-Cloud-Architect.png` → `badges/gcp-professional-architect.png`
- `notion-essentiel-cloud-practitionner.png` → `badges/aws-cloud-practitioner.png`
- `fondement-gestion-projet.png` → `badges/project-management-foundations.png`

### 2. Déplacement des certificats
- Tous les PDFs AWS → `certificates/aws/`
- Certificat gestion projet → `certificates/management/`
- Certificats YALI → `certificates/marketing/`

### 3. Suppression des doublons
- Garder uniquement les versions officielles
- Supprimer les fichiers de test/exercice

### 4. Optimisation des images
- Convertir tous les badges en PNG haute qualité
- Taille standardisée : 400x400px
- Compression optimisée pour le web

## Bénéfices de cette restructuration

✅ **Navigation claire** : Structure logique par type de contenu
✅ **Maintenance facile** : Noms de fichiers standardisés
✅ **Performance web** : Images optimisées
✅ **Évolutivité** : Facile d'ajouter de nouvelles certifications
✅ **SEO friendly** : URLs propres et descriptives