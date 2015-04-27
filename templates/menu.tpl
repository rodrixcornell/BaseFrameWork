<div id="menu">
    <ul class="menu">
        <li {if !$current}class="current"{/if}><a href="{$url}" ><span>Início</span></a></li>
        <li {if $current == 1}class="current"{/if}><a href="#"><span>Processo Seletivo</span></a>
            <div><ul>
                <li><a href="{$url}src/contrato/?s=1"><span>1-Inscrição do Candidato</span></a></li>
                <li><a href="{$url}src/evento/?s=1"><span>2-Lista de Classificados</span></a></li>
            </ul>
        </div>
    </li>
<li {if $current == 2}class="current"{/if}><a href="#"><span>Cadastros Básicos</span></a>
    <div><ul>
        <li><a href="{$url}src/unidade_gestora/?s=1" ><span>1-Critérios </span></a></li>
        <li><a href="{$url}src/forn_fisica/?s=1"><span>2-Modalidade</span></a></li>
        <li><a href="{$url}src/forn_juridica/?s=1"><span>3-Benefício</span></a></li>
        <li><a href="{$url}src/forn_juridica/?s=1"><span>4-Percentual da Bolsa</span></a></li>
        <li><a href="{$url}src/forn_juridica/?s=1"><span>5-Turno do Curso</span></a></li>
        <li><a href="{$url}src/forn_juridica/?s=1"><span>6-Instituições de Ensino</span></a></li>

       </li>
  </ul>
</div>
</li>

    <li {if $current == 5}class="current"{/if}><a href="#"><span>Relatórios</span></a>
        <div><ul>

        </ul>
    </div>
</li>

</li>
</ul>
</div>
