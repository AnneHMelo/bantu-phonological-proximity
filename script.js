/* =========================================================
   DADOS BÁSICOS DAS LÍNGUAS
========================================================= */

const languages = {

    Tsonga: {
        group: "S",
        region: "África Austral"
    },

    Ronga: {
        group: "S",
        region: "África Austral"
    },

    Tswa: {
        group: "S",
        region: "África Austral"
    },

    Xhosa: {
        group: "S",
        region: "África Austral"
    },

    Copi: {
        group: "S",
        region: "África Austral"
    },

    Mochi: {
        group: "E",
        region: "África Oriental"
    },

    Meru: {
        group: "E",
        region: "África Oriental"
    },

    Kauma: {
        group: "E",
        region: "África Oriental"
    },

    Kambe: {
        group: "E",
        region: "África Oriental"
    },

    Giryama: {
        group: "E",
        region: "África Oriental"
    },

    Yemba: {
        group: "Grass",
        region: "Grassfields"
    },

    Tikar: {
        group: "Grass",
        region: "Grassfields"
    },

    Ngomba: {
        group: "Grass",
        region: "Grassfields"
    },

    Ndemli: {
        group: "Grass",
        region: "Grassfields"
    },

    Ngiemboon: {
        group: "Grass",
        region: "Grassfields"
    }

};


/* =========================================================
   MOSTRAR INFORMAÇÕES DA LÍNGUA
========================================================= */

function showLanguage(language) {

    const data = languages[language];

    const panel =
        document.getElementById("language-panel");

    panel.innerHTML = `

        <h3>${language}</h3>

        <p>
            <strong>Grupo:</strong>
            ${data.group}
        </p>

        <p>
            <strong>Região:</strong>
            ${data.region}
        </p>

        <br>

        <button
            class="button primary"
            onclick="alert('Aqui podemos carregar o inventário de ${language}.')">

            Ver inventário

        </button>

    `;
}


/* =========================================================
   FILTRAR GRUPOS
========================================================= */

function filterGroup(group) {

    const buttons =
        document.querySelectorAll(".filter");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");

    console.log(
        "Grupo selecionado:",
        group
    );

}


/* =========================================================
   INVENTÁRIOS
========================================================= */

function loadInventory() {

    const container =
        document.querySelector(
            "#inventarios .visual-placeholder"
        );

    container.innerHTML = `

        <h3>
            Matriz de inventários
        </h3>

        <p>
            Os dados serão carregados a partir
            do arquivo inventarios.csv.
        </p>

    `;

}


/* =========================================================
   TRAÇOS
========================================================= */

function changeFeature() {

    const feature =
        document.getElementById("feature").value;

    const chart =
        document.getElementById("feature-chart");

    chart.innerHTML = `

        <h3>
            Traço: ${feature}
        </h3>

        <p>
            Visualização da distribuição de
            <strong>${feature}</strong>
            entre as línguas.
        </p>

    `;

}


/* =========================================================
   MEDIDAS
========================================================= */

function changeMeasure(measure) {

    const title =
        document.getElementById("measure-title");

    const buttons =
        document.querySelectorAll(".measure");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");


    const names = {

        jaccard:
            "Similaridade de Jaccard",

        features:
            "Distância de traços",

        inventory:
            "Similaridade de inventário"

    };

    title.textContent =
        names[measure];

}


/* =========================================================
   GRÁFICO 3D
========================================================= */

function animateGraph() {

    const graph =
        document.getElementById("three-d");

    graph.innerHTML = `

        <div class="three-d-message">

            <h3>
                Animação iniciada
            </h3>

            <p>
                A visualização 3D será animada
                quando o gráfico interativo for conectado.
            </p>

        </div>

    `;

}


function resetGraph() {

    const graph =
        document.getElementById("three-d");

    graph.innerHTML = `

        <div class="three-d-message">

            <h3>
                Visualização 3D
            </h3>

            <p>
                O gráfico interativo será carregado aqui.
            </p>

        </div>

    `;

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Página carregada."
        );

    }
);
