<template>
  <SectionTemplate :title="'Key Notes'" :light="true">
    <KeyNotes
      :image="'thais_viana.jpg'"
      :name="'THAIS VIANA'"
      :identification="'Sócia e desenvolvedora no studio hub9'"
      :description="'Bacharel em Ciência da Computação pela UFRJ (Universidade Federal do Rio de Janeiro) e mestre em Modelos e Arquiteturas de Sistemas Inteligentes pelo PPGI-UFRJ (Programa de Pós Graduação em Informática), onde pesquisou sobre dados abertos e otimização de integração de modelos não relacionais, com foco em ontologias. Entusiasta em tecnologia e apaixonada por desafios ingressou no PythonRio e PyLadies Rio à quatro anos ajudando na luta pelo empoderamento digital de minorias.'"
    />

    <KeyNotes
      :reverse="true"
      :image="'melissa_mendonca.jpg'"
      :name="'MELISSA MENDONÇA'"
      :identification="'Professora e pesquisadora na UFSC'"
      :description="'Professora no Departamento de Matemática na Universidade Federal de Santa Catarina (UFSC), pesquisadora em Matemática Aplicada com foco em Otimização, Análise Numérica e Álgebra Linear Numérica. Desenvolvedora de Software Científico. Entusiasta de Python, LaTeX e software livre em geral.'"
    />

    <KeyNotes
      :image="'mario_sergio.jpg'"
      :name="'MARIO SÉRGIO'"
      :identification="'Gerente de Inovação Cívica @ Open Knowledge Brasil'"
      :description="'Mário Sérgio é gerente do programa de Inovação Cívica da Open Knowledge Brasil. Atual presidente da Associação Python Brasil (APyB). Em 2016 foi o responsável pela organização da Conferência Python Brasil[12], que teve sede em Florianópolis-SC. Em 2017 foi nomeado fellow member da Python Software Foundation nos Estados Unidos.'"
    />
  </SectionTemplate>
</template>

<script>
import SectionTemplate from '@/components/SectionTemplate.vue'
import KeyNotes from '@/components/KeyNotes.vue'
export default {
  name: 'EventDescription',
  components: {
    SectionTemplate,
    KeyNotes
  }
}
</script>
