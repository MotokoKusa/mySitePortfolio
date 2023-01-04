<template>
  <section class="about">
    <div class="container">
      <div class="about__wrap">
        <div class="about__photo">
          <img
            class="about__photo-pic"
            src="../../assets/images/me.jpg"
            alt="Me"
          />
        </div>
        <div class="about__content">
          <p
            class="about__content-txt text--color-1"
            v-html="$t('about.description')"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SAbout",
};
</script>
