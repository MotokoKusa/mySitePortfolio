<template>
  <div>
    <div class="aboutPage">
      <SAbout />
    </div>
    <SFooter />
  </div>
</template>

<script>
import SAbout from "@/components/SAbout/SAbout";
import SFooter from "@/components/SFooter/SFooter";

export default {
  name: "AboutPage",
  components: {
    SAbout,
    SFooter,
  },
};
</script>
