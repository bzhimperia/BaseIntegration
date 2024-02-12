Couleurs
**

Couleur doré : #C89446
couleur de police : #6F6F6F
couleur police titre : black
couleur police formulaire : rgba(255, 255, 255, 0.6);

Polices
**
font-family : 'Source Sans Pro', sans-serif;
font-family : 'Pinyon Script', serif;

Effets et postionnements
***
Nav du header : au hover changement de la couleur des liens en doré avec une transition de .3s

Bouton réserver : au hover un background-color doré dans le Bouton

Les liens "see more" ont un soulignement doré au hover tout comme les liens de la navigation de milieu de page

Le carré situé à l'arrière des 4 vignettes bénéficie des propriétés suivantes et sont inclus dans une médias querie de type (min-width: 768px), ce carré ne doit pas être présent sur les résolutions plus basse:

transform: translate(-50%, -260px) rotate(
45deg

Dans la zone de réservation :
au hover le background du bouton réserver table devient transparent.

L'image sur la zone recipes est en background avec les propriétés suivantes :
background: no-repeat top left / 50vw auto url(../img/news-bg.jpg);
)

L'image sur la zone footer est en background positionné en bottom right

L'image des oranges et épices qui sont de part et d'autre de la zone principale sont positionnés comme suit : 
  background: fixed top 95px right 0px url(../img/oranges.jpg) no-repeat, fixed top 640px left 0px url(../img/spices.jpg) no-repeat;
}