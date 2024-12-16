<script setup>
import { getCredencials } from '@/shared/util';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import axios from 'axios';
import { reactive } from 'vue'

const credenciais = getCredencials();
const header = {
    'credencial': credenciais.senha,
    'Content-Type': 'application/json',
}

const initialState = {
    nomeServico: '',
    tag: 'latest',
    image: '',
    memory: '32M',
    replicas: 1,
    envs: '',
    portaExterna: '',
    portaInterna: '',
    dominio: '',
}

const state = reactive({
    ...initialState,
})

const rules = {
    nomeServico: { required },
    tag: { required },
    image: { required },
    memory: { required },
    replicas: { required },
    portaExterna: { required },
    portaInterna: { required },
    dominio: { required },
}

const v$ = useVuelidate(rules, state)

function clear() {
    v$.value.$reset()

    for (const [key, value] of Object.entries(initialState)) {
        state[key] = value
    }
}

async function sendData(obj) {

    try {
        // Adiciona serviço do docker-compose
        await axios.put('http://' + credenciais.link + ':3000/api/compose/addService', {
            nomeServico: obj.nomeServico,
            tag: obj.tag,
            image: obj.image,
            replicas: obj.replicas,
            memory: obj.memory,
            ports: [
                `${obj.portaExterna}:${obj.portaInterna}`,
            ],
            envs: []
        },
            {
                headers: header,
            });

        // Adiciona serviço no Nginx.config
        await axios.put('http://' + credenciais.link + ':3000/api/nginx/addService', {
            nomeServico: obj.nomeServico,
            dominio: obj.dominio,
            porta: obj.portaExterna,
        },
            {
                headers: header,
            });

        // Atualiza serviços no cluster 
        await axios.post('http://' + credenciais.link + ':3000/api/docker/initCluster', {},
            {
                headers: header,
            });


    } catch (err) {
        state.error = err.response?.data?.message || 'Erro ao enviar os dados.';
        console.error(err);
    }
}

function submitForm() {
    v$.value.$validate().then((isValid) => {
        if (isValid) {
            sendData(state)
        } else {
            console.error('Erro na validação:', v$.value);
        }
    });
}

</script>

<template>
    <v-container fluid>
        <form>
            <v-text-field v-model="state.nomeServico" :error-messages="v$.nomeServico.$errors.map(e => e.$message)"
                label="Nome do serviço" required @blur="v$.nomeServico.$touch" placeholder="Ex: nomedoapp"
                @input="v$.nomeServico.$touch"></v-text-field>
            <v-text-field v-model="state.dominio" :error-messages="v$.dominio.$errors.map(e => e.$message)"
                label="Nome do domínio" placeholder="Ex: nomedoapp.luancode.dev" required @blur="v$.dominio.$touch"
                @input="v$.dominio.$touch"></v-text-field>

            <br>

            <v-text-field v-model="state.image" placeholder="Ex: luanalvesdev/aquarium"
                :error-messages="v$.image.$errors.map(e => e.$message)" label="Nome da imagem" required
                @blur="v$.image.$touch" @input="v$.image.$touch"></v-text-field>

            <v-text-field v-model="state.tag" :error-messages="v$.tag.$errors.map(e => e.$message)" label="Tag" required
                @blur="v$.tag.$touch" @input="v$.tag.$touch"></v-text-field>

            <br>

            <v-text-field v-model="state.memory" :error-messages="v$.memory.$errors.map(e => e.$message)"
                label="Memória" required @blur="v$.memory.$touch" @input="v$.memory.$touch"></v-text-field>

            <v-text-field v-model="state.replicas" :type="'number'"
                :error-messages="v$.replicas.$errors.map(e => e.$message)" label="Replicas" required
                @blur="v$.replicas.$touch" @input="v$.replicas.$touch"></v-text-field>

            <br>

            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="state.portaExterna" :type="'number'"
                        :error-messages="v$.portaExterna.$errors.map(e => e.$message)" label="Porta pública" required
                        placeholder="8000" @blur="v$.portaExterna.$touch" @input="v$.portaExterna.$touch" maxlength="20"
                        counter></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field v-model="state.portaInterna" :type="'number'" placeholder="8080"
                        :error-messages="v$.portaInterna.$errors.map(e => e.$message)" label="Porta do container"
                        required @blur="v$.portaInterna.$touch" @input="v$.portaInterna.$touch"></v-text-field>
                </v-col>
            </v-row>

            <v-textarea v-model="state.envs" :rules="rules" placeholder='DB_KEY="sua chave" 
MODE="Production"' label="Enviroments" counter></v-textarea>

            <v-btn class="me-4" @click="submitForm">
                submit
            </v-btn>
            <v-btn @click="clear">
                clear
            </v-btn>
        </form>
    </v-container>
</template>

<style scoped></style>
