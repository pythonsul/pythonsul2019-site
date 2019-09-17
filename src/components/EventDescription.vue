<template>
  <SectionTemplate :title="'O evento'" :angle="true">
    A conferência Python Sul é um evento regional da linguagem de programação Python, reunindo as comunidades do Rio Grande do Sul, Santa Catarina e Paraná. É um evento recente, sendo que a primeira edição foi realizada em 2017, e será anualmente realizada em uma cidade selecionado em um dos estados da região. No ano de 2019, iremos realizar a terceira edição da Python Sul de 12 a 14 de setembro em Curitiba/PR com o objetivo de promover a comunidade local e proporcionar um evento para a comunidade sul do Brasil, uma vez que a Python Brasil irá ocorrer em Ribeirão Preto/SP.
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '@/components/SectionTemplate.vue'
export default {
  name: 'EventDescription',
  components: {
    SectionTemplate
  }
}
</script>
