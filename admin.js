const API_URL = 'http://localhost:3333/api';

$(document).ready(function () {

    //FUNÇÃO AUXILIAR PARA ALTERNAR AS TELAS
    function alternarTelas(estaLogado) {
        if (estaLogado) {
            $('#login-admin').hide();
            $('#painel-administrativo').fadeIn();
            carregarCursosAdmin();
        } else {
            $('#login-admin').show();
            $('#painel-administrativo').hide();
        }
    }

    //VERIFICAR A SESSÃO DO ADMINISTRADOR  
    function verificarSessaoAdmin() {
        const token = localStorage.getItem('token');
        const clienteRaw = localStorage.getItem('cliente');
        try {
            if (token && clienteRaw && clienteRaw != 'undefined') {
                const usuario = JSON.parse(clienteRaw);
                if (usuario.tipo === 'admin') return alternarTelas(true);
            }
        } catch (error) {
            localStorage.clear();
        }
        alternarTelas(false);
    }

    //LOGIN
    $('#btn-login-admin').click(function () {
        const dados = { //DADOS ENVIADOS PARA O LOGIN
            email: $('#admin-email').val().trim(),
            senha: $('#admin-senha').val()
        };

        $.ajax({//ENVIA A REQUISIÇÃO PARA A API
            url: `${API_URL}/login`, //ROTA
            type: 'POST', //TIPO DE REQUISIÇÃO
            contentType: 'application/json', //CONTEÚDO JSON
            data: JSON.stringify(dados), //CONVERTE OS DADOS PARA O TIPO JSON

            success: function (res) {
                localStorage.setItem('token', res.token); //ARMAZENA O TOKEN LOCALMENTE

                localStorage.setItem('cliente', JSON.stringify(res.cliente)) //ARMAZENA OS DADOS DO CLIENTE
                alert('Login efetuado com sucesso!');
                alternarTelas(true);
            },
            error: function (err) {
                alert('Usuário ou senha incorretos.')
                console.log(err)
            }
        })
    });
    // SAIR
    $('#btn-logout').click(function () {
        localStorage.removeItem('token');
        localStorage.removeItem('cliente');
        location.reload();
    });


    // LISTAR CURSOS
    function carregarCursosAdmin() {

        $.get(`${API_URL}/cursos`, function (cursos) {

            let linhas = "";

            cursos.forEach(cur => {

                linhas += `
            <tr>
                <td>${cur.idCurso}</td>
                <td>${cur.titulo}</td>
                <td>${cur.descricao}</td>
                <td>${cur.cargaHoraria}h</td>
                <td>
                    ${cur.nivel == 1 ? 'Iniciante' :
                        cur.nivel == 2 ? 'Intermediário' :
                            'Avançado'}
                </td>
                <td>${cur.situacao}</td>

                <td>
                    <button class="btn btn-sm btn-outline-primary"
                        data-id="${cur.idCurso}"
                        id="btn-editar">
                            <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger"
                        data-id="${cur.idCurso}"
                        id="btn-excluir">
                            <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr> `
            });

            $('#tabela-admin').html(linhas);
        })
    }



    // CADASTRAR
    $('#form-admin').submit(function (e) {

        e.preventDefault();

        const novoCurso = {
            titulo: $('#cadastro-nome').val(),
            descricao: $('#cadastro-descricao').val(),
            cargaHoraria: $('#cadastro-hora').val(),
            nivel: $('#cadastro-nivel').val(),
            situacao: $('#cadastro-situacao').val()
        };

        $.ajax({
            url: `${API_URL}/cursos`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(novoCurso),

            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },

            success: function () {
                alert('Curso cadastrado com sucesso!');
                $('#adminModalCadastrar').modal('hide');
                $('#form-admin')[0].reset();
                carregarCursosAdmin();
            },

            error: function (err) {
                alert('Erro ao cadastrar curso.');
                console.log(err);
            }
        });
    });



    // ABRIR modal EDITAR
    $(document).on('click', '#btn-editar', function (cur) {

        const id = $(this).data("id");

        $.get(`${API_URL}/cursos?id=${id}`, function (cur) {

            const dados = Array.isArray(cur) ? cur.find(p => p.idCurso == id) : cur;

            if (dados) {
                $('#editar-id').val(dados.idCurso);
                $('#editar-nome').val(dados.titulo);
                $('#editar-descricao').val(dados.descricao);
                $('#editar-hora').val(dados.cargaHoraria);
                $('#editar-nivel').val(dados.nivel);
                $('#editar-situacao').val(dados.situacao);
                $('#adminModalEditar').modal('show');
            }
        })
    })





    // // SALVAR ATUALIZAÇÃO
    $('#btn-atualizar').click(function () {
        const id = $('#editar-id').val();
        console.log(id)


        const dadosAtualizados = {
            // idCurso: $('#editar-id').val(),
            titulo: $('#editar-nome').val(),
            descricao: $('#editar-descricao').val(),
            cargaHoraria: $('#editar-hora').val(),
            nivel: $('#editar-nivel').val(),
            situacao: $('#editar-situacao').val()
        }
        console.log(id)
        console.log(dadosAtualizados)

        $.ajax({
            url: `${API_URL}/cursos/${id}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(dadosAtualizados),

            headers: {
                'Authorization': 'Bearer' + localStorage.getItem('token')
            },

            success: function () {
                alert('Dados atualizados com sucesso!');
                $('#adminModalEditar').modal('hide');
                $('#form-editar')[0].reset();
                // carregarCursosAdmin();
            },

            error: function (err) {
                alert('Não foi possível atualizar os dados.');
                console.log(err);
            }
        });

    })



    // EXCLUIR
    $(document).on('click', '#btn-excluir', function () {

        const id = $(this).data("id");
        console.log(id)

        if (confirm('Deseja excluir este curso?')) {

            $.ajax({
                url: `${API_URL}/cursos/${id}`,
                type: 'DELETE',
                headers: {
                    'Authorization': 'Bearer' + localStorage.getItem('token')
                },


                success: function () {
                    alert('Curso removido com sucesso!');
                    carregarCursosAdmin();
                },

                error: function (err) {
                    alert('Erro ao excluir curso.');
                    console.log(err);
                }
            })
        }
    })

    verificarSessaoAdmin();
});