// Modéle de l'objet pour chaque projet  
// {
//     "id"                    : 1,
//     "nom"                   : 'Maraiche', // Nom
//     "brief"                 : 'L\'homme poisson', // brève description
//     "description"           : '', //description compléte
//     "artiste"               : 'Mazarine', //artiste
//     "charaUrl"              : '', // lien image chara design
//     "inspiUrl"              : '', // lien image planche d'inspiration
//     "visualisationUrl"      : [''], //tableau de lien de rendu 3d
//     "figurineUrl"           : [''], //tableau de lien de photos de figurine réalisée
//     "telechargementDispo"   : true, // booléen - est-ce que l'artiste accepte que son projet soit télechargé
//     "fichierModel3dUrl"     : '' //lien vers le fichier du modèle 3D
// }

export const projet = [
    {
        "id"                    : 1,
        "nom"                   : 'Maraiche',
        "brief"                 : 'L\'homme poisson',
        "description"           : '', 
        "artiste"               : 'Mazarine',
        "charaUrl"              : 'assets\images\photoProjets\Maraiche\maraiche_charadesign.jpg',
        "inspiUrl"              : 'assets\images\photoProjets\Maraiche\maraiche_inspiration.jpg', 
        "visualisationUrl"      : ['assets\images\photoProjets\Maraiche\maraiche_visu_1.jpg',
                                    'assets\images\photoProjets\Maraiche\maraiche_visu_2.jpg',
                                    'assets\images\photoProjets\Maraiche\maraiche_visu_3.jpg',
                                  ], 
        "figurineUrl"           : [''],
        "telechargementDispo"   : true,
        "fichierModel3dUrl"     : ''
    }
]
