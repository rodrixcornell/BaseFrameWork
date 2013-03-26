<div id="menu">
    <ul class="menu">
        <li {if !$current}class="current"{/if}><a href="{$url}" ><span>Início</span></a></li>
       <li {if $current == 1}class="current"{/if}><a href="#"><span>Unidade</span></a>
            <div><ul>
                    <li><a href="{$url}src/unidade/" ><span>1-Unidade Organizacional</span></a></li>
                    <li><a href="{$url}src/nivel_admin/"><span>2-Nível Administrativo</span></a></li>
                    <li><a href="{$url}src/tipo_unidade/"><span>3-Tipo Unidade Organizacional</span></a></li>
                    <li><a href="{$url}src/nivel_autoridade/"><span>4-Nível Autoridade</span></a></li>
                    <li><a href="{$url}src/tipo_autoridade/"><span>5-Tipo Autoridade</span></a></li>
                    <li><a href="{$url}src/agrupamento/"><span>6-Fator Agrupamento</span></a></li>
                    <li><a href="{$url}src/gestao/"><span>7-Sistema de Gestão</span></a></li>
                    <li><a href="{$url}src/tipo_gestao/"><span>8-Tipo de Sistema de Gestão</span></a></li>
                 </ul>
            </div>
        </li>
        
        <li {if $current == 2}class="current"{/if}><a href="#"><span>Instalação</span></a>
            <div><ul>
                     <li><a href="{$url}src/instalacao/"><span>1-Instalação Organizacional</span></a></li>
                	 <li><a href="{$url}src/tipo_instalacao/"><span>2-Tipo Instalação</span></a></li>
                 </ul>
            </div>
        </li>
        
         <li {if $current == 3}class="current"{/if}><a href="#"><span>Função</span></a>
            <div><ul>
                     <li><a href="{$url}src/funcao/"><span>1-Função Organizacional</span></a></li>
                     <li><a href="{$url}src/qualif_tecnica/"><span>2-Qualificação Técnica</span></a></li>
                     <li><a href="{$url}src/qualif_admin/"><span>3-Qualificação Administrativa</span></a></li>
                     <li><a href="{$url}src/tipo_qualif/"><span>4-Tipo Qualificação</span></a></li>
                 </ul>
            </div>
        </li>
        
		<li {if $current == 7}class="current"{/if}><a href="#"><span>Relatórios</span></a>
            <div><ul>
                     <li><a href="{$url}src/relatorios/unidade/"><span>1-Unidade Organizacional</span></a></li>
                     <li><a href="{$url}src/relatorios/instalacao/"><span>2-Instalação Organizacional</span></a></li>
                     <li><a href="{$url}src/relatorios/funcao/"><span>3-Função Organizacional</span></a></li>
                 </ul>
            </div>
        </li>
    </ul>
</div>