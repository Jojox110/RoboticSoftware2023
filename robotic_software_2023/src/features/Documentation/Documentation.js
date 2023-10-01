import React from "react";

import { Header } from "../Header/Header";
import styles from '../../Styles/DocumentationStyling.module.css'
import {DocumentationTemplate} from "./DocumentationTemplate";

import c1 from '../../DocImgs/controleur1.png'
import c2 from '../../DocImgs/controleur2.png'
import c3 from '../../DocImgs/controleur3.png'
import c4 from '../../DocImgs/controleur4.png'
import c5 from '../../DocImgs/controleur5.png'

import l1 from '../../DocImgs/logiciel1.png'

import m1 from '../../DocImgs/manette1.png'
import m2 from '../../DocImgs/manette2.png'

import dc1 from '../../DocImgs/dc1.png'
import dc2 from '../../DocImgs/dc2.png'
import dc3 from '../../DocImgs/dc3.png'
import dc4 from '../../DocImgs/dc4.png'

import e1 from '../../DocImgs/encoder1.png'
import e2 from '../../DocImgs/encoder2.png'
import e3 from '../../DocImgs/encoder3.png'
import e4 from '../../DocImgs/encoder4.png'

import s1 from '../../DocImgs/servo1.png'
import s2 from '../../DocImgs/servo2.png'
import s3 from '../../DocImgs/servo3.png'
import s4 from '../../DocImgs/servo4.png'
import s5 from '../../DocImgs/servo5.png'

export function Documentation() {
  return (
    <div>
        <Header />
        <article className={styles.documentationGrid}>
            <section className={styles.topicsArea}>
                <a href="#one">Contrôleur</a>
                <a href="#two">Logiciel</a>
                <a href="#three">Manette</a>
                <a href="#four">Moteur DC et pince</a>
                <a href="#five">Moteur Codé</a>
                <a href="#six">Moteur Servo</a>
            </section>
            <section className={styles.documentationArea}>
                <div id="one" className={styles.docsContainer}>
                    <h1>Contrôleur</h1>
                    <img src={c1} className={styles.img}/>
                    <p>Le contrôleur est utilisé pour faire fonctionner toutes les parties du robot. C’est ici que nous allons brancher nos moteurs et notre électro-aimant.
                    </p>
                    <h2>Comment ajouter le contrôleur a Mblock:</h2>
                    <p>Étape 1: Cliquez (Add ou Ajouter)</p>
                    <img src={c2} className={styles.img}/>
                    <p>Étape 2: Défilez et trouvez Ultimate 2.0. Cliquez ensuite sur OK.</p>
                    <img src={c3} className={styles.img}/>
                    <p>Vous devriez voir votre robot dans la liste ici.</p>
                    <img src={c4} className={styles.img}/>
                    <h2>Télécharger votre code dans le robot:</h2>
                    <p>Cliquez sur Upload, ensuite cliquez Connect. Cela téléchargera votre code dans le robot.</p>
                    <img src={c5} className={styles.img}/>
                </div>
                <div id="two" className={styles.docsContainer}>
                    <h1>Logiciel de programmation</h1>
                    <p>Le logiciel de programmation pour le Ultimate 2.0 est mBlock v5.4.0. Le tout peut être télécharger <a href="https://mblock.makeblock.com/en-us/download/">sur ce lien</a></p>
                    <img src={l1} className={styles.softwareImg}/>
                    <p>Il suffit de cliquer sur la version Windows pour les PC ou Mac pour les produits Apple. La version web ne fonctionne pas aussi bien et est donc déconseillé pour la compétition.</p>
                </div>
                <div id="three">
                    <h1>Manette Bluetooth</h1>
                    <p>Cliquez sur Extensions:</p>
                    <img src={m1} className={styles.img}/>
                    <p>Ensuite, trouvez le module Bluetooth Controller et cliquez sur ajouter</p>
                    <img src={m2} className={styles.img}/>
                </div>
                <div id="four">
                    <h1>Moteur DC et pince</h1>
                    <img src={dc1} className={styles.img}/>
                    <img src={dc2} className={styles.img}/>
                    <p>
                        Un moteur à courant continu (DC) fait partie d'une classe de moteurs électriques rotatifs qui convertit l'énergie électrique à courant continu (CC) en énergie mécanique. Les types les plus courants reposent sur les forces produites par les champs magnétiques. Presque tous les types de moteurs à courant continu ont un mécanisme interne, électromécanique ou électronique, pour changer périodiquement la direction du courant dans une partie du moteur.
                    </p>
                    <img src={dc3} className={styles.img} />
                    <p>Dans l’exemple ci-haut, il y a un moteur DC branché dans le port A1 et un autre dans le port 2B.</p>
                    <h2>Comment faire fonctionner un moteur DCavec Mblock: </h2>
                    <img src={dc4} className={styles.img} />
                    <p>Turn at Power: 0-100% (La puissance du moteur). On peut aussi avoir des valeurs négatives pour faire tourner le moteur dans l’autre sens.</p>
                </div>
                <div id="five">
                    <h1>Moteur codé</h1>
                    <img src={e1} className={styles.img} />
                    <p>Un moteur codé fait partie d'une classe de moteurs électriques rotatifs qui convertit l'énergie électrique à courant continu (CC) en énergie mécanique. Les types les plus courants reposent sur les forces produites par les champs magnétiques. Contrairement aux moteurs DC, les moteurs codés permettent un plus grand contrôle du moteur via la programmation.</p>
                    <img src={e2} className={styles.img} />
                    <p>Dans l’exemple ci-haut, il y a un moteur codé branché dans le port 1.</p>
                    <h2>Comment faire fonctionner un moteur codé avec Mblock:</h2>
                    <img src={e3} className={styles.img} />
                    <p>Dans ce code, le moteur tournera à 75% de sa capacité dans un sens si le bouton 1 est appuyé sur la manette et à 75% de sa capacité dans l’autre sens si le bouton 2 est appuyé. Finalement, le moteur s’arrêtera si les boutons 1 et 2 ne sont pas appuyés.</p>
                    <img src={e4} className={styles.img} />
                    <p>Dans ce code, le moteur tournera à une vitesse de 30 tours par minute si le bouton 1 est appuyé. Si c’est le bouton 2 qui est appuyé, le moteur tournera de 135 degrés à une vitesse de 20 tours par minute. Finalement, le moteur s’arrêtera si les boutons 1 et 2 ne sont pas appuyés.</p>
                    <p>*Il est à noter qu’il est possible de placer une vitesse négative de rotations par minute pour faire tourner le moteur dans l’autre sens.</p>
                </div>
                <div id="six">
                    <h1>Servo moteur</h1>
                    <img src={s1} className={styles.img} />
                    <p>Un servomoteur est un actionneur rotatif qui permet un contrôle précis de la position angulaire, de la vitesse et de l’accélération. Il se compose d’un moteur approprié couplé à un capteur pour le retour de position. Il nécessite également un contrôleur relativement sophistiqué, souvent un module dédié conçu spécifiquement pour une utilisation avec des servomoteurs.</p>
                    <h2>Connectez votre moteur dans le port 6 et la connexion 1</h2>
                    <img src={s2} className={styles.img} />
                    <p>Faites attention à l’alignement de votre moteur! Il faut bien brancher les fils. Fil noir a GND et fil rouge à VCC</p>
                    <img src={s3} className={styles.img} />
                    <p>Téléchargez le module suivant et cliquer ADD ou Ajouter.</p>
                    <img src={s4} className={styles.img} />
                    <p>Pour faire fonctionner votre moteur vous pouvez utiliser cet exemple. Le bouton 1 tourne le servomoteur à 90 dégrés.</p>
                    <img src={s5} className={styles.img} />
                    <p>ATTENTION : 63.75 dégree = 90 dégrés. VOIR LA CONVERSION CI-DESSOUS! ***</p>
                    <p>ATTENTION: VOUS ALLEZ DEVOIR UTILISER UNE FORMULE MATHÉMATIQUE POUR FAIRE LA CONVERSION À 360o.
                        <br />
                        y/255 = x/360
                        <br />
                        X = La rotation désirée
                        Y = La valeur dans le code.</p>
                </div>
            </section>
        </article>
    </div>
  )
}
