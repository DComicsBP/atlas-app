declare var jquery: any;
declare var $: any;

function mostraInicio() {
  $('#panel').load('inicio.html');

}

function destacaMenu(menu) {
  const ide = '#menu-' + menu;
  $(ide).css('background-color', '#fff9ab');

  for (let index = 1; index < menu; index++) {
    const idi = '#menu-' + index;
    $(idi).css('background-color', 'white');
  }

  for (let index = 6; index > menu; index--) {
  const ida = '#menu-' + index;
  $(ida).css('background-color', 'white');
  }
}

function mostraDropdown(id) {
 $(this).dropdown('toggle');
}

function mostraLinks() {
  $('#panel').load('mostra_links.html');
}

function mostraEquipe() {
  $('#panel').load('mostra_equipe.html');
}

function mostraProducao() {
  $('#panel').load('mostra_producao.php');
}

function mostraTodosProjetos(pagina) {
  $('#todos-projetos').load('mostra_projetos.php', {pagina: pagina});
}

function buscaProjeto(pagina) {
  const filtro = '%' + $('#pesquisa').val() + '%';
  $('#todos-projetos').load('mostra_projetos.php', {filtro: filtro, pagina: pagina});

  $('#mostra-todos-projetos')[0].click();
}

function mostraProjeto(id, tipo) {
  if (tipo === 'todos') {
    $('#todos-projetos').load('mostra_projeto.php', {id: id});
  } else if (tipo === 'grande_area') {
    $('#grande-area').load('mostra_projeto.php', {id: id});
  } else if (tipo === 'tipo') {
    $('#tipo').load('mostra_projeto.php', {id: id});
  }
}

function mostraGrandeArea(grandeArea, pagina) {
  $('#grande-area').load('mostra_grande_area.php', {grande_area: grandeArea, pagina: pagina});
}

function mostraTipo (tipo, pagina) {
  $('#tipo').load('mostra_tipo.php', {tipo: tipo, pagina: pagina});
}

function mostraNoticias(pagina) {
  $('#panel').load('mostra_noticias.php', {pagina: pagina});
}

function mostraNoticiasAno(pagina) {
  const ano = $('[name=ano]').val();
  $('#noticias').load('mostra_noticias_ano.php', {ano: ano, pagina: pagina});
}

function buscaNoticia(pagina) {
  const filtro = '%' + $('#pesquisa').val() + '%';
  $('#panel').load('mostra_noticias.php', {filtro: filtro, pagina: pagina});
}

function mostraInfograficos() {
  $('#panel').load('mostra_infograficos.php');
}


function mapaMostraGrandeArea() {
  $('#panel').load('mostra_producao.php', function() {
    $('#mostra-grande-area').click();
  });
}

function mapaMostraTipo() {
  $('#panel').load('mostra_producao.php', function() {
    $('#mostra-tipo').click();
  });
}

function mostraAcessibilidade() {
  $('#panel').load('acessibilidade.php');
}

function mostraMultimidias() {
  $('#panel').load('mostra_multimidia.php');
}

function contraste(cont) {
  if (cont === 1) {
    $('.panel').css('background-color', '#000000');
    $('#panel').css('background-color', '#000000');
    $('button.menu').css({'background-color': 'rgba(255,255,255,0.3)', 'border-color' : 'white'});
    $('#mapa').css('background-color', '#000000');
    $('#footer-brasil').css('background-color', '#000000');
    $('body').css({'color': '#ffffff', 'background': 'none #000000'});
    $('a').css('color', '#fff333');
    $('.dropdown-menu').css({'background-color': '#000000', 'border-color': 'white'});
    $('#barra-brasil').css('background-color', '#000000');

  $('#bt_contraste').attr('href', 'index.php?contraste=0');
} else {
$('.panel').css('background-color', '');

$('#panel').css('background-color', '');

$('button.menu').css('background-color', '');
$('#mapa').css('background-color', '');
$('#footer-brasil').css('background-color', '');
$('body').css({'color': '', 'background-image': 'url("Imagens/wallpaper.jpg")', 'background-size': 'contain'});
$('a').css('color', '');
$('.dropdown-menu').css({'background-color': '', 'border-color': ''});
$('#barra-brasil').css('background-color', '');
$('#bt_contraste').attr('href', 'index.php?contraste=1');
}
}

function mostraMapa() {
$('#panel').load('mostra_mapa.html');
}

$(document).keydown(function(e) {
const code = e.keyCode;

if (code === 49) {
if (e.altKey) {
$('#atalho-panel')[0].click();
}
}

if (code === 50) {
if (e.altKey) {
$('#atalho-menu')[0].click();
}
}

if (code === 51) {
if (e.altKey) {
$('#atalho-busca')[0].click();
}
}

if (code === 52) {
if (e.altKey) {
$('#atalho-rodape')[0].click();
}
}
});
