<script setup>
import { useMenuStore } from '@/stores/menu'

const store = useMenuStore()

</script>

<template>
    <div id="viewport">
        <!-- Sidebar -->
        <div id="sidebar">
            <ul class="nav">
                <li :class="store.isSelected === 0 ? 'selecionado' : ''">
                    <router-link to="/dashboard" @click="store.atualizaMenu(0)">
                        <i class="zmdi zmdi-view-dashboard"></i> Dashboard
                    </router-link>
                </li>
                <li :class="store.isSelected === 1 ? 'selecionado' : ''">
                    <router-link to="/registro" @click="store.atualizaMenu(1)">
                        <i class="zmdi zmdi-link"></i> Registro de Serviços
                    </router-link>
                </li>
                <li :class="store.isSelected === 2 ? 'selecionado' : ''">
                    <router-link to="/gestao" @click="store.atualizaMenu(2)">
                        <i class="zmdi zmdi-widgets"></i> Gestão de Serviços
                    </router-link>
                </li>
                <li :class="store.isSelected === 3 ? 'selecionado' : ''">
                    <router-link to="/operacoes" @click.prevent="store.atualizaMenu(3)">
                        <i class="zmdi zmdi-calendar"></i> Operações Técnicas
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500');

#viewport {
    padding-left: 250px;
    transition: all 0.5s ease;
}

#sidebar {
    z-index: 1000;
    position: fixed;
    left: 250px;
    width: 250px;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #37474F;
    transition: all 0.5s ease;
}

#sidebar header {
    background-color: #263238;
    font-size: 20px;
    line-height: 52px;
    text-align: center;
}

#sidebar header a {
    color: #fff;
    display: block;
    text-decoration: none;
}

#sidebar header a:hover {
    color: #fff;
}

#sidebar .nav a {
    border-bottom: 1px solid #455A64;
    color: #CFD8DC;
    font-size: 18px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
}

#sidebar .nav a:hover {
    color: #ECEFF1;
}

#sidebar .nav a i {
    margin-right: 16px;
}
</style>
