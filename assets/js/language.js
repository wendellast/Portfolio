document.getElementById("lang").addEventListener("change", function() {
    const lang = document.getElementById("lang").value;

    if (lang == "en"){
        location.reload()
    }


    let translations = {
    "pt-br": {
        "im": "Olá, Eu sou",
        "dev": "Desenvolvedor de Software",
        "introl": "Minha intro",
        "aboutl": "Sobre Me",
        "experiencel": "Experiência",
        "expyearl": "4 Anos",
        "competedl": "Concluido",
        "projectsl": "5+ Projetos",
        "suportel": "Suporte",
        "descriptionll1":"Olá, meu nome é Wendel Alves. Sou desenvolvedor de software com foco na área de backend web. Atualmente, trabalho com as linguagens de programação Python, Go e JavaScript. Desenvolvo sites e aplicações completas utilizando ferramentas como Django e Gin-Gonic para aperfeiçoamento.",
        "descriptionll2":"Estou sempre em busca de novos conhecimentos e desafios. Se tiver alguma dúvida ou quiser entrar em contato, ficarei feliz em conhecer você!",
        "contactl": "Contate-Me",
        "abilityl": "Minhas Habilidades",
        "experienci2l": "Minhas Experiências",
        "languagesl": "Frameworks & Linguagens",
        "touchl": "Entrar em contato",
        "contamell": "Contate-Me",
        "talkl": "Fale comigo",
        "writeme": "Escreva-me sua mensagem",
        "myport":"Meu Portfolio",
        "recent-work": "Trabalho recente",
        "toolsl": "Ferramentas",
        "submit": "Enviar Messagem",
        "awbo": "Tudo Será Um",
        "aboutl2": "Sobre",
        "skills2l": "Habilidades",
        "worrk2": "Projetos",
        "contact2k": "Contato"
    }

    };



    // Atualize o conteúdo do site com as traduções corretas
    document.getElementById("im").textContent = translations[lang]["im"];
    document.getElementById("dev").textContent = translations[lang]["dev"];
    document.getElementById("introl").textContent = translations[lang]["introl"];
    document.getElementById("aboutl").textContent = translations[lang]["aboutl"];
    document.getElementById("experiencel").textContent = translations[lang]["experiencel"];
    document.getElementById("expyearl").textContent = translations[lang]["expyearl"];
    document.getElementById("competedl").textContent = translations[lang]["competedl"];
    document.getElementById("projectsl").textContent = translations[lang]["projectsl"];
    document.getElementById("suportel").textContent = translations[lang]["suportel"];
    document.getElementById("descriptionll1").textContent = translations[lang]["descriptionll1"];
    document.getElementById("descriptionll2").textContent = translations[lang]["descriptionll2"];
    document.getElementById("contactl").textContent = translations[lang]["contactl"];
    document.getElementById("abilityl").textContent = translations[lang]["abilityl"];
    document.getElementById("experienci2l").textContent = translations[lang]["experienci2l"];
    document.getElementById("languagesl").textContent = translations[lang]["languagesl"];
    document.getElementById("touchl").textContent = translations[lang]["touchl"];
    document.getElementById("contamell").textContent = translations[lang]["contamell"];
    document.getElementById("talkl").textContent = translations[lang]["talkl"];
    document.getElementById("writeme").textContent = translations[lang]["writeme"];
    document.getElementById("myport").textContent = translations[lang]["myport"];
    document.getElementById("recent-work").textContent = translations[lang]["recent-work"];
    document.getElementById("toolsl").textContent = translations[lang]["toolsl"];
    document.getElementById("submit").textContent = translations[lang]["submit"];
    document.getElementById("awbo").textContent = translations[lang]["awbo"];
    document.getElementById("aboutl2").textContent = translations[lang]["aboutl2"];
    document.getElementById("skills2l").textContent = translations[lang]["skills2l"];
    document.getElementById("worrk2").textContent = translations[lang]["worrk2"];
    document.getElementById("contact2k").textContent = translations[lang]["contact2k"];
});


