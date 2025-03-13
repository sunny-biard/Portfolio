const script = require("../src/assets/scripts/lib")

describe('createPortfolioFromJSON', () => {

    beforeAll(() => {

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve([
            {
                "image": "image1.png",
                "title": "Booki",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "link": "#"
            },
            {
                "image": "image2.png",
                "title": "Mon Vieux grimoire",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "link": "#"
            },
            {
                "image": "image3.png",
                "title": "Kasa",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "link": "#"
            }
        ]),
        })
      );
    });
  

    afterAll(() => {
      jest.restoreAllMocks();
    });
  

    test('doit créer les éléments HTML pour chaque élément du JSON', async () => {

        document.body.innerHTML = `<div id="portfolio"><div class="container"></div></div>`;

        await script.createPortfolioFromJSON()

        const data = await (await fetch()).json();

        expect(data).toEqual([
            {
                "image": "image1.png",
                "title": "Booki",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "link": "#"
            },
            {
                "image": "image2.png",
                "title": "Mon Vieux grimoire",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "link": "#"
            },
            {
                "image": "image3.png",
                "title": "Kasa",
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "link": "#"
            }
        ]); 
    });
});

describe('createSkillsFromJSON', () => {

    beforeAll(() => {

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve([
            {
                "image": "html-css.jpg",
                "title": "HTML - CSS",
                "text": "Intégration d’interfaces responsives et accessibles, utilisation de maquettes Figma, développement d’animations CSS"
            },
            {
                "image": "js.jpg",
                "title": "javascript",
                "text": "Manipulation du DOM, création d’éléments dynamiques, gestion de données de formulaires"
            },
            {
                "image": "react.jpg",
                "title": "React",
                "text": "Création d’applications React, création de composants et manipulation de leur état"
            },
            {
                "image": "gestion-de-projet.png",
                "title": "Gestion de projet",
                "text": "Analyse des besoins d’un client, définition d’une solution technique répondant aux besoins fonctionnelle, planification du projet"
            },
            {
                "image": "optimisation-et-debug.png",
                "title": "Optimisation et debug",
                "text": "Identification des anomalies et correction d’un site existant, optimisation SEO et performance et publication d’un site en ligne"
            },
            {
                "image": "test.png",
                "title": "Test",
                "title ": "Tests exploratoires, unitaires et d’intégration, définition d’une stratégie de test et d’un rédaction d’un cahier de recette, automatisation de tests E2E et d’API"
            }
        ]
        ),
        })
      );
    });
  

    afterAll(() => {
      jest.restoreAllMocks();
    });
  

    test('doit créer les éléments HTML pour chaque élément du JSON', async () => {

        document.body.innerHTML = `<div id="skills"><div class="container"></div></div>`;

        await script.createSkillsFromJSON()

        const data = await (await fetch()).json();

        expect(data).toEqual([
            {
                "image": "html-css.jpg",
                "title": "HTML - CSS",
                "text": "Intégration d’interfaces responsives et accessibles, utilisation de maquettes Figma, développement d’animations CSS"
            },
            {
                "image": "js.jpg",
                "title": "javascript",
                "text": "Manipulation du DOM, création d’éléments dynamiques, gestion de données de formulaires"
            },
            {
                "image": "react.jpg",
                "title": "React",
                "text": "Création d’applications React, création de composants et manipulation de leur état"
            },
            {
                "image": "gestion-de-projet.png",
                "title": "Gestion de projet",
                "text": "Analyse des besoins d’un client, définition d’une solution technique répondant aux besoins fonctionnelle, planification du projet"
            },
            {
                "image": "optimisation-et-debug.png",
                "title": "Optimisation et debug",
                "text": "Identification des anomalies et correction d’un site existant, optimisation SEO et performance et publication d’un site en ligne"
            },
            {
                "image": "test.png",
                "title": "Test",
                "title ": "Tests exploratoires, unitaires et d’intégration, définition d’une stratégie de test et d’un rédaction d’un cahier de recette, automatisation de tests E2E et d’API"
            }
        ]
        ); 
    });
});