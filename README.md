Ce projet est un projet Angular dont le but est de réaliser un front d'un projet backend en accomplissant différentes taches :

- Accéder à son profil et mettre à jour ses informations (changement de nom et de mot de passe).
- Lister les utilisateurs.
- Lister les associations.
- Accéder à la fiche d'un utilisateur (information personnelle et la liste des associations dont - il est au moins membre).
- Accéder à la fiche d'une association (information sur l'association, ses membres et ses minutes).
- Rechercher un utilisateur ou une association (par son Id).
- Supprimer une association ou un utilisateur.
- Ajouter un utilisateur.
- Ajouter une association.
- Modifier une association (modification des roles par exemple).

La Structure du projet sera decrite au fur et à mesure de l'explication des différents points.

## Connexion

Lors du lancement du site , on est redirigé vers une page de login qui va envoyer une requette de login au serveur en utilisant un id et un mot de passe et renverra un token stocké au sein de la page si elle est réussie. Elle redirigera ainsi l'utilisateur vers la page Home.

Le login stocke également les informations de l'utilisateur dans UserDataService afin de savoir quel User on est.

## Routes

Voici les différentes routes utilisées par le projet.

/:id correspond à toutes les routes utilisant le chemin path/x.

    { path: 'users/:id', component: UserInfoComponent, canActivate: [authGuard] },
    { path: 'associations/:id', component: AssociationInfoComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'lists', component: ListComponent, canActivate: [authGuard] },
    { path: 'lists/:id', component: ListComponent, canActivate: [authGuard] },
    { path: 'profile', component: UserProfileComponent, canActivate: [authGuard]},
    { path: 'select', component: SelectionIdComponent, canActivate: [authGuard]},
    { path: 'add', component: AddElementComponent, canActivate: [authGuard]},
    { path: 'edit/:id', component: EditAssociationComponent, canActivate: [authGuard]},
    { path: 'add/user', component: AddUserComponent, canActivate: [authGuard]},
    { path: 'add/association', component: AddAssociationComponent, canActivate: [authGuard]},
    { path: 'home', component: HomeComponent, canActivate: [authGuard]},
    { path: '', redirectTo:'login', pathMatch:'full'}

## Accéder à son profil et mettre à jour ses informations (changement de nom et de mot de passe).

L'accès à son profil se fait via le bouton profil en haut a gauche de l'écran (path: profile).
Cela nous donne accès à un formulaire préremplie avec les informations de UserDataService.
En modfiant le formulaire et cliquant sur entrée, les informations sont bien modifiée à l'aide d'une requette POST.

## Lister les utilisateurs. Lister les associations.

Pour lister les utilisateurs, il faut appuyer sur Utilisateurs dans nav (path: lists/users).
Pour lister les associations, il faut appuyer sur Utilisateurs dans nav (path: lists/associations).
ListUser affiche une série de cartes en fonction du lien. 

Users => UserCard,

Association => Association cards

Celle ci on toutes les informations de l'objet et sont generer grace a un tableau d'une requette GET

## Supprimer une association ou un utilisateur.

Pour supprimer une association, il y a une petite croix sur les cartes de ListAssociations qui permet de supprimer à l'aide d'une requette DELETE et de recharger la page.

C'est la même chose pour un utilisateur, mais un utilisateur au sein d'une association ne pourra pas être supprimer par sécurité, il faut d'abord supprimer le rôle.

## Accéder à la fiche d'un utilisateur (information personnelle et la liste des associations dont - il est au moins membre).

L'accès à la fiche d'un utilisateur se fait également depuis un hyperlien sur la carte qui emmene sur une page user-info (path: users/:id) et qui utiliser une requette GET sur l'id pour les afficher sous la même forme que UserPath avec un form inactif (le mapping etait plus facile avec les objets fournit par ngModel)

La liste de ses rôles dans les associations est affichée en dessous.

## Accéder à la fiche d'une association (information sur l'association, ses membres et ses minutes).

L'accès à la fiche d'une association se fait de la même manière (path: associations/:id) mais il ya a ici le nom, les users appartenants à l'association et les minutes.

De plus on a un bouton edit qui permet de modifier une association.

## Modifier une association (modification des roles par exemple).

La modification d'une asociation se fait via (path : edit/:id), on peut y modifier le nom, supprimer les différentes associations d'un simple click et ajouter des associations en inserant le nom du rôle et l'id de l'utilisateur.

## Ajouter une association.

L'ajout d'une association se fait depuis le bouton ADD (path: add/:) qui renvoie vers une page permettant de choisir si on veux renvoyer vers l'ajout d'association ou de user.

Pour ajouter une assocation il suffit de rentrer le nom de l'association et l'utilisateur ayant creer l'association est directement mis en directeur.

Puis on est rediriger vers la page d'edition pour ajouter des roles.

## Ajouter un utilisateur.

Pour ajouter un utilisateur on utilise la même procédure mais il faut cette fois rentrer :
- Son nom
- Son prénom
- Son age
- Son mot de passe

Si une des informations n'est pas utilisée le bouton confirmer est bloqué.

## Rechercher un utilisateur ou une association (par son Id).

Il suffit ici d'aller sur la page Search (path: select) qui demande le type d'element à afficher et l'id de l'element et qui affiche la page.



