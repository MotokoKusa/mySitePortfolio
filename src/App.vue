<template>
  <div :class="['portfolio', { 'dark-themes': isLightThemes }]">
    <SHeader @handler-change-themes="changeThemes" />
    <router-view />
    <!--    <SFooter />-->
  </div>
</template>

<script>
import "@/styles/main.scss";
import SHeader from "@/components/SHeader/SHeader";
// import SFooter from "@/components/SFooter/SFooter";
import { ref } from "vue";

export default {
  components: {
    SHeader,
    // SFooter,
  },

  setup() {
    const isLightThemes = ref(false);
    const changeThemes = () => {
      isLightThemes.value = !isLightThemes.value;
    };

    return {
      isLightThemes,
      changeThemes,
    };
  },
};
</script>
