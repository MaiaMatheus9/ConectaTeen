document.addEventListener("DOMContentLoaded", function() {
    // Obtém todos os elementos com a classe 'modulo' do navbar
    var modulosNavbar = document.querySelectorAll('.modulo-navbar');

    // Adiciona um ouvinte de evento de clique a cada link no menu
    modulosNavbar.forEach(function(link, index) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Verifica se todos os módulos anteriores foram visitados
            var modulosAnterioresVisitados = Array.from(modulosNavbar).slice(0, index).every(function(modulo) {
                return modulo.classList.contains('visited');
            });

            if (index === 0 || modulosAnterioresVisitados) {
                // Marca o módulo atual como visitado
                modulosNavbar[index].classList.add('visited');

                // Rola para o módulo atual
                modulosNavbar[index].scrollIntoView({ behavior: "smooth" });
            } else {
                alert("Por favor, conclua os módulos anteriores primeiro.");
            }
        });
    });

    // Função para verificar respostas do questionário e desbloquear módulos da seção
    window.verificarRespostas = function(modulo) {
        var questionario = document.getElementById(`questionario-${modulo}`);
        var respostasCorretas = 0;

        // Adapte as condições para verificar respostas e incrementar respostasCorretas
        if (questionario.pergunta1.value.toLowerCase() === 'android') {
            respostasCorretas++;
        }

        var totalPerguntasNoModulo = 1;
        // Adapte conforme o número de perguntas

        // Calcule a porcentagem de acertos
        var porcentagemAcertos = (respostasCorretas / totalPerguntasNoModulo) * 100;

        // Verifique se a porcentagem de acertos é maior que 70%
        if (porcentagemAcertos >= 70) {
            // Desbloqueie o próximo módulo da seção apenas se houver um módulo seguinte disponível
            var modulosSecao = document.querySelectorAll('.modulo-sec');
            if (modulo > 0 && modulo < modulosSecao.length) {
                modulosSecao[modulo - 1].classList.remove('locked');
            }

            // Rola para o próximo módulo
            modulosSecao[modulo - 1].scrollIntoView({ behavior: "smooth" });

            var modulosNavbar = document.querySelectorAll('.modulo-navbar');
            modulosNavbar[modulo].classList.add('visited');
            modulosNavbar[modulo].classList.remove('locked-navbar');

            var modulosAnterioresVisitados = Array.from(modulosNavbar).slice(0, index).every(function(modulo) {
                return modulo.classList.contains('visited');
            });
        } else {
            alert("Por favor, revise suas respostas. A porcentagem de acertos deve ser maior que 70% para desbloquear o próximo módulo.");
        }
    };
});
